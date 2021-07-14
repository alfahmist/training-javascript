let timeout = 1000; // 1 detik 

setTimeout(()=> {
    console.log("print")
}, timeout)

console.log("Halo");

let completed = true;

let makePromises = (completed)=>{ return new Promise((res,err)=> {
    setTimeout(()=> {
        if(completed) {
            res("Sukses");
        } else {
            err("Error");
        }
    }, timeout)
})
}

 let learnJS = makePromises(completed);

console.log()

learnJS
    .then( success => {
        console.log(success);
    })
    .catch( fail => {
        console.log(fail);
    })
    .finally(console.log("menjalankan promises"));