window.onload = function () {
  let id = getIdUrl();
  getListUser(id);
};

function getListUser(id) {
  let url = "https://6370e7cd0399d1995d866799.mockapi.io/Userlist" + id
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(id);
}

function getIdUrl() {
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");
  return id;
}

function renderInfo(user) {
  const contentHTML = `
    <p>${user?.id}</p>
    <p>${user?.name}</p>
    <button onclick="gotoForm()">Update</button>
  `;
  const elm = document.getElementById("info");
  elm.innerHTML = contentHTML;
}

function gotoForm() {
  let id = getIdUrl();
  gotoFormURL(id);
}

function gotoFormURL(id) {
  window.location.href = `./form.html?id=${id}`;
}
