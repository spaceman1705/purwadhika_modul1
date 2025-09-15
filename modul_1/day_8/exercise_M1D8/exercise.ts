// shooting game
class Player {
    name: string;
    health: number;
    power: number;

    constructor(_name){
        this.name = _name;
        this.health = 100;
        this.power = 10;
    }
    damage(power: number): void {
        this.health = Math.max(0, this.health - power);
    }

    useItem(item: { health: number; power: number }): void {
        this.health += item.health;
        this.power += item.power;
    }

    showStat(): void {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;

    constructor(_player1: Player, _player2: Player) {
        this.player1 = _player1;
        this.player2 = _player2;
    }

    getRandomItem(): { health: number; power: number } {
        const item = [0, 10];
        const health = item[Math.floor(Math.random() * item.length)];
        const power = item[Math.floor(Math.random() * item.length)];
        return { 
            health: health, power: power 
        };
    }

    start(): void {
        let round: number = 1;

        while (this.player1.health > 0 && this.player2.health > 0) {
        console.log(`Round ${round}`);

        console.log(`${this.player1.name}'s turn`);
        this.player1.showStat();
        const item1 = this.getRandomItem();
        console.log(`${this.player1.name} got: Health +${item1.health}, Power +${item1.power}`);
        this.player1.useItem(item1);
        this.player1.showStat();
        console.log(`${this.player1.name} shoots!`);
        this.player2.damage(this.player1.power);
        if (this.player2.health <= 0) {
            console.log(`${this.player2.name} died!`);
            break;
        } else {
            console.log(`${this.player2.name} survived...`);
        }

        console.log(`${this.player2.name}'s turn`);
        this.player2.showStat();
        const item2 = this.getRandomItem();
        console.log(`${this.player2.name} got: Health +${item2.health}, Power +${item2.power}`);
        this.player2.useItem(item2);
        this.player2.showStat();
        console.log(`${this.player2.name} shoots!`);
        this.player1.damage(this.player2.power);
        if (this.player1.health <= 0) {
            console.log(`${this.player1.name} died!`);
            break;
        } else {
            console.log(`${this.player1.name} survived...`);
        }

        round++;
    }
    console.log(`Winner: ${this.player1.health > this.player2.health ? this.player1.name : this.player2.name}!`);
  }
}

const shooterA = new Player("Diego");
const shooterB = new Player("Bots");

const game = new ShootingGame(shooterA, shooterB);

game.start();

