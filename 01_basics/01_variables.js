const accountId = 144553
let accountEmail = "raju@google.com"
var accountPassword = "12345"
accountCity = "Bhaktapur"
let accountState;
// accountId = 2 //not allowed

// accountEmail = "nice@google.com"
// accountPassword = "26565"
// accountCity = "Kathmandu"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log([accountEmail, accountId, accountPassword, accountCity])
console.log(accountState)