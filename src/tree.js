"use strict";

require('./string.pad');

let pascal = require('./pascal');

module.exports = function (n) {
    if (typeof(n) == 'undefined' || n < 1) {
      throw Error("Please set a valid parameter and more than 0.\n");
    }

    let out = '';
    let triangle = pascal(n);

    let blockN = triangle.max.toString().length + 1;
    let line;

    for (var i = 0; i < triangle.length; i++) {
      line = '';
      for (var j=0; j < triangle[i].length; j++) {
        line += triangle[i][j]
                    .toString()
                    .pad(blockN, ' ', String.PAD_BOTH);
      }

      out += line.pad(blockN * n, ' ', String.PAD_BOTH) + "\n";
    }

    let trunk = '#'.repeat(n & 1 ? n : n-1)
                    .pad(line.length, ' ', String.PAD_BOTH)
                    + "\n";

    return out + trunk.repeat(Math.ceil(n / 2));
}
