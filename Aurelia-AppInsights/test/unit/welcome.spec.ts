import vm = require("views/welcome");

describe('The Welcome Page', () => {    

    it("should return the first and last name", () => {

        let welcome = new vm.Welcome();
        welcome.firstName = "First Name";
        welcome.lastName = "Last Name";        

        expect(welcome.fullName).toBe(`${welcome.firstName} ${welcome.lastName}`);
    });

}); 