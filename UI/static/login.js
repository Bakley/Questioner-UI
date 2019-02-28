const loginresults = document.getElementById('loginresults').addEventListener('click', logIn);

function logIn(event){
    // event.preventDefault();
    let url = 'http://127.0.0.1:5000/auth/v2/login';

    fetch(url, {
        method : 'POST',
        mode: 'cors',
        body : JSON.stringify({
          "email": document.getElementById('email').value,
          "userpassword": document.getElementById('password').value
        }),
        headers : {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 201){
          window.location.href = "user_dashboard.html";
        } else if (data.error){
          window.alert(data.error)
        }
      })
    }