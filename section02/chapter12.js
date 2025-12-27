// function add(a, b, callback) {
//   setTimeout(() => {
//     let sum = a + b;
//     callback(sum);
//   }, 3000);
// }
//
// add(1, 2, (value) => {
//   console.log(value);
// });

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이"
    callback(food);
  }, 3000);
}

function coolDownFood(food, callback) {
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`;
    callback(coolDownedFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);
  coolDownFood(food, (coolDownedFood) => console.log(coolDownedFood))
});