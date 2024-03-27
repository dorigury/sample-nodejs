//npm install bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'sam001';
const someOtherPlaintextPassword = 'not_bacon';

//generate a salt and hash on separate function calls
// synchronous 방식으로 salt를 생성하고 hash를 생성하면 변수로 저장할 수 있다. 
const salt = bcrypt.genSaltSync(saltRounds);
let aSyncHash = bcrypt.hashSync(myPlaintextPassword, salt);
console.log("=============================================");
console.log("generate a salt and hash on separate function calls")
console.log('salt:',salt);
console.log('aSyncHash:',aSyncHash);

// auto-gen a salt and hash
aSyncHash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("=============================================");
console.log("auto-gen a salt and hash")
console.log('aSyncHash:',aSyncHash);


// compare hash
bcrypt.compare(myPlaintextPassword, aSyncHash, (err, result) => {
    console.log("=============================================");
    console.log("compare hash")
    if(err) {
        console.error(err);
    } else {
        console.log('result:',result);
    }
});


// Generate Salt 
bcrypt.genSalt(saltRounds, function(err, salt) {
    console.log("=============================================");
    console.log("genSalt async")    
    if(err) {
        console.error(err);
    } else {
        console.log('salt:',salt);
        // Generate Hash
        bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
            if(err) {
                console.error(err);
            } else {
                console.log('hash:',hash);
            }
        });
    }
});

// auto-gen a salt and hash
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log("=============================================");
    console.log("hash async")    

    if(err) {
        console.error(err);
    } else {
        console.log('hash:',hash);
        // asynchronous 방식으로 salt를 생성하고 hash를 생성하면 변수로 저장할 수 없다. 
        // error 
        //let asyncHash = hash;
    }
});

