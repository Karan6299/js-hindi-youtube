const accountId = "12345"// const = never change value
let accountEmail ="Karangoogle@.com"
var accountPassword = "34355"
accoutCity = "Jaipur"

let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@1234"
accountPassword = "2121212"
accoutCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in bloock scope and function scope

*/

console.table([accountId, accountEmail, accountPassword, accoutCity, accountState])