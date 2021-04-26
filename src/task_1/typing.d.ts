declare namespace Custom {
    class User {
        public age: number;
        public name: string;

        constructor(a: number, n: string);
        public upAgeByYear(): void;
    }

    let user: User;
}
