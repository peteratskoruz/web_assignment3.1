
/**greeting message using
 * class and
 * constructor**/


class Greeter{

    private _userName: string;

    constructor(userName: string){
        this._userName = userName;
    }

    /**greet method**/

    greeter(){
        return `Welcome <b>${this._userName}</b> for typescript training.`;
    }

}

/**instance of the class**/

let greet = new Greeter('Raja');

/**display text in document**/

document.getElementById('greet').innerHTML = greet.greeter();

console.log(greet.greeter());