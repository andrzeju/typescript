interface Person {
    getName(): string;
    getEmail(): string;
} 

class Customer implements Person {

    constructor(private name: string, private email: string, private cartItems: number) {
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getCartItems(): number {
        return this.cartItems;
    }
}

class Employee implements Person {

    constructor(private name: string, private email: string, private employeeId: number) {
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getEmployeeId(): number {
        return this.employeeId;
    }
}

class UserDetails {
    public static getNameAndEmail(person : Person): string {
        return person.getName() + " (" + person.getEmail() + ")"; 
    } 
} 

let john: Person = new Customer("John Long", "johnlong@yahoo.com", 5);
let jane: Person = new Employee("Jane Doe", "janedoe@gmail.com", 2354);

console.log(UserDetails.getNameAndEmail(john));
console.log(UserDetails.getNameAndEmail(jane));