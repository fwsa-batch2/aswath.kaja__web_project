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
let loggedInusers = JSON.parse(localStorage.getItem("loggedInusers"))[0];
document.getElementById("userName").innerHTML = loggedInusers.username;
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let date = new Date().getDate();
let mon = month[new Date().getMonth()];
let year = new Date().getFullYear();
document.getElementById("dateDiv").innerHTML = date + "-" + mon + "-" + year;
function onSumbit(event) {
  event.preventDefault();
  let loggedInusers = JSON.parse(localStorage.getItem("loggedInusers"))[0];
  console.log(loggedInusers.username);
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date().getDate();
  let mon = month[new Date().getMonth()];
  let year = new Date().getFullYear();
  document.getElementById("dateDiv").innerHTML = date + "-" + mon + "-" + year;

  let inputData2 = document.getElementById("userInput").value;
  console.log(inputData2);
  let exDatas = JSON.parse(localStorage.getItem("users"));
  let match = false;
  for (let i of exDatas) {
    if (i.username == loggedInusers.username) {
      match = true;
      break;
    }
  }
  if (match) {
    let exReviews = JSON.parse(localStorage.getItem("reviews"));
    let equal = false;
    for (let i of exReviews) {
      if (i.userName == loggedInusers.username) {
        equal = true;
        break;
      }
    }
    if (equal) {
      alert("Your review has been already submitted");
    } else if (!equal) {
      let reviewSource = {
        userName: loggedInusers.username,
        userData: inputData2,
        date: date + "-" + mon + "-" + year,
      };
      updateDatas(reviewSource);
      renderDatas();
      alert("Your review has been submitted successfully");
    }
  } else if (!match) {
    alert("User does not exist please login");
    window.location.href = "./../../pages/register.html";
  }
  event.target.reset();
}
function renderDatas() {
  console.log(loggedInusers.username);
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
