let reviewData = [];
function onPageload() {
  let exDatas = JSON.parse(localStorage.getItem("reviews"));
  if (exDatas != null) {
    reviewData = exDatas;
  }
  renderDatas();
}
function updateDatas(reviewSource) {
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
  let exDatas = JSON.parse(localStorage.getItem("users"));
  console.log(exDatas);
  let match = false;
  for (let i = 0; i < exDatas.length; i++) {
    if (exDatas[i].username == inputData1) {
      match = true;
      break;
    }
  }
  if (match) {
    let exReviews = JSON.parse(localStorage.getItem("reviews"));
      let equal = false;
      for(let i of exReviews){
        if(i.userName==inputData1){
          equal = true;
          break
        }
      }
      if(equal){
        alert("hhhh")
      }
      else if(!equal){
    let reviewSource = {
      userName: inputData1,
      userData: inputData2,
    };
    updateDatas(reviewSource);
    renderDatas();}
  } else if (!match) {
    alert("User does not exist please login");
    window.location.href = "./../../pages/register.html";
  }


}
function renderDatas() {
  let answer = "";
  for (let i = 0; i < reviewData.length; i++) {
    let len = reviewData[i];
    let nameA = len.userName;
    console.log(nameA);
    let review = len.userData;
    console.log(review);
    let temp =
      "<li>" +
      "<img src=../assets/images/profile.png class=profile_image>" +
      "<img src=../assets/images/reveiwstar.png class=star_img>" +
      "<p class = username>" +
      nameA +
      "</p>" +
      "" +
      "<br>" +
      "<br>" +
      review +
      "</li>";
    answer = temp + answer;
    let ulTag = document.getElementById("list");
    ulTag.innerHTML = answer;
  }
}
onPageload();
