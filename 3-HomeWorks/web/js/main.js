//R
function getListUser() {
    let url = "https://6370e7cd0399d1995d866799.mockapi.io/Userlist";
    fetch(url, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            _renderListUser(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
//render ra ui
function _renderListUser(listUser) {
    let contentBody = ``;
    listUser.map((user) => {

        /*      contentBody = contentBody + `<tr class="">
                          <td scope="row">${user.name}</td>     // viet day du
                          <td>${user.avatar}</td>
                        </tr>`;
            });
        */
        contentBody += `<tr class="">
                  <td scope="row">${user.name}</td>
                  <td>${user.avatar}</td>
                  <td>
                  <button onclick="handeDetail(${user.id})">Detail</button>  
                  <button onclick="handeDelete(${user.id})">Delete</button>
                </td>
                </tr>`
    });
    let res = `
      <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${contentBody}
        </tbody>
      </table>
    `;

    let elm = document.getElementById("result");
    elm.innerHTML = res;
}

//C
function postUser() {
    let url = "https://6370e7cd0399d1995d866799.mockapi.io/Userlist";
    let data = {
        name: "Le Diep",
        avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg",
    };
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}


//U
function putUser() {
    console.log("putUser");
    let url = "https://6370e7cd0399d1995d866799.mockapi.io/Userlist/11";
    let data = {
        name: "update user",
        avatar:
            "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg",
    };
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

//D
function deleteUser(userId) {
    let url = "https://6370e7cd0399d1995d866799.mockapi.io/Userlist/" + userId;
    fetch(url, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            getListUser()
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
// xoa tren ui

function handeDelete(userId) {
    console.log('Clicked delete', userId);
    deleteUser(userId)
}

// detail
function handeDetail(userId) {
    console.log('Clicked detail', userId);
    let newUrl = "./detail.html?id=" + userId
    console.log(newUrl);
    window.location.href = newUrl
  }





