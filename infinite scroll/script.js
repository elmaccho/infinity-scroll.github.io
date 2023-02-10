const imgs = document.querySelectorAll('img')
const navBtns = document.querySelectorAll('.navBtn')
const mainGallery = document.querySelector('.mainGallery')
const search = document.querySelector('.search')
const watch = document.querySelector('.watch')
const navBox = document.querySelector('.navBox')

const postBox = document.createElement('div')
const imgBox = document.createElement('img')
const pBox = document.createElement('p')

postBox.classList.add('postBox')

const URL = 'https://dog.ceo/api/breeds/image/random'


const watchClick = () => {
    navBox.style.left = "72%"
    navBox.style.width = "60px"
}

const searchClick = () => {
    navBox.style.left = "50%"
    navBox.style.width = "67px"
}




for(const img of imgs){
    for(let i=0; i<imgs.length; i++){
        fetch(URL)
            .then(res => res.json())
            .then(data => img.setAttribute('src', data.message))
            .catch(err => console.error(err))
    }
}

// const createBox = () => {
//     const boxDiv = document.createElement('div')
//     const boxSett = boxDiv.createElement('div')
//     const boxImg = document.createElement('img')
//     const boxP = document.createElement('p')
//     const boxI = document.createElement('i')

    
//     boxDiv.classList.add('postBox')
//     boxSett.classList.add('boxSett')
//     boxI.classList.add('fa-solid fa-ellipsis')

//     boxDiv.append(boxImg)
//     boxSett.append(boxP)
//     boxSett.append(boxI)

// }


const createPost = () => {
    mainGallery.append(postBox)
    postBox.append(imgBox)

}


const createImage = () => {
    for(const img of imgs){
        for(let i=0; i<imgs.length; i++){
            fetch(URL)
                .then(res => res.json())
                .then(data => img.setAttribute('src', data.message))
                .catch(err => console.error(err))
        }
    }
}

window.addEventListener('scroll', () => {
	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
	console.log( { scrollTop, scrollHeight, clientHeight });
	
	if(clientHeight + scrollTop >= scrollHeight - 5) {
		console.log('nowe posty');
        createPost()
	}
})



watch.addEventListener('click', watchClick)
search.addEventListener('click', searchClick)