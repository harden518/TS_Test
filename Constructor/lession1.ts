//class 类 (属性 方法)
class Person {
  public name: string; //当前类 子类 外部 可以使用
  protected gender: string; //当前类 或 继承类 可以使用
  private age: number = 27; //当前类 可以使用
  constructor(name: string, public username: string) {
    this.name = name;
    this.username = username;
  }

  printAge(age: number) {
    this.age = age;
    console.log(this.age);
    this.setGender('111111');
  }

  private setGender(gender: string) {
    this.gender = gender;
    // console.log(this.gender);
  }

  printName(name: string) {
    this.name = name;
    console.log(this.name);
  }
}

const person = new Person('leecode', 'cc');

// console.log(person.name);
// console.log(person.username);

person.printAge(30);

//student 类 继承于 person
class Student extends Person {
  studentId: number;
  constructor(name: string, username: string, studentId: number) {
    super(name, username);
    console.log(this.gender);
    // console.log(this.age) 不能访问
    this.studentId = studentId;
  }
  studentPrint() {
    console.log(this.studentId);
  }

  //重写父类方法
  printName(name: string) {
    this.name = name;
    console.log(this.name);
  }
}

const leecode = new Student('leecode1', 'cc1', 50);
console.log(leecode.name);
console.log(leecode.username);
console.log(leecode.studentId);
leecode.studentPrint();
leecode.printAge(32);
