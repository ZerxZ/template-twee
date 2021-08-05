const { spawn } = require("child_process");
const path = require("path");
const _resolve = (...w) => path.resolve(__dirname, `../`, ...w);
const { platform, arch } = require("os");
const klawSync = require("klaw-sync");

function getJS() {
  const modulePath = _resolve("");
  const JS = [];
  const test = klawSync("modules");
  test.map((item) => {
    const FilePath = item.path;
    const isJSFile = path.extname(FilePath) === ".js";

    if (isJSFile) {
      JS.push(`--module=${_resolve(path.relative(modulePath, FilePath))}`);
    }
  });
  return JS;
}

const COMMANDS = [];
const TWEEGO_PATH = _resolve("devTools/tweego/StoryFormats");
const options = {
  html: `-o ${_resolve("dist/index.html")}`,
  Head: `--head ${_resolve("public/head.html")}`,
  src: _resolve("src"),
  isWatch: process.argv.includes("-w") ? "-w" : "",
  ...getJS(),
};
for (const key in options) {
  COMMANDS.push(options[key]);
}

const SYSTEM = {
  platform: platform(),
  arch: arch(),
};

const tweego = () => {
  const system = {
    win32: "win",
    linux: "linux",
    darwin: "osx",
  };
  if (!system[SYSTEM.platform])
    throw new Error("请用 Windows系统, Linux系统 或 Mac系统");
  return _resolve(
    `devTools/tweego/tweego_${system[SYSTEM.platform]}${
      SYSTEM.arch.includes("64") ? "64" : "86"
    }${SYSTEM.platform === "win32" ? ".exe" : ""}`
  );
};

const string = tweego() + " " + COMMANDS.join(" ");
console.log(string);
const result = spawn("cmd.exe", ["/c", string], {
  env: {
    TWEEGO_PATH,
  },
});
result.stdout.on("data", (data) => {
  console.log(data.toString());
});

result.stderr.on("data", (data) => {
  console.error(data.toString());
});
