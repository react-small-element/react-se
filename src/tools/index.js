import forge from "node-forge";
import { importExcelToJson, exportJsonToExcel } from "./jsExcel";
import { getImgSize, getImgSizeOnline, getFileContent } from "./async";
import { isItWhite } from "./safetyList";
/**
 * 获取body高度
 * @return {number}
 */
function getBodyHeight() {
  return document.body.offsetHeight;
}
/**
 * 获取body宽度
 * @return {number}
 */
function getBodyWidht() {
  return document.body.offsetWidth;
}
/**
 * sha1加密
 * @param {string} str
 * @return {string}
 */
function sha1(str) {
  let md = forge.md.sha1.create();
  md.update(str);
  return md.digest().toHex();
}
/**
 * md5加密
 * @param {string} str
 * @return {string}
 */
function md5(str) {
  let md = forge.md.md5.create();
  md.update(str);
  return md.digest().toHex();
}
/**
 * 时间日期格式化
 * @param {Date} date
 * @return {string}
 */
function dateTimeToFormat(date) {
  if (typeof date !== "object") {
    console.log(
      "使用dateTimeToFormat工具函数时，所传参数date不是date object类型"
    );
    return;
  }
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = date.getDate() + " ";
  var h = date.getHours() + ":";
  var m = date.getMinutes() + ":";
  var s = date.getSeconds();
  return Y + M + D + h + m + s;
}
/**
 * 时间年月日期格式化
 * @param {Date} date
 * @return {string}
 */
function dateToFormat(date) {
  if (typeof date !== "object") {
    console.log(
      "使用dateTimeToFormat工具函数时，所传参数date不是date object类型"
    );
    return;
  }
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D = date.getDate() + " ";
  return Y + M + D;
}
/**
 * 日期字符串解析
 * @param {Date string} dateString 日期时间格式的字符串
 * @return {Date object}
 */
function dateParse(dateString) {
  let date = null;
  try {
    date = new Date(Date.parse(dateString));
  } catch (error) {
    console.log("日子字符串解析错误" + error);
    return;
  }
  return date;
}
/**
 * json解析函数
 * @param {json} json
 * @return {object}
 */
function JSONParse(json) {
  if (!json) {
    console.log("json 为空，不进行解析");
    return;
  }
  let obj = {};
  try {
    obj = JSON.parse(json);
  } catch (error) {
    console.log("json 格式不规范，解析错误。" + json);
    return;
  }
  return obj;
}
/**
 * JavaScript值(对象或者数组)转换为一个 JSON字符串
 * @param {object || array} obj
 * @return {string json}
 */
function JSONStringify(obj) {
  let json = "";
  try {
    json = JSON.stringify(obj);
  } catch (error) {
    console.log("object 或 array 格式不规范，转换失败。" + obj);
    return;
  }
  return json;
}
/**
 * 过滤,挑选出版本号字符串
 * @param {string} val
 * @return {string}
 */
function pickOutVersion(val) {
  val = val.replace(/[^\d{1,}.]/g, "");
  return (val = val.replace(/^\./g, ""));
}
/**
 * 判断两个版本号大小—— val1 大于(1)等于(0)小于(-1) val2
 * @param {string} val1
 * @param {string} val2
 * @return {number}
 */
function compareGtVersion(val1, val2) {
  let val1_arr = val1.split(".");
  let val2_arr = val2.split(".");
  let val1_arr_lenght = val1_arr.length;
  let val2_arr_lenght = val2_arr.length;
  let for_time =
    val1_arr_lenght >= val2_arr_lenght ? val1_arr_lenght : val2_arr_lenght;
  for (var i = 0; i < for_time; i++) {
    let val1int = parseInt(val1_arr[i]);
    let val2int = parseInt(val2_arr[i]);
    if (val1int > val2int) {
      return 1;
    }
    if (i === for_time - 1 && val1int === val2int) {
      return 0;
    }
  }
  return -1;
}
/**
 * 过滤,挑选出中文字符串
 * @param {string} val
 * @return {string}
 */
function pickOutChinese(val) {
  val = val.replace(/[^\u4e00-\u9fa5]/g, "");
  return val;
}
/**
 * 判断是否是中文
 * @param {string} val
 * @return {boolean}
 */
function isChinese(val) {
  let patt = /^[\u4e00-\u9fa5]+$/g;
  return patt.test(val);
}
/**
 * 过滤，挑选出数字csv格式字符串
 * @param {string} val
 * @return {string}
 */
function pickOutNumberCSV(val) {
  val = val.replace(/[^\d{1,},]/g, "");
  return (val = val.replace(/^,/g, ""));
}
/**
 * 过滤，挑选出正整数数字
 * @param {string} val
 * @return {integer}
 */
function pickOutNumber(val) {
  let newVal = val.replace(/[^\d+]/g, "");
  return newVal;
}
/**
 * 过滤，挑选出数字和负号
 *
 * @param {string} val
 * @return {integer}
 */
