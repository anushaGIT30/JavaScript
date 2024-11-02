class Human {
    //properties
    //class is public bydefault
    // if we want to declare as private we use #
    age = 22;
    height = 6;
    weight = 55;



    walking() {
        console.log("iam walking");
    }
    running() {
        console.log("iam running ");
    }


};
let obj1 = new Human();
console.log(obj1.weight);
obj1.running();
