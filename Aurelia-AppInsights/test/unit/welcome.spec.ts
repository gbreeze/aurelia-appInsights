import w = require("views/welcome");

describe('The Welcome VM', () => {    

    it("should return the first and last name", () => {

        let welcome = new w.Welcome();
        welcome.firstName = "First Name";
        welcome.lastName = "Last Name";        

        expect(welcome.fullName).toBe(`${welcome.firstName} ${welcome.lastName}`);
    });

}); 