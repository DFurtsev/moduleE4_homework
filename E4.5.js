class ElectricalAppliance {
    constructor (name, power){
        this.name = name;
        this.power = power;
        this.isTurnedOn = false;
    }

    getPowerConsumption(){
        if (this.isTurnedOn){
            return this.power;
        } else {
            return 0;
        }
    }

    turnOn(){
        this.isTurnedOn = true;
    }

    turnOff(){
        this.isTurnedOn = false;
    }
}


class Computer extends ElectricalAppliance {
    constructor(name, power){
        super(name);
        this.power = power;
        this.sleep = false;
        this.sleepPower = 1.5;
    }

    goSleep() {
        this.sleep = true;
        this.isTurnedOn = false;
    }

    getPowerConsumption() {
        if (this.isTurnedOn){
            return this.power;
        } else if (this.sleep){
            return this.sleepPower;
        } else {
            return 0;
        }
    }
}


class Lamp extends ElectricalAppliance {
    constructor (name, power, quantity) {
        super(name);
        this.power = power*quantity;
    }
}


const computer1 = new Computer('Мой компьютер', 800)
const computer2 = new Computer('Компьютер брата', 750)
computer1.turnOn()
computer2.goSleep()
console.log(`${computer1.name} включен и потребляет ${computer1.getPowerConsumption()} Вт`)
console.log(`${computer2.name} в режиме сна и потребляет ${computer2.getPowerConsumption()} Вт`)

const lamp1 = new Lamp('Люстра на кухне', 20, 4)
const lamp2 = new Lamp('Бра в коридоре', 20, 1)
lamp1.turnOn()
console.log(`${lamp1.name} включена и потребляет ${lamp1.getPowerConsumption()} Вт`)
console.log(`${lamp2.name} выключено и потребляет ${lamp2.getPowerConsumption()} Вт`)