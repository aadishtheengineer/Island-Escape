// LOST ISLAND ONLINE - ACCOUNT SYSTEM


let account = {

    username:"Player",

    created:false

};




// Create account

function createAccount(name){

    account.username = name;

    account.created = true;


    localStorage.setItem(
        "LostIslandAccount",
        JSON.stringify(account)
    );


    alert(
        "👤 Account Created: " + name
    );

}




// Load account

function loadAccount(){

    let data = localStorage.getItem(
        "LostIslandAccount"
    );


    if(data){

        account = JSON.parse(data);


        alert(
            "Welcome back " + account.username
        );

    }

}




// Change username

function changeUsername(name){

    account.username = name;


    localStorage.setItem(
        "LostIslandAccount",
        JSON.stringify(account)
    );

}




// Delete account

function deleteAccount(){

    localStorage.removeItem(
        "LostIslandAccount"
    );


    account = {

        username:"Player",

        created:false

    };


    alert(
        "Account deleted"
    );

}
