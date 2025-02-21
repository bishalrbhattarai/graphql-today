// interface IdentifyType {
//     name: string;
//     age: number;
// Object Literal
const identify = {
    name: "shrijan",
    age: 20
};
// everything in js world is basically an object
class MongoDb {
    // name: string;
    // age: number;
    create() {
        console.log("MongoDb create");
        return 1;
    }
    read() {
        console.log("MongoDb read");
    }
    update() {
        console.log("MongoDb update");
    }
    delete() {
        console.log("MongoDb delete");
    }
}
class MySql {
    create() {
        console.log("MySql create");
        return 5;
    }
    read() {
        console.log("MySql read");
    }
    update() {
        console.log("MySql update");
    }
    delete() {
        console.log("MySql delete");
    }
}
const mysql = new MySql();
// lets talk about generics
// generic function
const add = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return `a+b`;
    }
    throw new Error("Invalid types");
};
add(2, 3);
add("shrijan", "shrestha");
export {};
