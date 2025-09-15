// create a function to merge two array of student data and remove duplicate data
class Student {
    name: string;
    email: string;

    constructor(_name, _email){
        this.name = _name;
        this.email = _email;
    }
}

function mergeArray(aray1: Student[], aray2: Student[]): Student[] {
    const gabung = [...aray1, ...aray2];
    const duplicate = new Map<string, Student>();
    for (const student of gabung) {
        duplicate.set(student.name, student);
    }
    return Array.from(duplicate.values());
} 

const students1 = [
    new Student("Alice", "alicia@gmail.com"),
    new Student("Bob", "bobibob@gmail.com")
];
const students2 = [ 
    new Student("Bob", "bobibob@gmail.com"),
    new Student("Charlie", "charlieteh@gmail.com")
];
const merged = mergeArray(students1, students2);
console.log(merged);

// create a function that can accect input as an array of objects and switch all values into property and property into value
function switchKeyValue(arr: Array<Record<string, any>>): Array<Record<string, string>> {
  return arr.map(obj => {
    const switchedObj: Record<string, string> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        // Mengubah value menjadi string agar bisa menjadi key
        switchedObj[String(obj[key])] = key;
      }
    }
    return switchedObj;
  });
}
const input = [{name: 'David', age: 20}];
const output = switchKeyValue(input);
console.log(output);



// Create a function to find a factorial number using recursion
function factorial (n: number): string {
    let result = 1;
    let tambahkan = "";
    for (let i = n; i >= 1; i--){
        result *= i;
        tambahkan += i;
        if (i > 1){
            tambahkan += " x ";
        }
    }
    let output = n + "! = " + tambahkan + " = " + result;
    return output;
}
const faktor = factorial(5);
console.log(faktor);