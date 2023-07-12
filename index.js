
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
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      // Login successful, redirect to another page
      window.location.href = "main.html";
    } else {
      response.json().then(data => {
        document.getElementById("message").innerHTML = data.message;
      });
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
