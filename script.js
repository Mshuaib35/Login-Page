function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="root")
    {
        alert("login Succesfully");
        return false;
    }
    else
    {
        alert("login Failed please Try again")
    }
}