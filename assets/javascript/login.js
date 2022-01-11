let logArrays =[];
function onPageload() {
  let userData = JSON.parse(localStorage.getItem("logggedInusers"));   
    if(userData!=null){
        logArrays = userData;
    }
    return logArrays
 
}
onPageload ();
function login(event){
    event.preventDefault();
   let regEmail = document.getElementById("email").value;
   let regPassword = document.getElementById("password").value;
   let emailCheck = emailExists(regEmail,regPassword); // emailExists is function that that checks user email and password ;
   console.log(emailCheck);
   if(emailCheck){
       alert("you have succesfully logged in")
       let loggedIns = {
           "logEmail": regEmail,
           "logPass" : regPassword,
       } ;
       logArrays.push(loggedIns);     
       localStorage.setItem("loggedInusers",JSON.stringify(logArrays));
       window.location.href = "./../index.html";
   }
   else{
       alert("user doesn't exists");
   }
}

function emailExists(paraEmail,paraPassword) {
    let match = false;
let allUsers = JSON.parse(localStorage.getItem("users"));
    for (let i of allUsers){
        let mail = i.email;
        let pass = i.password;
        if (mail == paraEmail && pass == paraPassword){
            match = true;
            break; 
        }    
    }
 return match;
}






  

