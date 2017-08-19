var AjaxUtil = {
  /**
   * ajax中的get请求
   * @param  {[type]}   url      [description]
   * @param  {Function} callback [回调函数]
   * @return {[type]}            [description]
   */
  get: function (url, callback) {
    var xhr = createXHR();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('get', url);
    xhr.send(null);
  },

  /**
   * ajax中的post请求
   * @param  {[type]}   url      [description]
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [回调函数]
   * @return {[type]}            [description]
   */
  post: function (url, data,callback) {
    var xhr = createXHR();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('post', url);
    xhr.setRequestHeader("Content-Type", "application/x-www--form-urlencoded");
    xhr.send(data);
};
/**
  *  创建XMLHttpRequest对象
  *  @return {[object]}   xhr      [description]
  */
function createXHR() {
	var xhr = null;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();                    //其它浏览器
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");  //IE5、IE6
	}

	return xhr;
}
