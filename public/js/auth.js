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

    const res = await response.json();

    console.log(res);

    if (res.message === 'success') {
      registerForm.reset();
      window.location.href = '/topic/';
    }
  });
}

const loginForm = document.getElementById('form-login');

if (loginForm) {
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

    const res = await response.json();
  
    if (res.message === 'ok') {
      loginForm.reset();
      window.location.href = '/topic/';
    } else {
      const data = await response.json();
      alert(data.message);
    }
  });
}
