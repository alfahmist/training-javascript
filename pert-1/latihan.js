// object

const person = {
    name : "fahmi",
    age : "24",
    menyapa() {
        console.log("Halo, perkenalkan saya", person.name, "umur", person.age, "tahun");
    }
}

// console.log(person);

// person.menyapa();

// objek constructor
function Orang(name,age){
    this.name = name,
    this.age = age;
}

const orangSatu = new Orang("Fahmi", 24);
const orangDua = new Orang("boris", 24);

// // for in
// console.log("// for in");
// for (const key in orangDua) {
//     if (Object.hasOwnProperty.call(orangDua, key)) {
//         const element = orangDua[key];
//         console.log(`${key} : ${element}`);
//     }
// }

// const arrayOrang = [orangSatu, orangDua];

// // for of
// console.log("// for of");
// for (const iterator of arrayOrang) {
//     console.log(iterator);
// }

//es 6 create object

class EsPerson {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }

    sayHello(isTrue) {
        return (isTrue) ? "Hello" : "Goodbye"
    }

    printName() {
        console.log(this.fname, this.lname)
    }
    

  }
  
  const newEsPerson = new EsPerson('testFirstName', 'testLastName');
  
  console.log(newEsPerson.fname); // testFirstName
  console.log(newEsPerson.lname); // testLastName
  console.log(newEsPerson.sayHello(false));
  newEsPerson.printName();
  