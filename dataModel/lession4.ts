//object & type

let datasObj: { name: string; age: number } = {
  name: 'henry',
  age: 31,
};

datasObj = {
  name: 'hello',
  age: 12,
};

//复杂对象类型
let complex: { data: number[]; myFunc: (item: number) => number[] } = {
  data: [11],
  myFunc: function (item: number): number[] {
    this.data.push(item);
    return this.data;
  },
};

// console.log(complex.myFunc(1));

//type 生成类型
type MyType = { data: number[]; myFunc: (item: number) => number[] };

let complex2: MyType = {
  data: [63],
  myFunc: function (item: number): number[] {
    return this.data;
  },
};
