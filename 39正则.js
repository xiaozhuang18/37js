/**
 * Created by 14486 on 2019/3/26.
 * 字符集: []
 *     [2-8]; 匹配2到8之间的一个数字
 *     常用区间[a-zA-Z0-9] [0-9] [a-z] [A-Z] 按照ANSI编码来的 可以从小到大
 *     2: 或者的意思
 *          [ab]  意思是匹配a或者b
 *     3: 配合内部的 ^ 有除了的意思
 *          [^abc] 除了abc之外的所有
 *
 * 子集: ()
 *      let reg = /(ab)+/;
 *      配合 str.match(reg); 注意不能是全局匹配 就会得到一个类数组
 * 整体或者 |
 *      let reg = /abc|d/; 匹配abc或者d
 *      匹配 abc 或者 abd
 *          let reg = /ab[cd]/;  let reg = /ab(c|d)/;
 *
 * str.replace(reg,str)
 *     将匹配的内容替换 str也可以是一个带return的函数 第一个参数就是匹配到的值,依次展示子集
 *          (第一个参数表示匹配的内容 依次展示子集)
 *
 * . (可以匹配所有字符 除了换行符和结束符)单个字符
 * ^ 不在中括号的第一个表示起始位置
 * $ 结束位置
 *      匹配qq号码
 *          let qq = /^[1-9]\d{4,9}$/;
 *          let tel = /^1[3-9]\d{9}$/;
 *          let user = /^(_|[a-zA-Z])\w{5,15}$/;
 *          let pwd = /^$/
 *          var IDCard = /^[1-9]\d{5}(19\d{2}|20[01]\d)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])\d{3}[\dxX]$/;
 */
let reg = /[a-zA-Z0-9]{2,3}/g;