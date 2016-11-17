"use strict";

let pascalTree = require('../src/tree');

let height = process.argv[2];

try {
    let tree = pascalTree(height);
    process.stdout.write(tree);
    process.exit(0);
} catch (e) {
    process.stderr.write(e.toString());
    process.exit(1);
}
