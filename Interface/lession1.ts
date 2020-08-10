//interface 接口
interface Person3 {
  name: string;
  age1: number; //:号 必须要写的
  sex?: string; //?: 可选的
  readonly salary: number;
  [propName: string]: any;
  greet(): void;
}

//interface 可以继承 type不能继承
type Person2 = {
  name: string;
  age1: number;
};

let person2: Person3 = {
  name: 'leecode',
  age1: 50,
  salary: 7000,
  ids: [5, 9, 2, 8, 22],
  greet() {
    console.log(`hello every`);
  },
};

person2.greet();

function printPerson(person: Person3) {
  console.log(
    `我叫${person.name} 我的年龄是${person.age1} 我的工资是${person.salary}`
  );
}

printPerson(person2);
