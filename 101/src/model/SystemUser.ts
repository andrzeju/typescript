/**
 * SystemUser
 */
class SystemUser {
    
    private firstName : string;
    private lastName : string;
    private email : string;
    
    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    
    displayUserInfo() {
        console.log(this.firstName + " " + this.lastName + "(" +this.email + ")");
    }
}