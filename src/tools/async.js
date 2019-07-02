/*
 * @Description: 异步多用途的一些函数或者工具
 * @Author: zhangjinlong
 * @LastEditors: zhangjinlong
 * @Date: 2019-03-08 16:28:42
 * @LastEditTime: 2019-07-02 10:05:12
 */

import { isImg } from "./index";

/**
 * 异步 获取图片的宽高尺寸
 * @param {file} file
 * @returns {object} {width, height}
 */
function getImgSize(file) {
  return new Promise(function(resolve, reject) {
    let type = file.type || "";
    if (!isImg(type)) {
      console.log("文件不是图片类型");
      reject(new Error("file isn't image"));
      return;
    }
    let url = window.URL || window.webkitURL;
    let img = new Image();
    img.onload = function() {
      let width = this.width;
      let height = this.height;
      resolve({ width, height });
    };
    let name = file.name || "";
    img.onerror = function() {
      reject(new Error("Could not load image at " + name));
    };
    img.src = url.createObjectURL(file);
  });
}
/**
 * 获取在线图片的宽高尺寸
 * @param {string} url
 * @returns {object} {width, height}
 */
function getImgSizeOnline(url) {
  return new Promise(function(resolve, reject) {
    let img = new Image();
    img.onload = function() {
      let width = this.width;
      let height = this.height;
      // console.log(this);
      resolve({ width, height });
    };
    img.onerror = function() {
      reject(new Error("Could not load image at" + url));
    };
    img.src = url;
  });
}
/**
 * 读取文件内容
 * @param {file} file
 * @param {string} type ["Binary" || "Text" || "DataURL" || "Array"]
 * @returns {} result
 */
function getFileContent(file, type = "Binary") {
  return new Promise(function(resolve, reject) {
    //判断浏览器是否兼容FileReader接口
    if (typeof FileReader === "undefined") {
      console.log("你的浏览器不支持FileReader接口");
      return;
    }
    let reader = new FileReader();
    if (type === "Binary") {
      //将文件读取为二进制编码
      reader.readAsBinaryString(file);
    } else if (type === "Text") {
      //将文件读取为文本
      reader.readAsText(file);
    } else if (type === "DataURL") {
      //将文件读取为DataURL
      reader.readAsDataURL(file);
    } else if (type === "Array") {
      //将文件读取为ArrayBuffer对象
      reader.readAsArrayBuffer(file);
    } else if (type === "abort") {
      //中断(终止)读取操作
      reader.abort();
    } else {
      //默认，将文件读取为二进制编码 type === "Binary"
      reader.readAsBinaryString(file);
    }
    //成功读取
    reader.onload = function(e) {
      resolve(e.target.result);
    };
    //文件读取中断
    reader.onabort = function(e) {
      //   console.log("文件读取中断");
    };
    //文件读取出错
    reader.onerror = function(e) {
      console.log("文件读取出错");
      reject("文件读取错误" + e);
    };
    //读取开始
    reader.onloadstart = function(e) {
      //   console.log("文件开始读取");
    };
    //读取完成，无论成功失败
    reader.onloadend = function(e) {
      //   console.log("文件读取结束");
    };
  });
}

export { getImgSize, getImgSizeOnline, getFileContent };
