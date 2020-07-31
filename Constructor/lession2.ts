// class set get 修饰词 用于隔离私有属性 和 公开属性
// class 静态属性和方法
class Person1 {
    private _name: string = 'leecode';
    static PI: number = 3.14;
  
    //私有属性fuzhi
    set setName(value: string) {
      this._name = value;
    }
  
    // 私有属性取值
    get getName() {
      return this._name;
    }
  
    static calcCircle(value: number): number {
      return this.PI * value;
    }
  }
  
  let person1 = new Person1();
  
  // console.log(person1.getName);
  // person1.setName = 'leecode1';
  // console.log(person1.getName);
  // console.log(person1.PI);
  console.log(Person1.PI);
  console.log(Person1.calcCircle(8));
  