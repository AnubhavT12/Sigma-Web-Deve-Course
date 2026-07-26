class user{

    constructor(name){
        //invokes the setter
        this.name = name
    }

    get name(){
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log("name is too short");
            return;
        }
        this._name = value;
    }

}
let user = new user("john");
console.log(user,name);  //john

user = new user(""); //name is too short