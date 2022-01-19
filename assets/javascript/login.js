let logArrays =[];
function onPageload() {
  let userData = JSON.parse(localStorage.getItem("logggedInusers"));   
    if(userData!=null){
        logArrays = userData;
    }
}
onPageload ();
function login(event){
    event.preventDefault();
  let exDatas = JSON.parse(localStorage.getItem("users"))
   let regEmail = document.getElementById("email").value;
   let regPassword = document.getElementById("password").value;
   let loggedIns ={}
 for(let i of exDatas){
     if(i.email===regEmail){
         loggedIns = i;
         break
     }
 }
   let emailCheck = emailExists(regEmail,regPassword); // emailExists is function that that checks user email and password ;
   console.log(emailCheck);

   if(emailCheck){
       alert("you have succesfully logged in")
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






  

