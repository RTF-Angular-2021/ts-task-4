var Custom;
    (function (Custom) {
        var User = /** @class */ (function () {
            function User(a, n) {
                this.age = a;
                this.name = n;
            }
            User.prototype.upAgeByYear = function () {
                this.age++;
            };
            return User;
        }());
        Custom.user = new User(18, "Михаил");
    })(Custom || (Custom = {}));
    Custom.user.upAgeByYear();