"use strict";
exports.__esModule = true;
exports.testTwo = exports.testOne = void 0;
/**
 * Returns number between 0 and max
 * @param x Max
*/
exports["default"] = (function (x) { return Math.floor(Math.random() * x); });
exports.testOne = function () { return console.log('testOne'); };
exports.testTwo = function () { return console.log('testTwo'); };
