//interface 接口
interface PersonInterface {
    name: string;
    age1: number; //:号 必须要写的
    sex?: string; //?: 可选的
    readonly salary: number;
    [propName: string]: any;
    greet(): void;
  }
  
  interface StudentInterface {
    id: number;
    course: string;
  }
  
  //接口:应用到class
  class People implements PersonInterface, StudentInterface {
    name: string = 'leecode';
    age1: number = 31;
    salary: number = 8000;
    id: number = 101;
    course: string = 'IT';
    greet() {
      console.log(`hello world`);
    }
  }
  
  //interface接口的继承
  interface Employee extends PersonInterface {
    word: string;
  }
  
  const employee: Employee = {
    name: 'leecode',
    age1: 32,
    salary: 7000,
    sex: '男',
    word:"abc",
    greet() {
      console.log(`hello world`);
    },
  };
  
  console.log(employee);
  