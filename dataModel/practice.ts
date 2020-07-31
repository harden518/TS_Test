type sumType = { money: number; count: (value: number) => void };

let sumValue1: sumType = {
  money: 200,
  count(value: number): void {
    this.money += value;
  },
};

type handleCountType = { name: string; sumValue: sumType; friends: string[] };

let handleCount: handleCountType = {
  name: 'henry',
  sumValue: sumValue1,
  friends: ['bucky', 'elyse'],
};

handleCount.sumValue.count(500);

console.log(handleCount);
