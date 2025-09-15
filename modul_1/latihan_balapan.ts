class Car {
    name: string;
    speed: number;
    fuel: number;
    distance: number;

    constructor(_name){
        this.name = _name;
        this.speed = 100;
        this.fuel = 100;
        this.distance = 0;
    }

    move (): void {
        if (this.fuel <= 0){
            //console.log("bahan bakar abis");
            return;
        }
        this.fuel -= 10;
        this.distance += this.speed
    }
    useItem (item: {speed}): void {
        this.speed += item.speed;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
    showStatus (): string {
        return this.name + " => Speed = " + this.speed + ", Fuel = " + this.fuel + ", Distance = " + this.distance;
    }
}

class RacingGame{
    car1: Car;
    car2: Car;

    constructor(car1: Car, car2: Car){
        this.car1 = car1;
        this.car2 = car2;
    }

    getRandomItem(): { speed: number } {
        const items = [
            { speed: +20 },
            { speed: -20 },
            { speed: 0 }
        ];
        const randomItem = Math.floor(Math.random()* items.length);
        return items[randomItem];
    }
    start() : void {
        console.log(this.car1.showStatus());
        console.log(this.car2.showStatus());
        console.log("~~~~~~~~~~~~~~~~~~~~~~ BALAPAN DIMULAI! ~~~~~~~~~~~~~~~~~~~~~~");
        while (this.car1.fuel >0 && this.car2.fuel > 0 ){
            const item1 = this.getRandomItem();
            this.car1.useItem(item1);
            this.car1.move();
            console.log(this.car1.showStatus());
            const item2 = this.getRandomItem();
            this.car2.useItem(item2);
            this.car2.move();
            console.log(this.car2.showStatus());
        }
        if (this.car1.distance > this.car2.distance) {
            console.log(this.car1.name + " menempuh jarak" + this.car1.distance + ", sedangkan "+ this.car2.name + " menempuh jarak " + this.car2.distance + " => CAR A MENANG");
        } else if (this.car2.distance > this.car1.distance) {
            console.log(this.car2.name + " menempuh jarak" + this.car2.distance + ", sedangkan "+ this.car1.name + " menempuh jarak " + this.car1.distance + " => CAR B MENANG");
        } else {
            console.log(this.car1.name + " menempuh jarak" + this.car1.distance + ", sedangkan "+ this.car2.name + " menempuh jarak " + this.car2.distance + " => Seri GG!");
        }
    }
}

const car1 = new Car("Car A");
const car2 = new Car("Car B");
const balap = new RacingGame(car1, car2);
balap.start();