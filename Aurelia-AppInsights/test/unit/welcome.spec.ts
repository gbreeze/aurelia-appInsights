import w = require("src/views/welcome");

describe('The Welcome VM', () => {    

    it("test", function () {        
        expect(true).toBe(true);
    });

    it("test 2", function () {
        let d = "Hello";

        expect(d).toBe("Hello");
    });

    it("should return the first and last name", () => {

        let welcome = new w.Welcome();
        welcome.firstName = "First Name";
        welcome.lastName = "Last Name";        

        expect(welcome.fullName).toBe(`${welcome.firstName} ${welcome.lastName}`);
    });

}); 