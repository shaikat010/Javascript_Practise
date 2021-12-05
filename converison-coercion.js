let num = 6
console.log(typeof num, num)


// explicit type conversion
let num_2 = Number("123")
console.log(typeof num_2)


// this is type corecion
let x = 8
console.log(typeof x, x)

x = x + ""
console.log(typeof x, x)
//this is also corecion where a string is converted to 
//number to make the subtraction happen
x = x - 2
console.log(typeof x, x)

//this means that is boolean by default every number is true whetever the value is
x = !x
console.log(x, typeof x)


//this is true
console.log(Boolean(7))

// this is false
console.log(Boolean(0))


//this is true
console.log(Boolean('Shaikat'))

//This will find out the number part and then keep only the number
let y = parseInt('123 Shaikat')
console.log(typeof y, y)






