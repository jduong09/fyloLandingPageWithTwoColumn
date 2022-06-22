document.addEventListener('DOMContentLoaded', () => {  
  const inputConfirmDiv = document.getElementById('input-confirm');
  const getStartedBtn = document.getElementById('input-submit');
  const earlyAccessDiv = document.getElementById('early-access-confirm');
  const earlyAccessSubmitBtn = document.getElementById('early-access-submit');

  getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const inputEmail = document.getElementById('input-email');
    const emailInputValue = inputEmail.value;
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) == true) {
      inputConfirmDiv.classList.remove('hide');
      inputEmail.classList.add('confirm');
      setTimeout(() => {
        inputConfirmDiv.classList.add('hide');
        inputEmail.classList.remove('confirm');
      }, 5000);
    }
  });

  earlyAccessSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const earlyAccessEmailBtn = document.getElementById('early-access-email');
    const emailInputValue = earlyAccessEmailBtn.value;
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) == true) {
      earlyAccessDiv.classList.remove('hide');
      earlyAccessEmailBtn.classList.add('confirm');
      setTimeout(() => {
        earlyAccessDiv.classList.add('hide');
        earlyAccessEmailBtn.classList.remove('confirm');
      }, 5000);
    }
  });
});