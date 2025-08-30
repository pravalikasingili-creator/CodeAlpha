const scriptURL = 'https://script.google.com/macros/s/AKfycbz5IN-'
'p_gmCexqAXi48NEZXzGKYn5BGrMTBv8-FXCG-s6GIE8IRXCoGMSyAsAeCWMJK/exec;'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById("msg")
 form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form) })
 .then(response => {
 msg.innerHTML = "Message sent successfully..."
 setTimeout(function () {
 msg.innerHTML = ""
 }, 3000)
 form.reset()
 })
 .catch(error => console.error('Error!', error.message))
})