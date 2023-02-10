
function switchTheme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
    document.body.style.transition = '.4s'

}

document.getElementById('switchBtn').addEventListener('click',switchTheme)