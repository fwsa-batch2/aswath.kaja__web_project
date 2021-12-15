let userName = document.getElementById("username");
let password = document.getElementById("password");
  
function userExists(){
    



}
function emailvalid(currentemail) {
    // let userData = JSON.parse(localStorage.getItem("users"));
    let used = false;
    for (i = 0; i < userList.length; i++) {
        const email = userList[i].email;
        if (currentemail == email) {
            used = true;
            break;
        }
    }
    return used;
}

