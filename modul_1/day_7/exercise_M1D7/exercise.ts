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
    new Student("Charlie", "charlieputh@gmail.com")
];
const merged = mergeArray(students1, students2);
console.log(merged);

// create a function that can accect input as an array of objects and switch all values into property and property into value



// Create a function to find a factorial number using recursion
function factorial (n: number): number {
    let result = 1;
    for (let i = 1; i <= n; i++){
        result *= i;
        
    }
    return result;
}
console.log(factorial(5));