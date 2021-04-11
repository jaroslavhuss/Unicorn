/**
 * Napsat třídu, která řeší faktoriál
 */
var factorial = /** @class */ (function () {
    function factorial(num) {
        this.num = num;
        this.results = num;
    }
    factorial.prototype.calculateFactorialAsRecursion = function () {
        this.num--;
        this.results = this.results * this.num;
        if (this.num <= 1) {
            return this.results * 1;
        }
        else {
            this.calculateFactorialAsRecursion();
        }
        return this.results;
    };
    factorial.prototype.calculateFactorialAsLoop = function () {
        while (this.num > 0) {
            this.num--;
            if (this.num > 0) {
                this.results = this.results * this.num;
            }
        }
        return this.results;
    };
    return factorial;
}());
var loop = new factorial(10).calculateFactorialAsLoop();
console.log(loop);
var recursion = new factorial(10).calculateFactorialAsRecursion();
console.log(recursion);
//# sourceMappingURL=cv01.js.map