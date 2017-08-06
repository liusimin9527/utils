var EventUtil = {
  /**
   * 获得事件对象
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  getEvent: function (event) {
    return event?event:window.event;
  },

  /**
   * 获得事件对象的目标
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  /**
   * 事件监听
   * @param {[type]} element [description]
   * @param {[type]} type    [description]
   * @param {[type]} handler [description]
   */
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (window.attachEvent) {
      element.attachEvent('on'+type, handler);  //IE
    } else {
      element['on'+type] = handler;
    }
  },

  /**
   * 删除事件监听
   * @param  {[type]} element [description]
   * @param  {[type]} type    [description]
   * @param  {[type]} handler [description]
   * @return {[type]}         [description]
   */
  removehandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (window.detachEvent) {
      element.detachEvent('on'+type, handler);  //IE
    } else {
      element['on'+type] = null;
    }
  },

  /**
   * 阻止事件冒泡
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  stopPropagetion: function (event) {
    if (event.stopPropagetion) {
      event.stopPropagetion();
    } else {
      event.cancelBubble = true;
    }
  },

  /**
   * 阻止默认事件
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};
