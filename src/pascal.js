"use strict";

module.exports = function (n) {
    let triangle = new Array(n);
    let max = 0;

    for (let l = 0; l < n; l++) {
        triangle[l] = new Array(l+1);

        for (let c = 0; c <= l; c++) {
            triangle[l][c] = (c !== 0 && c !== l)
                            ? triangle[l-1][c-1] + triangle[l-1][c]
                            : 1;

            if (triangle[l][c] > max) {
                max = triangle[l][c];
            }
        }
    }

    triangle.min = 1;
    triangle.max = max;
    return triangle;
};
