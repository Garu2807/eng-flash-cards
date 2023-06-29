const registerForm = document.getElementById('form-register');

if (registerForm) {
  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { login, password, method } = event.target;


    const response = await fetch('/api/auth/register', {
      method,
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      registerForm.reset();
      window.location.href = '/';
    }
  });
}

const loginForm = document.getElementById('form-login');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { login, password } = event.target;

  const response = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      login: login.value,
      password: password.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {

    loginForm.reset();
    window.location.href = 'topics';
  } else {
    const data = await response.json();
    alert(data.message);
  }
});