class Human {
    // properties
    age = 22;
    height = 6;
    #weight = 55; // private property

    walking() {
        console.log("I am walking with weight", this.#weight); // Can access #weight here
    }

    running() {
        console.log("I am running");
    }
    get FetchWeight() {
        return this.#weight;
    }
    set changeWeight(val) {
        this.#weight = val;

    }
}

let obj1 = new Human();
console.log(obj1.age);       // Output: 22
console.log(obj1.height);    // Output: 6
obj1.running();              // Output: "I am running"
obj1.walking();              // Output: "I am walking with weight 55"
//changeWeight(60);
