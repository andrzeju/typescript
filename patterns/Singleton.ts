class Singleton { 
    private static instance: Singleton = null;
    private id: number = Math.random();

    public static getInstance(): Singleton {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }    

    public getId(): number {
        return this.id;
    }

}

console.log(Singleton.getInstance().getId());
console.log(Singleton.getInstance().getId());
console.log(new Singleton().getId());   //no private constructors, scheduled for Typescript 2.0