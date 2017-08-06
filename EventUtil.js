var EventUtil = {
  /**
   * [getEvent description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  getEvent: function (event) {
    return event?event:window.event;
  },

  /**
   * [getTarget description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  getTarget: function (event) {
    return event.target || event.srcElement;
  },

  /**
   * [addHandler description]
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
   * [removehandler description]
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
   * [stopPropagetion description]
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
   * [preventDefault description]
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