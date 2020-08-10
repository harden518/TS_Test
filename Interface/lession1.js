"use strict";
var person2 = {
    name: 'leecode',
    age1: 50,
    salary: 7000,
    ids: [5, 9, 2, 8, 22],
    greet: function () {
        console.log("hello every");
    },
};
person2.greet();
function printPerson(person) {
    console.log("\u6211\u53EB" + person.name + " \u6211\u7684\u5E74\u9F84\u662F" + person.age1 + " \u6211\u7684\u5DE5\u8D44\u662F" + person.salary);
}
printPerson(person2);
