import ymlPlugin from "esbuild-plugin-yaml";
import dsv from "esbuild-plugin-dsv";
import ImportGlob from "esbuild-plugin-import-glob";
import esbuildPluginTsc from "esbuild-plugin-tsc";
import esbuildServe from "esbuild-serve";
import babel from "esbuild-plugin-babel";
import dts from "esbuild-plugin-d.ts";

//---------------------

import { globPlugin } from "esbuild-plugin-glob";
const ImportGlobPlugin = ImportGlob.default;
const yamlPlugin = ymlPlugin.yamlPlugin;
const dsvPlugin = dsv.dsvPlugin;
const dtsPlugin = dts.dtsPlugin;

//---------------------

const options = {
  entryPoints: ["Code/App.*s", "Code/module/*.*s", "Code/Mods/*.*s"],
  bundle: true,
  outdir: "./modules",
  // outfile: "test.js",
  tsconfig: "tsconfig.json",
  target: "chrome58,firefox57,safari11,edge16".split(","),
  plugins: [
    globPlugin(),
    ImportGlobPlugin(),

    yamlPlugin(),
    dsvPlugin(),
    // esbuildPluginTsc(),

    // dtsPlugin(),
    // babel(),
  ],
  format: "esm",
};
esbuildServe(options, {
  port: 8008,
  root: "./dist",
  live: true,
});
// require("esbuild")
//   .build({})
//   .catch(() => process.exit(1));
