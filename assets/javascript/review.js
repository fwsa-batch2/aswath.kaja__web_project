let reviewData = [];
function onPageload() {
  let exDatas = JSON.parse(localStorage.getItem("reviews"));
  if (exDatas != null) {
    reviewData = exDatas;
    renderDatas();
  }
  else if(exDatas == null){
    localStorage.setItem("reviews",JSON.stringify([]));
    renderDatas();
  }
}
function updateDatas(reviewSource) {
  reviewData.push(reviewSource);
  let reviewDataInString = JSON.stringify(reviewData);
  localStorage.setItem("reviews", reviewDataInString);
}
let loggedInusers = JSON.parse(localStorage.getItem("loggedInusers"))[0];
document.getElementById("userName").innerHTML =`${loggedInusers.userName}`;
console.log(loggedInusers.userName);
let month = [
  "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",
];
let date = new Date().getDate();
let mon = month[new Date().getMonth()];
let year = new Date().getFullYear();
document.getElementById("dateDiv").innerHTML = date + "-" + mon + "-" + year;
function onSumbit(event) {
  event.preventDefault();
  let inputData2 = document.getElementById("userInput").value;
  console.log(inputData2);

    let exReviews = JSON.parse(localStorage.getItem("reviews"));
    let equal = false;
    for (let i of exReviews) {
      if (i.userName == loggedInusers.userName) {
        equal = true;
        break;
      }
    }
    if (equal) {
      alert("Your review has been already submitted");
      window.location.href = "./../index.html";

      
    } else if (!equal) {
      let reviewSource = {
        "userName": loggedInusers.userName,
        "userData": inputData2,
        "date": date + "-" + mon + "-" + year,
      };
      updateDatas(reviewSource);
      alert("Your review has been submitted successfully");
      window.location.href = "./../index.html";
    }
  event.target.reset();
}
function renderDatas() {
  let answer = "";
  for (let i of reviewData) {
    let review = i.userData;
    let uName = i.userName;
    console.log(review);
    let temp = `<li><img src=../assets/images/profile.png class=profile_image><img src=../assets/images/reveiwstar.png class=star_img><p class = username>${uName}</p><br><br>${review}</li><p class="date">${date} ${mon} ${year}</p>`;
    answer = temp + answer;
    let ulTag = document.getElementById("list");
    ulTag.innerHTML = answer;
  }
}
onPageload();