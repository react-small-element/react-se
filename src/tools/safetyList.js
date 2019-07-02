/*
 * @Description: 安全清单
 * @Author: zhangjinlong
 * @LastEditors: zhangjinlong
 * @Date: 2019-03-29 14:44:53
 * @LastEditTime: 2019-07-02 17:03:35
 *
 *  html中最好还要检查href、src、location、onclick、onerror、onload、onmouseover等的值是否符合白名单。
 *  方法:可以将a标签做成公共组件，然后使用a标签时引用该组件，在该组件每次接收href值之前进行白名单校验
 *  属性：onClick等
 */

//匹配规则
//strict : 严格模式，全匹配
//start : 宽松模式，匹配开头
//end : 宽松模式，匹配结尾
//in : 宽松模式，被匹配的值包含在白名单列中
//startAndEnd : 宽松模式，匹配开头和结尾
const MatchRule = ["strict", "start", "end", "in", "startAndEnd"];

// //白名单
// const WhiteList = [
//   { value: "https:www.baidu.com", matchRule: MatchRule[0] },
//   { value: "https:www", matchRule: MatchRule[1] },
//   { value: ".png", matchRule: MatchRule[2] }
// ];

//黑名单
// const BlackList = [];

/**
 * 检查是否在白名单中
 * @param {string || number} val
 * @param {array} WhiteList
 * @returns {boolean} 在白名单中则返回ture,否则返回false
 */
function isItWhite(val, WhiteList) {
  let length = WhiteList.length;
  if (length === 0) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    let item = WhiteList[i];
    if (item.matchRule === MatchRule[0]) {
      // 存在白名单中，放行
      if (val === item.value) {
        return true;
      }
    } else if (item.matchRule === MatchRule[1]) {
      let regStr = "^" + item.value;
      let reg = new RegExp(regStr, "i");
      // 存在白名单中，放行
      if (reg.test(val)) {
        return true;
      }
    } else if (item.matchRule === MatchRule[2]) {
      let regStr = item.value + "$";
      let reg = new RegExp(regStr, "i");
      // 存在白名单中，放行
      if (reg.test(val)) {
        return true;
      }
    } else if (item.matchRule === MatchRule[3]) {
      let reg = new RegExp(val, "i");
      let res = item.value.search(reg);
      // 存在白名单中，放行
      if (res >= 0) {
        return true;
      }
    } else if (item.matchRule === MatchRule[4]) {
      let regStr = "^" + item.value;
      let reg = new RegExp(regStr, "i");
      let regStr2 = item.value + "$";
      let reg2 = new RegExp(regStr2, "i");
      // 存在白名单中，放行
      if (reg.test(val) && reg2.test(val)) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
}

export { isItWhite };

/****************************************/
//以白名单为例，检查白名单会两种方式：
//1.白名单元素为对象，元素存放白名单值和规则说明，本程序中采用这种方式，比较安全简洁
//2.白名单元素为字符串，当进行检查时再传给函数参数一个规则，然后进行检查，这种当时比第一种更为宽松,demo如下：
// const WhiteList2 = ["https:www.baidu.com", "https:www", ".png"];
// /**
//  * 检查是否在白名单中
//  * @param {string || number} val 要检查的值
//  * @param {string} matchRule 检查规则
//  * @returns {bollean} 在白名单中则返回ture,否则返回false
//  */
// function isItWhite2(val, matchRule) {
//   let length = WhiteList2.length;
//   for (let i = 0; i < length; i++) {
//     let item = WhiteList2[i];
//     if (matchRule === MatchRule[0]) {
//       return;
//     } else if (matchRule === MatchRule[1]) {
//       return;
//     } else if (matchRule === MatchRule[2]) {
//       return;
//     } else if (matchRule === MatchRule[3]) {
//       return;
//     } else if (matchRule === MatchRule[4]) {
//       return;
//     } else {
//       return false;
//     }
//   }
//   return false;
// }
