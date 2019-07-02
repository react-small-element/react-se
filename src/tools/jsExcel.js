import XLSX from "xlsx";
import { saveAs } from "file-saver";

/**
 * 导入Excel文件生成json object 数据
 * @param {object} file, 经过input提取之后的文件数据
 * @param {array} header, 表头部，有传则使用自定义，否则默认使用第一行
 * @param {boolean} isDeleteTheFirstRow, 是否删除第一行，默认是false
 * @param {function} callback, 回调函数，接受处理之后的数据作为参数
 * @param {function} errorCallback, 错误回调函数，接受错误信息作为参数
 * return ;
 */
function importExcelToJson(payload = {}) {
  //如果payload参数不是object 则直接返回
  if (typeof payload !== "object") {
    console.log("importExcelToJson's params is not a object");
    return;
  }

  let { file, header, callback, isDeleteTheFirstRow, errorCallback } = payload;

  //检测是否有传file
  if (!file) {
    console.log("file is necessary");
    return;
  }
  //检查是否有传header
  if (!header) {
    header = "default";
  }
  //检查是否有传isDeleteTheFirstRow
  if (isDeleteTheFirstRow) {
    if (typeof isDeleteTheFirstRow !== "boolean") {
      console.log("isDeleteTheFirstRow must be a boolean");
      return;
    }
  }

  try {
    let rABS = true;
    let reader = new FileReader();
    reader.onload = function(e) {
      let data = e.target.result;
      if (!rABS) data = new Uint8Array(data);
      let workbook = null; //二进制方式或者数组方式读取内容
      try {
        workbook = XLSX.read(data, { type: rABS ? "binary" : "array" }); //二进制方式或者数组方式读取内容
      } catch (error) {
        console.log(error);
        console.log("非excel文件");
        return;
      }
      /* DO SOMETHING WITH workbook HERE */
      // console.log(workbook);
      // console.log(workbook.SheetNames[0]);
      // console.log(workbook.Sheets[workbook.SheetNames[0]]);
      let sheet0 = workbook.Sheets[workbook.SheetNames[0]]; //读取第一张表

      let str = XLSX.utils.sheet_to_json(sheet0, {
        header: header,
        defval: null
      }); //利用接口实现数据格式转换，自定义配置项

      //是否要删除第一行
      if (isDeleteTheFirstRow) {
        str.shift(); //删除第一列
      }

      // console.log(str);
      //判断是否传入回调函数
      if (callback) {
        callback(str);
      }
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  } catch (error) {
    console.log("Excel内容分析失败");
    console.log(error);
    if (errorCallback) {
      errorCallback(error);
    }
  }

  return;
}

/**
 * 将符合规范的数据导出Excel文件
 * @param {array} data, 外层是数据，数组元素是对象
 * @param {string} filename, 文件名
 * @param {object} header, 自定义的表头，将作为第一行数据插入，同时跳过原来的表头
 * @param {function} errorCallback, 错误回调函数，接受错误信息作为参数
 * return ;
 */
function exportJsonToExcel(payload = {}) {
  //如果payload参数不是object 则直接返回
  if (typeof payload !== "object") {
    console.log("importExcelToJson's params is not a object");
    return;
  }

  let { data, filename, header, errorCallback } = payload;

  //检查是否有导出数据
  if (data.length === 0) {
    console.log("data can not be empty ");
    return;
  }
  //检查文件名
  if (typeof filename !== "string") {
    console.log("filename's type must be a string");
    return;
  }
  if (!filename) {
    filename = "未知文件请妥善处理";
  }

  //检查是否有传header
  if (header && typeof header != "object") {
    console.log("header is not a object");
    header = null;
    return;
  }

  try {
    //bookType can be any supported output type
    let wopts = { bookType: "xlsx", bookSST: false, type: "array" }; //定义输出类型 array
    let workbook = XLSX.utils.book_new(); //创建一个默认的workbook容器
    let ws = XLSX.utils.json_to_sheet(data); //处理数据格式

    //第一行添加一行数据（作为表头），同事跳过默认表头(object.key)
    if (header) {
      XLSX.utils.sheet_add_json(ws, [header], {
        skipHeader: true,
        origin: "A1"
      });
    }

    XLSX.utils.book_append_sheet(workbook, ws, "Sheet1"); //将处理后的数据放入workbook容器，并将该容器的表格命名为Sheet1
    let wbout = XLSX.write(workbook, wopts); //将workbook容器按照输出类型格式进行内容转换处理,并返回处理后的数据，此时已符合Excel规范
    /* the saveAs call downloads a file on the local machine */
    //自定义保存文件方式,原项目采用的是cordova的文件写入方式，此演示只用模拟浏览器下载的形式
    saveAs(
      new Blob([wbout], { type: "application/octet-stream" }),
      filename + ".xlsx"
    );
  } catch (error) {
    console.log("导出异常");
    console.log(error);
    if (errorCallback) {
      errorCallback(error);
    }
  }

  return;
}

export { importExcelToJson, exportJsonToExcel };
