let test = {
  a: {
    b: {
      c: {
        d: 'test'
      }
    }
  }
}

console.log(test);

let str = JSON.stringify(test, null, 3);
console.log('\n' + str);
