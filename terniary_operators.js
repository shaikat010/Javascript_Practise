

let num = 8
let result

if(num == 0){
    result = "Even"
}

else{
 result = "odd"
}

// This is the terniary operator that does the same job as the above if-else loop.
result = num%2 === 0 ? "Even" : "odd" 
console.log(result)

