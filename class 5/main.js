// Your JavaScript code goes here
function User(mail, name) {
    this.mail = mail;
    this.name = name;
    this.online = false;
}


User.prototype.login = function() {
    this.online = true;
    console.log("online user:" , this.mail)
}


User.prototype.logout = function() {
    this.online = false;
    console.log("offline user:" , this.mail)
}


function Admin(...args) {
    User.apply(this, args);
    this.role = "Super admin"
}



Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = (user) => {
    console.log("deleted: ", user.email);
}


var useOne  = new User("alpha@gmm", "mkr");
var useTwo = new User("kkkr@ggg", "hhk")
var admin= new Admin("admin@kali", "sudo")
console.log(useOne)
useOne.login()
console.log(admin)