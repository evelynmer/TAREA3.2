function emailValidation() {
    const form = document.getElementById('form');
    const email = form.email;
    const emailConfirm = form.email_confirm;
    
    emailConfirm.addEventListener('input', () => {
      const errorElement = document.querySelector('.error-message');
      if (email.value !== emailConfirm.value) {
        emailConfirm.classList.add('error');
        if (!errorElement) {
          const element = document.createElement('p');
          const message = document.createTextNode("Los correos electrónicos no coinciden");
          element.appendChild(message);
          element.classList.add('error-message');
          emailConfirm.parentElement.appendChild(element);
        }
      } else {
        emailConfirm.classList.remove('error');
        if (errorElement) {
          emailConfirm.parentElement.removeChild(errorElement);
        }
      }
    });
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (email.value !== emailConfirm.value) {
        const element = document.createElement('p');
        const message = document.createTextNode("Los correos electrónicos no coinciden");
        if (!document.querySelector('.error-message')) {
          element.appendChild(message);
          element.classList.add('error-message');
          emailConfirm.parentElement.appendChild(element);
        }
      } else {
        if (document.querySelector('.error-message')) {
          emailConfirm.parentElement.removeChild(document.querySelector('.error-message'));
        }
        form.submit();
      }
    });
  }
  
  window.onload = emailValidation;
  