function pickOutNumberAndNegative(val) {
  val = val.replace(/[^\d-]/g, ""); //清除"数字"和"."以外的字符
  return val;
}
function isInteger(val) {
  let patt = /^-?\d+$/g;
  return patt.test(val);
}
/**
 * 判断是否是json字符串
 * @param {string} str
 * @return {boolean}
 */
function isJsonString(str) {
  // console.log(str);
  if (typeof str === "string") {
    try {
      var obj = JSON.parse(str);
      if (typeof obj === "object" && obj) {
        return true;
      }
      return false;
    } catch (e) {
      console.log("非json格式字符串");
      // console.log(e);
      return false;
    }
  }
  console.log("It is not a string!");
}
/**
 * 判断是否是http或http或ftp的url
 * @param {string} str
 * @return {boolean}
 */
function isUrl(str) {
  let match = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
  let res = match.test(str);
  if (!res) {
    return false;
  }
  return true;
}
/**
 * 获取url参数
 * @param {string} variable
 * @return {string}
 */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
/**
 * 过滤小数点后n位,不传n或传n不为number则不进行小数点截取
 * @param {string} val
 * @param {int} n
 * @return {number}
 */
function pickOutDecimalPointN(val, n) {
  val = val.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
  val = val.replace(/^\./g, ""); //验证第一个字符是数字
  val = val.replace(/\.{2,}/g, "."); //只保留第一个, 清除多余的
  val = val
    .replace(".", "$#$")
    .replace(/\./g, "")
    .replace("$#$", ".");
  if (typeof n === "number") {
    val = val.replace(
      new RegExp("^(\\-?\\d*\\.?\\d{0," + n + "})(\\d*)$"),
      "$1"
    );
  }
  return val;
}
/**
 * 检查字符串是否是数字字符串
 * @param {string} str 要判断是字符串
 * @param {int} n 要判断是小数点后n未,n为0，则为整数，n不传或传非int型,则小数点后无穷位
 * @return {boolean}
 */
function isDecimalPointN(str, n) {
  //判断字符串是否是只包含数组和一个小数点
  let objRegExp = /^\d+(\.)?(\d*)$/g;

  let test = objRegExp.test(str);
  if (!test) {
    console.log("非数字");
    return false;
  }
  //如果不是小数
  if (n === 0) {
    //判断是否存在"."
    objRegExp = /(\.)+/g;
    test = objRegExp.test(str);
    if (test) {
      console.log("存在小数点");
      return false;
    }
  }
  //是小数，判断小数点后位数
  if (n && typeof n == "number") {
    //判断是否存在"."
    objRegExp = /(\.)+/g;
    test = objRegExp.test(str);
    if (!test) {
      console.log("非小数");
      return false;
    }
    if (typeof str !== "string") {
      str = str.toString();
    }
    let length = 0;
    try {
      length = str.split(".")[1].length; //截取小数位并获取小数位长度
    } catch (error) {
      console.log("截取小数后的位数时出错");
      console.log(error);
    }
    if (length !== n) {
      console.log("位数不对");
      return false;
    }
  }
  return true;
}
/**
 * 判断是否是图片
 * @param {string} str 文件的type值
 * @return {boolean}
 */
function isImg(str) {
  let match = /^(image\/)/;
  let res = match.test(str);
  if (!res) {
    return false;
  }
  return true;
}
/**
 * 获取url路径的拓展名
 * @param {string} url
 * @return {string}
 */
function getFileExtension(url) {
  let fileExtension = "";
  try {
    fileExtension = url.substring(url.lastIndexOf(".") + 1);
    if (!fileExtension) {
      fileExtension = url.replace(/.+\./, "");
    }
  } catch (error) {
    console.log("读取文件拓展名出错: ");
    console.log(error);
  }
  return fileExtension;
}
/**
 * 是否换行
 * @param {string} str
 * @return {boolean}
 */
function isLineFeed(str) {
  let reg = /[\r\n]/g;
  return reg.test(str);
}

export {
  getBodyHeight,
  getBodyWidht,
  sha1,
  md5,
  importExcelToJson,
  exportJsonToExcel,
  dateTimeToFormat,
  dateToFormat,
  dateParse,
  JSONParse,
  JSONStringify,
  pickOutVersion,
  compareGtVersion,
  pickOutChinese,
  isChinese,
  pickOutNumberCSV,
  pickOutNumber,
  isUrl,
  isJsonString,
  getQueryVariable,
  pickOutDecimalPointN,
  isImg,
  getFileExtension,
  isDecimalPointN,
  pickOutNumberAndNegative,
  isInteger,
  isLineFeed,
  isItWhite,
  /**********************************************/
  //async
  getImgSize,
  getImgSizeOnline,
  getFileContent
};
