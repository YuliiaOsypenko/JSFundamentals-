//1
// Написати функцію compact() яка має приймати на вхід масив,
// а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]

function compact(array) {
  const newArray = new Set(array);
  return Array.from(newArray);
}

//2
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:

// початкове значення
// кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]

function createArray(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

// 3
// Задані цілі числа a і b (a < b).
//  Виведіть усі цілі числа від a до b включно,
//  при цьому a виводится 1 раз, число а+1 - два рази і т.д.

function numbers(a, b) {
  let count = 1;
  for (let i = a; i <= b; i++) {
    for (let j = 0; j < count; j++) {
      console.log(i);
    }
    count += 1;
    console.log("\n");
  }
}

//4
// Напишіть функцію randArray(k), яка заповнюватиме масив k
// випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
function randArray(k) {
  let array = [];
  for (let i = 0; i < k; i++) {
    array.push(Math.floor(Math.random() * 501));
  }
  return array;
}

// 5
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву,
//але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
/* 
  [
  [5, 12, 99, 2, 2, 4, 3],
  [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
  ] 
  */

function newArray(arr) {
  let numbers = [];
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numbers.push(arr[i]);
    } else if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] === "number") {
          numbers.push(arr[i][j]);
        } else {
          str.push(arr[i][j]);
        }
      }
    } else {
      str.push(arr[i]);
    }
  }
  return [numbers, str];
}

// 6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default: {
      return a + b;
    }
  }
}
//7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]); // => false
// findUnique([1, 2, 3, 5, 11]); // => true
function findUnique(arr) {
  uniqueArr = new Set(arr);
  return uniqueArr.size === arr.length;
}
