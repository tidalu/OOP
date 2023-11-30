// Your JavaScript code goes here


var userOne = {
    email: "ulugio23@gmail.com", 
    name: "alif",
    login(){
        console.log(this.email, "has logged in")
    }, 
    logout(){
        console.log(this.email, "has logged out")
    }
};

var userTwo = {
    email: "uewrwo23@gmail.com", 
    name: "alrt",
    login(){
        console.log(this.email, "has logged in")
    }, 
    logout(){
        console.log(this.email, "has logged out")
    }
};



userOne.name = "Tidalu"


var prop = "email"
userOne[prop] ///it is possible 
userOne.prop // this is not possible

