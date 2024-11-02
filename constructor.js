class Human {
    // Properties
    age = 22;
    height = 6;
    #weight = 55; // private property

    constructor(newAge, newHeight, newWeight) {
        this.age = newAge;
        this.height = newHeight;
        this.#weight = newWeight;
    }

    // Private method
    #walking() {
        console.log("I am walking with weight", this.#weight); // Can access #weight here
    }

    // Public method
    running() {
        console.log("I am running");
    }

    // Getter to access private weight
    get FetchWeight() {
        return this.#weight;
    }

    // Setter to modify private weight
    set changeWeight(val) {
        this.#weight = val;
    }

    // Public method to invoke private walking method
    startWalking() {
        this.#walking();
    }
}

let obj1 = new Human(50, 160, 640);

// Correct usage
console.log(obj1.age);           // Output: 50
console.log(obj1.height);        // Output: 160
obj1.running();                  // Output: "I am running"
obj1.startWalking();             // Output: "I am walking with weight 640"
console.log(obj1.FetchWeight);   // Output: 640
