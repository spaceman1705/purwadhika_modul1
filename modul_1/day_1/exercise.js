//write a code to find area of rectangle
let length1 = 5;
let width1 = 3;
const areaRectangle = length1 * width1;
console.log("Area of Rectangle is : " + areaRectangle);
console.log("=======================================================");

//write a code to find perimeter of rectangle
let length2 = 5;
let width2 = 3;
const perimeterRectangle = 2 * (length2 + width2);
console.log("Perimeter of Rectangle is : " + perimeterRectangle);
console.log("=======================================================");

//write a code to find diameter, circumference and area of a circle
let radius = 5;
let pi = 3.14159265358979;
const diameter = 2 * radius;
const circumference = 2 * pi * radius;
const areaCircle = pi * radius * radius;
console.log("Diameter of Circle is : " + diameter + ", Circumference of Circle is : " + circumference.toFixed(4) + ", Area of Circle is : " + areaCircle.toFixed(3));
console.log("=======================================================");

//write a code to find angle of triangle if two angles are given
let a = 80;
let b = 65;
const angleC = 180 - (a + b);
console.log("Angle C of Triangle is : " + angleC);
console.log("=======================================================");

//write a code to convert days to years, months, and days (Notes: 1 year = 365 days, 1 month = 30 days)
let totalDays = 400;
const years = (totalDays / 365);
const sisaDays = totalDays % 365;
const months = (sisaDays / 30);
const days = sisaDays % 30;
console.log(totalDays + " days -> " + years.toFixed() + " years, " + months.toFixed() + " months, and " + days.toFixed() + " days.");
console.log("=======================================================");

//write a code to get difference between dates in days
let date1 = new Date("2025-08-27");
let date2 = new Date("2025-08-28");
const differenceInTime = date2 - date1;
const differenceInDays = differenceInTime / (86400000);
console.log(differenceInDays + " days");