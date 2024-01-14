const scriptURL = 'https://script.google.com/macros/s/AKfycbybV8LOA_atr_I_X21JaVKNMc1Wq9ZXaPD1XDrCDwGau1z7JTeQESuF5kTocnX7sZPl/exec'

const form = document.forms['wedding-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})