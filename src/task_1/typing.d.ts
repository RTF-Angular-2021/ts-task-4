export declare var Custom:() => ICustom;

export interface ICustom{
    user:IUser;
}

export interface IUser{
    name:string;
    age:number;
    upAgeByUser(): void
}

