var AjaxUtil = {
  /**
   * ajax中的get请求
   * @param  {[type]}   url      [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  get: function (url, callback) {
    var xhr = new XMLHttpRequest();

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
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  post: function (url, data,callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        callback(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('post', url);
    xhr.setRequestHeader("Content-Type", "application/x-www--form-urlencoded");
    xhr.send(data);
  }
};
