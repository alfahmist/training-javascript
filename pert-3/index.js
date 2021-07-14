// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     getName() {
//         return this.name;
//     }
// }

// class Employee extends Person {
//     constructor(name, title) {
//         super(name);
//         this.title = title;
//     }

//     getTitle() {
//         return this.title;
//     }
//     doWork() {
//         return this.name + "is working";
//     }

//     getEmployeeData() {
//         const {name, title} = this;
//         console.log(name, title)
//     }
// }

// let coba =  new Person("Gusti Alfahmi Anwar");
// console.log(coba.getName());

// let ringo = new Employee("Ringo starr", "Drummer");
// console.log(ringo.doWork(), "as", ringo.getTitle());
// ringo.getEmployeeData();

//promises

let completed = true;
let learnJs = new Promise(function (res, err){
    if(completed) {
        res("Completed");
    } else {
        err("error");
    }
});

learnJs.then(
    success => console.log("sukses", success),
    error => console.log("error", error)
);