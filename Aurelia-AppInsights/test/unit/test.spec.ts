import auf = require("aurelia-framework");
import aur = require("aurelia-router");
import aue = require("aurelia-event-aggregator");
import auhc = require("aurelia-http-client");

import t = require("views/test1");


describe('the Test module', () => {

    beforeEach(() => {

    });

    it("test", function () {
        expect(true).toBe(true);
    });

    it("test 2", function () {
        let d = "Hello";

        expect(d).toBe("Hello");
    });

    it("should return users", (done) => {
        let vm = new t.Test1(new auhc.HttpClient());
        vm.GetUsersAsync().then(value => {
            expect(value).not.toBeNull();
            done();
        });
    });

}); 