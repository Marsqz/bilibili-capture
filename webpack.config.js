const path = require("path");
// const fs = require("fs");
// const webpack = require("webpack");
// let banner = fs.readFileSync("./src/banner.txt", "utf8");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "output.js",
    path: path.resolve(__dirname, "build")
  }
  // plugins:[
  // new webpack.BannerPlugin({
  // banner,
  // entryOnly:true,
  // raw:true, // 直接输出内容, 否则会加上注释,
  // test:"output.js",
  // })
  // ]
};
