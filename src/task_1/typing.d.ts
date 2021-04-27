interface ICustom {
    user: User;
}

declare var Custom: ICustom;

declare class User {
    public age: number;
    public name: string;
    constructor(a: number, n: string);
    public upAgeByYear(): void;
}