"use strict";

String.PAD_LEFT = 1;
String.PAD_RIGHT = 2;
String.PAD_BOTH = 3;

String.prototype.pad = function(len, pad, dir) {
  let str = this;
  if (typeof(len) == "undefined") { len = 0; }
  if (typeof(pad) == "undefined") { pad = ' '; }
  if (typeof(dir) == "undefined") { dir = String.PAD_RIGHT; }

  if (len + 1 >= str.length) {
    switch (dir){
      case String.PAD_LEFT:
        str = new Array(len + 1 - str.length).join(pad) + str;
        break;
      case String.PAD_BOTH:
        let padlen = len - str.length;
        let right = Math.ceil(padlen / 2);
        let left = padlen - right;
        str = new Array(left+1).join(pad) + str + new Array(right+1).join(pad);
        break;
      default:
        str = str + new Array(len + 1 - str.length).join(pad);
        break;
    }
  }

  return str;
};

module.exports = String.prototype.pad;
