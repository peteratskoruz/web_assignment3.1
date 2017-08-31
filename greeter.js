/**greeting message using
 * class and
 * constructor**/
var Greeter = (function () {
    function Greeter(userName) {
        this._userName = userName;
    }
    /**greet method**/
    Greeter.prototype.greeter = function () {
        return "Welcome <b>" + this._userName + "</b> for typescript training.";
    };
    return Greeter;
}());
/**instance of the class**/
var greet = new Greeter('Raja');
/**display text in document**/
document.getElementById('greet').innerHTML = greet.greeter();
console.log(greet.greeter());
