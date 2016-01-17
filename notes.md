# Notes

1

* show agenda
* show file structure
* show the error on website

2

* create the test
* show the error on test
* fix the error on the vm

3

* show bindings
* show the request with the interface mapping

4

* Aurelia, Typescript (show generics on test1 vm)

5

* show Code coverage output
* Regression testing
* Continuous Integration (show image on website)

### if there is time

debugging

grids

<http://charlespockert.github.io/aurelia-bs-grid-demo>

<http://donthedev.com/aurelia/#datagrid-examples/>

<https://github.com/markcell/jquery-tabledit>

<http://js-grid.com/demos/>

<http://www.danyow.net/aurelia-breeze-northwind/>





---

    describe('The Welcome Page', () => {    

        it("should return the first and last name", () => {

            let welcome = new vm.Welcome();
            welcome.firstName = "Max";
            welcome.lastName = "Mustermann";        

            expect(welcome.fullName).toBe(`${welcome.firstName} ${welcome.lastName}`);
        });

    });


---
     this.users = u.filter((u) => u.login.startsWith('t'));