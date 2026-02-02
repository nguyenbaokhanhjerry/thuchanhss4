let n = prompt("Nhập số n (1-50):");
let sumFizz = 0;
if (n <= 0) {
  console.log("Giá trị n không hợp lệ");
} else {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
      sumFizz = sumFizz + i;
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  console.log("Tổng các số in ra 'Fizz' là: " + sumFizz);
}
