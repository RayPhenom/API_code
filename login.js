document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate input before sending to backend
  if (username.length < 5 || password.length < 8) {
    alert('Username must be at least 5 characters and password at least 8 characters.');
    return;
  }

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      window.location.href = 'dashboard.html';
    } else {
      const errorData = await response.json();
      alert(errorData.error || 'Login failed');
    }
  } catch (error) {
    alert('Network error. Please try again later.');
  }
});

  