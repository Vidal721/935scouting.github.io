document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    // Retrieve stored password
    const storedPassword = localStorage.getItem(username);
  
    if (storedPassword === password) {
      // Success message or redirect
      alert('Login successful!');
      window.location = "master_main.html"
    } else {
      // Invalid credentials message
      alert('Invalid username or password.');
    }
  });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



