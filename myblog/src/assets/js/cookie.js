/**
 * Created by mouwe on 2016/12/15.
 * 这个文件[小插件]：提供了几个函数，专门用于cookie的增删改查操作的！
 * 1. 保存cookie值
 * 2. 读取cookie值
 * 3. 修改cookie值
 * 4. 删除cookie值
 *
 * cookie中存放的数据  key=value [键值对]
 * 值：有可能是汉字  汉字在处理的时候，容易出现编码问题
 * 所以要对值进行一种编码【把值按照浏览器统一的处理模式进行处理】
 * 编码：encodeURIComponent()
 * 解码：decodeURIComponent()
 */
/*
 1. 定义一个保存cookie的函数
 cookieName:变量名
 cookieValue:变量值
 dayCount:过期时间【单位：天】
 */
function saveCookie(cookieName, cookieValue, dayCount){
  // 获取当前系统时间
  var date = new Date();
  // 设置过期时间为dayCount天之后
  date.setDate(date.getDate() + dayCount);// dayCount天之后过期
  // 保存数据到cookie中
  document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + ";expires=" + date.toGMTString();
}

/*
 2. 修改cookie
 */
function modifyCookie(cookieName, cookieValue, dayCount) {
  saveCookie(cookieName, cookieValue, dayCount);
}

/*
 3. 删除cookie
 */
function deleteCookie(cookieName){
  saveCookie(cookieName, null, -1);
}

/*
 4. 读取cookie
 */
function getCookie(cookieName) {
  // 获取所有的cookie数据
  var _str = decodeURIComponent(document.cookie);// k=v;k1=v1;k2=v2
  // 拆分成数组
  var _arr = _str.split(";");
  // 循环获取值
  for(var i = 0; i < _arr.length; i++) {// 在每一个独立的k=v中进行查找
    if(_arr[i].indexOf(cookieName) >= 0) {// 查询有木有需要的数据
      return _arr[i].trim().substring((cookieName + "=").length);
    }
  }
  return null;
}/**
 * Created by Administrator on 2017/8/13.
 */
export default {
  saveCookie,modifyCookie,deleteCookie,getCookie
}
