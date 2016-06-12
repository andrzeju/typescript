/**
 * SystemUser
 */
var SystemUser = (function () {
    function SystemUser(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    SystemUser.prototype.displayUserInfo = function () {
        console.log(this.firstName + " " + this.lastName + "(" + this.email + ")");
    };
    return SystemUser;
}());
