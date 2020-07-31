"use strict";
//数组 元组 枚举
// 数组
// let names: Array<string> = ['henry', 'bucky'];
// let numbers: Array<number> = [1, 6];
// let numbers: number[] = [1, 6];
// let anyArray: any[] = ['heh', 1, false];
// names[0] = '100';
//元组
// let colors: [string, number] = ['1', 99];
//枚举 enum
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 100] = "Yellow";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColr = Color.Red;
console.log(myColr);
