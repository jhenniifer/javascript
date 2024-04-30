let firstName = "Kosiso"
let lastName = "Chukwuma"
let status = "Single"
let country = "Nigeria"
let age = 21

let a = 4
let b = 3
a>b ? console.log( "a is greater than b") : console.log("a is less than b")
if(a > b){
    console.log("a is greater than b")
}  else(
    console.log("a is less than b")  )

console.log ("you can check if a division has remainder or not by using the modulus")
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 == '4')
console.log(4 ==='4')
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))

let myDate = new Date() 
let myYear = myDate.getFullYear()
let myMonth = myDate.getMonth()
let myDay = myDate.getDay()
let myHour = myDate.getHours()
let myMin = myDate.getMinutes()
console.log(myYear + "-" + myMonth + "-" + myDay + " " + myHour + ":" + myMin)
