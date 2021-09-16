function hello() {
  console.log(this);
  console.log(this === global);
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('----------class----------');
    console.log(this);
    console.log(this === global);
    console.log(this === module.exports);
  }
}

const a = new A(1);
a.memberFunction();

console.log('----------class----------');
console.log(this);
console.log(this === module.exports);
