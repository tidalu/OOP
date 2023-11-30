// Your JavaScript code goes here


var useOne = {
    email: "ulugio23@gmail.com", 
    name: "alif",
    login(){
        console.log(this.email, "has logged in")
    }, 
    logout(){
        console.log(this.email, "has logged out")
    }
};

console.log(useOne.name)