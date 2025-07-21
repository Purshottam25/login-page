function login(){
    let uname = document.querySelector("#uname").value
    let pword = document.querySelector("#pword").value
    if(uname == "purshottam25" && pword == "purshottam@25"){
        alert("login successfull");
    }
    else{
        alert("invalid Account")
    }
}
function show(){
    let pword = document.querySelector("#pword");
    if(pword.type == "password"){
        pword.type = "text";
    }
    else{
        pword.type = "password";
    }
}