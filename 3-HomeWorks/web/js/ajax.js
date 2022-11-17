$.get("./header.html", function (data, status) {
    // alert("Data: " + data + "\nStatus: " + status);
    document.querySelector("header").innerHTML = data;
  });

  $.get("./footer.html", function (data, status) {
    // alert("Data: " + data + "\nStatus: " + status);
    document.querySelector("footer").innerHTML = data;
  });