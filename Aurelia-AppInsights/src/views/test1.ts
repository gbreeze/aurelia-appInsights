import auhc = require("aurelia-http-client");

interface IUser {
    login: string
    name: string;
    age: number;
    homeTown: string;
}

export class Test1 {

    public users: Array<IUser>;
    static inject = [auhc.HttpClient];
    url = "https://api.github.com/users";

    constructor(private http: auhc.HttpClient) {

    }

    activate() {
        this.GetUsersAsync().then(value => {

            let u = value;
            // this.users = u.filter((u) => u.login.startsWith('t'));
            this.users = u;
        });
    }

    GetUsersAsync(): Promise<Array<IUser>> {
        return new Promise<Array<IUser>>((resolve, reject) => {
            this.http.get(this.url).then(response => {
                resolve(response.content as Array<IUser>);
            });
        });
    }
}