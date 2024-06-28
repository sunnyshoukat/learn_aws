const AWS = require('aws-sdk');

const IAM = new AWS.IAM();

const params = {
    UserName:'testUser'
};

IAM.createUser(params, function(err, data){
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
});