"use strict";
//接口:应用到class
var People = /** @class */ (function () {
    function People() {
        this.name = 'leecode';
        this.age1 = 31;
        this.salary = 8000;
        this.id = 101;
        this.course = 'IT';
    }
    People.prototype.greet = function () {
        console.log("hello world");
    };
    return People;
}());
var employee = {
    name: 'leecode',
    age1: 32,
    salary: 7000,
    sex: '男',
    word: "abc",
    greet: function () {
        console.log("hello world");
    },
};
console.log(employee);
