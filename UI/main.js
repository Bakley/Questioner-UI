// sign in modular
document.getElementById('signin').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.login-box').style.display = 'none';
});

// sigh up modular
document.getElementById('signup').addEventListener('click', () => {
  document.querySelector('.bg-modal-register').style.display = 'flex';
});

document.querySelector('.closeup').addEventListener('click', () => {
  document.querySelector('.signup-box').style.display = 'none';
});

// Admin sign in modular
document.getElementById('admin').addEventListener('click', () => {
  document.querySelector('.bg-modal-admin').style.display = 'flex';
});

document.querySelector('.closeadmin').addEventListener('click', () => {
  document.querySelector('.adminlogin-box').style.display = 'none';
});
