"use strict";
//namespace 多重命名空间
/// <reference path="./circle.ts"/>
/// <reference path="./sumValue.ts"/>
// tsc lession3.ts --outFile lession3.js
console.log(MyMath.sumValue(15, 10));
console.log(MyMath.Circle.calcCirle(8));
//tsc --outfile app.js circle.ts sumValue.ts app.ts
