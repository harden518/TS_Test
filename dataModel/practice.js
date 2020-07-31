"use strict";
var sumValue1 = {
    money: 200,
    count: function (value) {
        this.money += value;
    },
};
var handleCount = {
    name: 'henry',
    sumValue: sumValue1,
    friends: ['bucky', 'elyse'],
};
handleCount.sumValue.count(500);
console.log(handleCount);
