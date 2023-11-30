// Your JavaScript code goes here
// Your JavaScript code goes here
var users = []

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



class User {
    constructor(email, name, status) {
        this.email = email;
        this.name = name ;
        this.status = status;
        this.score = 0
    }

    login() {
        console.log(this.email, "just logged in")
        return this
    }
    logout() {
        console.log(this.email, "just logged out")
        return this
    }

    updateScote() {
        this.score++;
        console.log(this.email, `the score is now ${this.score}`)
        return this
    }
    addList(list) {
        list.push(this)
    }
}

var newUserOne = new User("'edu@dot.com", "slif", true)
newUserOne.addList(users)
var newUserTwo = new User("dfd", "sds", true)
newUserTwo.addList(users)


//what new is doing 
// - creates a mew empty object 
// - sets the value of this to be the new empty object
// calls the constructor method


// console.log(User.prototype.login)

// console.log(newUserOne.login().updateScote().updateScote().logout())

class Admin extends User {
    constructor(name, email, status, password) {
        super(email, name, status)
        this.password = password
    }

    deleteUser(user) {
        users = users.filter(x => {
            return x.email == user.email
        })
    }
}


var admin = new Admin("sudo@kali", "sudo", true, 1213232)
admin.addList(users)


// console.log(users)
admin.deleteUser(newUserOne)
// console.log(users)

console.log(newUserTwo)

function Car(year, model) {
    this.year = year;
    this.model = model;
}

