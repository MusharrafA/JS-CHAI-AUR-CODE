const accountId = 14423
let accountEmail = "moju@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"

//accountId = 2//not allowed

accountEmail = "hd@gmail.com"
accountPassword = "2536"
accountCity = "Bengaluru"
console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and fuunction scope */

console.table([accountEmail, accountId, accountPassword, accountCity])
