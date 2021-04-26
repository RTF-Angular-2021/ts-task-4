import {Custom, IUser} from "./typing";

class User implements IUser {
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
    age: number;
    name: string;

    upAgeByUser(): void {
        this.age++;
    }
}

let custom = Custom();
custom.user = new User(19, "Dale");
custom.user.upAgeByUser();

console.log(custom.user)
