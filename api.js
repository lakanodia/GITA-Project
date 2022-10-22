let peginationItem = document.getElementById("nav-number");
let currentNumPost = document.querySelectorAll(".num-item");

let pageIndex = 1;
let itemPerPage = 5;
let postList = [];
let totalNum = 30;

getPosts();

function getPosts() {
  let start = itemPerPage * (pageIndex - 1);
  let limit = itemPerPage;
  setLoaderStatus(1);

  fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`
  )
    .then((response) => response.json())

    .then((jsonData) => {
      sleepTimer(1);
      postList = jsonData;
      drawAllPosts();
      loadPagination();
      setLoaderStatus(0);
    });
}

function setLoaderStatus(isShow) {
  let spinnerDiv = document.getElementById("spinner");
  if (isShow) {
    spinnerDiv.style.display = "block";
  } else {
    spinnerDiv.style.display = "none";
  }
}

function sleepTimer(sec) {
  let endTime = new Date().getTime() + sec * 1000;
  while (new Date().getTime() <= endTime) {}
  console.log("Time Out");
}

function pageRowChangeEventHandler() {
  itemPerPage = document.getElementById("page-row-number").value;
  getPosts();
}

function drawSinglePost(item) {
  return `
    <div class="card" data-id="${item.id}">
      <img src="${item.url || "plane.jpg"}" class="card-img" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.id}</h5>
        <p class="card-text">${item.title}</p>
      </div>
    </div>
  `;
}

function drawAllPosts() {
  let mainDiv = document.getElementById("postList");
  mainDiv.innerHTML = "";
  let content = "";
  postList.forEach((e) => {
    content += drawSinglePost(e);
  });
  mainDiv.innerHTML = content;
}

function paginateNum(i) {
  let tempClass = i == pageIndex ? "active" : "";
  return `
    <li class="page-item ${tempClass}" onclick="paginationClickEventHandler(${i})"> <a class="page-link" href="#"> ${i} </a></li>
  `;
}

function loadPagination() {
  peginationItem.innerHTML = "";
  let content = "";
  for (let i = 0; i < totalNum / itemPerPage; i++) {
    content += paginateNum(i + 1);
  }
  peginationItem.innerHTML = content;
}

function paginationClickEventHandler(i) {
  pageIndex = i;
  getPosts();
}
