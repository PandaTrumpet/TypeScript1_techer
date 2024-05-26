// const name: string = "Bob ";
// console.log(name);
// const age: number = 32;
// const isHappy: boolean = true;
// const buget: null = null;
// const status: undefined = undefined;

// Об'єкти

// type UserProfile = {
//   username: string;
//   age: number;
//   isActive: boolean;
// };

// function displayUserProfile(user: UserProfile) {
//   return `User name is ${user.username}  his is  ${user.age} years old and his ${user.isActive}`;
// }

// const user: UserProfile = {
//   username: "Bob",
//   age: 32,
//   isActive: true,
// };
// console.log(displayUserProfile(user));

// function logName(name: string) {
//   return name;
// }
// console.log(logName("Hello"));
// function calcTotal(arr: number[]) {
//   return arr.reduce((acc, el) => acc + el, 0);
// }

// Массиви
// type User = {
//   name: string;
//   age: number;
// };
// function calcTotal(arr: User[]) {   --------Кращий варіант!!!!!!!
//   // return arr.reduce((calc, el) => calc + el, 0);
//   // return arr.map((el) => el.name);
// }

// function calcTotal(arr: { name: string; age: number }[]) {
//   // return arr.reduce((calc, el) => calc + el, 0);
//   // return arr.map((el) => el.name);
// }

// const numbersArray = [1, 2, 3, 4, 5];
// console.log(calcTotal(numbersArray));

// const users = [
//   { name: "Bob", age: 12 },
//   { name: "Bob", age: 13 },
//   { name: "Bob", age: 14 },
//   { name: "Bob", age: 15 },
// ];

// console.log(calcTotal(users));

// =========================Специфічні типи================================================
// unknown

// function safelyParse(jsonString: string) {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof jsonString === "object" && result !== null) {
//       return result;
//     }
//   } catch (error) {
//     console.log("Error", error);
//   }
//   return null;
// }

// any -удобно для проверки
// function logDetalis(value: any) {
//   console.log(`${value} and ${typeof value}`);
// }

// logDetalis("Hello");

// enum
// ДЛЯ СПИСКІВ
// Словник,щоб використовувати надалі
// Приклад: КАЛЕНДАР
// enum VehicleType {
//   Car = "Audi",
//   Truck = "Truck",
//   Moto = "BMW",
// }
// function getVehicle(vehicle: VehicleType) {
//   return vehicle;
// }

// console.log(getVehicle(VehicleType.Car)); //сиНТАКСИС ЯК В ООБ'ЄКТІ
// console.log(getVehicle(VehicleType.Truck));

// Unoin Type
// КОЛИ ФУНКЦІЯ ПРИЙМАЄ РІЗНІ ТИПИ!!!!

// function formatInput(input: string | number): string {
//   if (typeof input === "number") {
//     return input.toFixed(2);
//   } else {
//     return input.toUpperCase();
//   }
// }
// console.log(formatInput("Hello"));

// Literal===========================================

// ОБМЕЖЕННЯ

// function lightShower(color: "green" | "yellow" | "red") {
//   if (color === "green") {
//     console.log("go!");
//   } else if (color === "yellow") {
//     console.log("redy");
//   } else if (color === "red") {
//     console.log("Stop");
//   }
// }

// lightShower("blue");

// Типизация выходных данных
// Полезна для работы с backendom

// function logName(name: string): string {
//   //типизация выходных данных
//   return name;
// }

// void нічого не повертає

// function logName(name: string): void {
//   console.log(name);
// }

// never используется, когда возвращается ошибка

// function errorHandler(message: string): never {
//   throw new Error(message);
// }
// errorHandler("Critical error");

// Interface
// За допомогою  Interface можна використовувати в класах
// interface User {
//   name: string;
//   age: number;
//   lastName?: string; //опціональне значення
//   sayHello(): string;
//   sayBay(): void;
//   showAge(userAge: number): string;
// }

// Типизация метода

// const student: User = {
//   name: "Bob",
//   age: 32,

//   sayHello() {
//     return "Hell";
//   },
//   sayBay() {
//     console.log("Bye"); //void
//   },
//   showAge(userAge: number) {
//     return `My age is${userAge}`;
//   },
// };

// =======================================================LESSON2===================================================

// =============================================Індексовані значення==============================================

// interface User {
//   [key: string]: number | null; //union
// }
// const fruit: User = {
//   apple: 32,
//   banana: 34,
//   oranges: null,
// };
// =============================================GENERIC================================================================
interface IPerson {
  name: string;
  age: number;
  greet(phrase: string): void;
}

interface IPilot extends IPerson {
  seranme:string
}


let user: IPilot = {
  name: "Pnada",
  age: 32,
  greet(phrase) {
    console.log("Hello");
    
  },
  seranme:"Wy"
}
console.log(user);
