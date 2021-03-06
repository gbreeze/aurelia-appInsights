define(["require", "exports", "aurelia-router"], function (require, exports, aur) {
    var Welcome = (function () {
        function Welcome(router) {
            this.router = router;
            this.heading = "Child Router";
            router.configure(function (config) {
                config.map([
                    { route: ["", "welcome"], moduleId: "./welcome", nav: true, title: "Welcome" },
                    { route: "flickr", moduleId: "./flickr", nav: true },
                    { route: "child-router", moduleId: "./child-router", nav: true, title: "Child Router" }
                ]);
            });
        }
        Welcome.inject = [aur.Router];
        return Welcome;
    })();
    exports.Welcome = Welcome;
});
//# sourceMappingURL=child-router.js.map