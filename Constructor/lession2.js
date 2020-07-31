"use strict";
// class set get 修饰词 用于隔离私有属性 和 公开属性
// class 静态属性和方法
var Person1 = /** @class */ (function () {
    function Person1() {
        this._name = 'leecode';
    }
    Object.defineProperty(Person1.prototype, "setName", {
        //私有属性fuzhi
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "getName", {
        // 私有属性取值
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Person1.calcCircle = function (value) {
        return this.PI * value;
    };
    Person1.PI = 3.14;
    return Person1;
}());
var person1 = new Person1();
// console.log(person1.getName);
// person1.setName = 'leecode1';
// console.log(person1.getName);
// console.log(person1.PI);
console.log(Person1.PI);
console.log(Person1.calcCircle(8));
