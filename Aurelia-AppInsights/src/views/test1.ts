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
       // let data = this.users.filter((u) => u.age > 20);
    }

    activate() {
        this.GetUsersAsync().then(value => {
            this.users = value as Array<IUser>;
        });
    }

    GetUsersAsync(): Promise<Array<any>> {
        return new Promise<Array<any>>((resolve, reject) => {
            this.http.get(this.url).then(response => {
                resolve(response.content);
            });
        });
    }
}