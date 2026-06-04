const userLoggedIn = true
const debitCard = true

const LoggedInfromGoogle = true
const LoggedInfromEmail = false

if (userLoggedIn && debitCard) {
    console.log("Allow to buyed course")
}

if(LoggedInfromEmail || LoggedInfromGoogle) {
    console.log("User Logged inf")

}
