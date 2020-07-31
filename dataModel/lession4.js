"use strict";
//object & type
var datasObj = {
    name: 'henry',
    age: 31,
};
datasObj = {
    name: 'hello',
    age: 12,
};
//复杂对象类型
var complex = {
    data: [11],
    myFunc: function (item) {
        this.data.push(item);
        return this.data;
    },
};
var complex2 = {
    data: [63],
    myFunc: function (item) {
        return this.data;
    },
};
