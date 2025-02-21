// interface IdentifyType {
//     name: string;
//     age: number;

import { prototype } from "events";

//     // [key: string]: any;
// }

// interface IdentifyType2 extends IdentifyType, Record<string, string | number> { }
// const shrijan: IdentifyType2 = {
//     name: 'shrijan',
//     hobby: "Roonie Colemon",
// }
// the most difficult task is to define the varibleName

// primitive types : number, string, boolean, null, undefined, symbol, bigint
// Reference/Object types : object, array, function, class, interface, enum, tuple, any, unknown, never, void

// interface IdentifyType {
//     name: string;
//     age: number;
//     hobby: string;
// }

// const a: IdentifyType = {
//     name: "shrijan",
//     age: 20,
//     hobby: "Roonie Colemon"
// }

// interface Student {
//     name: string;
//     age: number;
//     hobby: string;
//     class: number;
//     indentify: IdentifyType;
// }

// const b: Student = {
//     name: "shrijan",
//     age: 20,
//     hobby: "Roonie Colemon",
//     class: 10,
//     indentify: a
// }

// // attributes - name, age, hobby, class, indentify
// // methods - getName, getAge, getHobby, getClass, getIdentify run, walk, eat, sleep



// function add(a: number, b: number): number {
//     return a + b;
// }


// class Parent {

//     mainName: string;


//     constructor(mainName: string) {
//         this.mainName = mainName
//     }

// }

// // super() is used to call the parent class constructor

// class Son extends Parent {
//     name: string;
//     age: number;
//     hobby: string;
//     standard: number;

//     // constructor function
//     constructor(mainName: string, name: string, age: number, hobby: string, standard: number) {
//         super(mainName);
//         this.name = name,
//             this.age = age;
//         this.hobby = hobby;
//         this.standard = standard
//     }
// }







// instatiation = creating an object
// const son1 = new Son("mainName", "shirajn", 20, "Roonie Colemon", 10);
// const son2 = new Son("mainName2", "shirajn2", 30, "Arnold", 10);


// if you want to pass dynamic values to the object


// console.log(person1);

// interface StudentV2 extends Omit<Student, "class"> { }

//  2 modules 

interface DatabaseOperation {

    // define me propeties
    // name: string;
    // age: number

    create(): number;
    read(): void;
    update(): void;
    delete(): void;
}


interface Indentify {
    name: string;
    age: number;
}

// Object Literal
const identify: Indentify = {
    name: "shrijan",
    age: 20
}

// everything in js world is basically an object

class MongoDb implements DatabaseOperation {

    // name: string;

    // age: number;

    create(): number {
        console.log("MongoDb create");
        return 1;
    }
    read(): void {
        console.log("MongoDb read");

    }
    update(): void {
        console.log("MongoDb update");
    }
    delete(): void {
        console.log("MongoDb delete");
    }

}

class MySql implements DatabaseOperation {

    create(): number {
        console.log("MySql create");
        return 5;
    }
    read(): void {
        console.log("MySql read");
    }
    update(): void {
        console.log("MySql update");
    }
    delete(): void {
        console.log("MySql delete");
    }

}


const mysql = new MySql()



// lets talk about generics
// generic function
const add = <T>(a: T, b: T): T => {
    if (typeof a === "number" && typeof b === "number") {
        return (a as any) + (b as any);
    }
    else if (typeof a === "string" && typeof b === "string") {
        return `a+b` as any;
    }
    throw new Error("Invalid types");
};

add<number>(2, 3)
add<string>("shrijan", "shrestha")