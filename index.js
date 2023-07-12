
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

var data = {
  username: username,
  password: password
};

fetch("http://localhost:5000/auth", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: {
    username: data.username,
    password: data.password
  }
})
.then(response => response.json())
.then(responseData => {
  if (responseData.message === "Authentication successful.") {
    // Login successful, redirect to another page
    window.location.href = "main.html";
  } else {
    document.getElementById("message").innerHTML = responseData.error;
  }
})
.catch(error => {
  console.error("Error:", error);
});
