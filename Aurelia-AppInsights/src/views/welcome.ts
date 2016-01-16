
export class Welcome {
    heading = 'Welcome to the Aurelia Navigation App!';
    firstName = 'John';
    lastName = 'Doe';
    previousValue = this.fullName;

    get fullName() {
        return "";// `${this.firstName} ${this.lastName}`;
    }

    submit() {
        this.previousValue = this.fullName;
        alert(`Welcome, ${this.fullName}!`);
    }
} 

export class UpperValueConverter {
    toView(value) {
        return value && value.toUpperCase();
    }
}
