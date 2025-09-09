// 1. Create a function to calculate array of student data
class Student {
    constructor(name, email, age, score) {
        this.Name = name;
        this.Email = email;
        this.Age = age;
        this.Score = score;
    }
}
class StudentStatistics {
    constructor(students) {
        this.students = students;
    }
    calculate() {
        if (this.students.length === 0) return null;

        let scores = this.students.map(s => s.Score);
        let ages = this.students.map(s => s.Age);

        let scoreHighest = scores[0];
        let scoreLowest = scores[0];
        let scoreTotal = 0;

        for (let i = 0; i < scores.length; i++) {
            let val = scores[i];
            if (val > scoreHighest) { 
                scoreHighest = val;
            }
            if (val < scoreLowest) {
                scoreLowest = val;
            }
            scoreTotal += val;
        }
        let scoreAverage = scoreTotal / scores.length;

        let ageHighest = ages[0];
        let ageLowest = ages[0];
        let ageTotal = 0;

        for (let i = 0; i < ages.length; i++) {
            let val = ages[i];
            if (val > ageHighest) {
                ageHighest = val;
            }
            if (val < ageLowest) {
                ageLowest = val;
            }
            ageTotal += val;
        }
        let ageAverage = ageTotal / ages.length;

        return {
            Score: {
                Highest: scoreHighest,
                Lowest: scoreLowest,
                Average: scoreAverage
            },
            Age: {
                Highest: ageHighest,
                Lowest: ageLowest,
                Average: ageAverage
            }
        };
    }
}

let students = [
    new Student("Apa", "apapa@mail.com", 24, 85),
    new Student("Bob", "bob@mail.com", 26, 92),
    new Student("Coki", "cokii@mail.com", 23, 78)
];

let stats = new StudentStatistics(students);
console.log(stats.calculate());

// 2. Create a program to create transaction

