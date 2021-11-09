const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('emailInput');
const errorMsg = document.getElementById('errorMsg');
const errorIcon = document.getElementById('errorIcon');

submitBtn.onclick = (evt) => {

  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  evt.preventDefault();

  if (emailPattern.test(emailInput.value)) {
    console.log('valid')
  } else {
    emailInput.className = 'not-valid';
    errorMsg.style.display = 'inline';
    errorIcon.style.display = 'inline';
  }
}

emailInput.onkeydown = () => {
  if (emailInput.className === 'not-valid') {
    emailInput.classList.remove('not-valid');
    errorMsg.style.display = 'none';
    errorIcon.style.display = 'none';
  }
}
