import ymlPlugin from "esbuild-plugin-yaml";
import dsv from "esbuild-plugin-dsv";
import ImportGlob from "esbuild-plugin-import-glob";
import esbuildPluginTsc from "esbuild-plugin-tsc";
import esbuildServe from "esbuild-serve";
import babel from "esbuild-plugin-babel";
import dts from "esbuild-plugin-d.ts";
//---------------------
console.log("hello");
import { globPlugin } from "esbuild-plugin-glob";
const ImportGlobPlugin = ImportGlob.default;
const yamlPlugin = ymlPlugin.yamlPlugin;
const dsvPlugin = dsv.dsvPlugin;
const dtsPlugin = dts.dtsPlugin;
//---------------------
const options = {
  entryPoints: ["Code/**/*.js", "Code/**/*.ts"],
  charset: "utf8",
  bundle: true,
  entryNames: "[dir]/[name]",
  outdir: "./modules",
  outbase: "Code",
  // outfile: "test.js",
  // tsconfig: "./Code/tsconfig.json",
  target: "chrome58,firefox57,safari11,edge16".split(","),
  plugins: [
    globPlugin(),
    ImportGlobPlugin(),

    yamlPlugin(),
    dsvPlugin({
      transform(data, extension) {
        console.log(data);
        return data;
      },
    }),

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
