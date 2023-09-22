const scriptURL = 'https://script.google.com/macros/s/AKfycbzMIM9AP3I44MZWsDKDngArBH0Qf1TctJJ6RQpr_E_Qh1rpGQp6iSovDNOGGWj-dTy2/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        
        form.addEventListener('submit', e => {
e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "*Successfully submitted!"
            setTimeout(function (){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))})