const imgs = document.querySelectorAll('img')
const navBtns = document.querySelectorAll('.navBtn')

const URL = 'https://dog.ceo/api/breeds/image/random'

const test = (e) => {
    console.log(e.target);
}

for(const navBtn of navBtns){
    navBtn.addEventListener('click', test)
}

for(const img of imgs){
    for(let i=0; i<imgs.length; i++){
        fetch(URL)
            .then(res => res.json())
            .then(data => img.setAttribute('src', data.message))
            .catch(err => console.error(err))
    }
}
