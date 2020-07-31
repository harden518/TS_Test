//数组 元组 枚举

// 数组
// let names: Array<string> = ['henry', 'bucky'];
// let numbers: Array<number> = [1, 6];
// let numbers: number[] = [1, 6];
// let anyArray: any[] = ['heh', 1, false];
// names[0] = '100';

//元组
// let colors: [string, number] = ['1', 99];

//枚举 enum
enum Color {
  Black, //0
  Yellow = 100, //1
  Red,
}

let myColr: Color = Color.Red;

console.log(myColr);
