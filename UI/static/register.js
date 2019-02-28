const registeresults = document.getElementById('registeresults').addEventListener('click', signIn);

function signIn(event){
    // event.preventDefault();
    let url = 'http://127.0.0.1:5000/auth/v2/signup';

    fetch(url, {
        method : 'POST',
        mode: 'cors',
        body : JSON.stringify({
          "email": document.getElementById('email').value,
          "userpassword": document.getElementById('password').value,
          "firstname": document.getElementById('firstname').value,
          "lastname" : document.getElementById('lastname').value,
          "othername" : document.getElementById('othername').value,
          "phoneNumber" : document.getElementById('phoneNumber').value,
          "username" : document.getElementById('username').value

        }),
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
          }
        })
        .then((res) => res.json())
        .then((data ) => {
          if (data.status === 201){
            window.location.href = "user_login.html";
          } else if(data.error){
            window.alert(data.error)
          }
      
        })
    }