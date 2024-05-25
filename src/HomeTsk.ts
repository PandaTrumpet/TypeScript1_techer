// ДЗ-------------------------------------------------------------------------------------------------------------------

// 1

// const age = 50;
// const username = "Max";
// const toggle = true;
// const empty = null;
// const callback = (a) => {
//   return 100 + a;
// };

// const age: number = 50;
// const username: string = "Max";
// const toggle: boolean = true;
// const empty: null = null;

// const callback = (a: number) => {
//   return 100 + a;
// };

// 2

// type Person = [string, number];

// let person: Person = ["Max", 21];
// console.log(person);

// ДЗ ---------------------------------------------------------------------------------------------------

// 3

// type Value = "enable" | "disable";
// let switchTask: Value;
// switchTask = "enable";
// switchTask = "disable";

// type Mix = string | number;

// let result: Mix;

// result = "Hello";
// result = 5;

// 4

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// Завдання 5
// enum DayOfWeek {
//   Monday = "active",
//   Tuesday = "active",
//   Wednesday = "active",
//   Thursday = "active",
//   Friday = "active",
//   Saturday = "free",
//   Sunday = "free",
// }

// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === "active") {
//     return true;
//   } else if (day === "free") {
//     return false;
//   }
// };

// enum DayOfWeek {
//   Monday,
//   Tuesday,
//   Wednesday,
//   Thursday,
//   Friday,
//   Saturday,
//   Sunday,
// } // console.log(isWeekend(DayOfWeek.Thursday));
// const isWeekend = (day: DayOfWeek) => {
//   if (
//     day === DayOfWeek.Monday ||
//     day === DayOfWeek.Tuesday ||
//     day === DayOfWeek.Wednesday ||
//     day === DayOfWeek.Thursday ||
//     day === DayOfWeek.Friday
//   ) {
//     return false;
//   } else if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//     return true;
//   }
// };

// console.log(isWeekend(DayOfWeek.Monday));

// 6

// interface User {
//   name: string;
//   age: number;
//   email: string;
//   address?: {
//     city: string;
//     country: string;
//   };
// }

// const mango: User = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// const poly: User = {
//   name: "Mango",
//   age: 30,
//   email: "john@example.com",
// };

// 7

// type BookPage = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: string;
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };
// const page1: BookPage = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2: BookPage = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
