let reviewData = [];
function onPageload(){
  let exDatas = JSON.parse(localStorage.getItem("reviews"));
  if(exDatas != null){
    reviewData = exDatas;
  }
  renderDatas()
}
function updateDatas(reviewSource){
  reviewData.push(reviewSource);
  let reviewDataInString = JSON.stringify(reviewData);
  localStorage.setItem("reviews", reviewDataInString);
}
function onSumbit() {
  event.preventDefault();
  let inputData1 = document.getElementById("userName").value;
  //  console.log(inputData1);
  let inputData2 = document.getElementById("userInput").value;
  //  console.log(inputData2);
  let exDatas = JSON.parse(localStorage.getItem("user"));
  console.log(exDatas);
  let match = false;
  for(let i=0; i<exDatas.length; i++){    
  if(exDatas[i].userName==inputData1){
    match = true;
    break;
  }
  }
if(match){ 
  let reviewSource = {
  userName: inputData1,
  userData: inputData2,
};
updateDatas(reviewSource)
renderDatas();
}
else if(!match){
  alert("Your review has been already submitted")
}
}
function renderDatas() {
  let answer ="";
  for (let i = 0; i < reviewData.length; i++) {
    let len = reviewData[i];
    let nameA = len.userName;
    console.log(nameA);
    let review = len.userData;
    console.log(review);
    let temp ="<li>"+"<img src=../assets/images/profile.png class=profile_image>"+"<img src=../assets/images/reveiwstar.png class=star_img>"+"<p class = username>"+ nameA +"</p>"+"" +"<br>" +"<br>" +review+ "</li>";
    answer = temp + answer;
    let ulTag = document.getElementById("list");
    ulTag.innerHTML = answer;
      }
}
onPageload()


