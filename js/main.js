const actors = document.querySelector('#actors'),
creators = document.querySelector('#creators'),
cadrsActors = document.querySelector('.cadrs-actors'),
cadrsCreators = document.querySelector('.cadrs-creators');

const openCreators = () => {
    actors.classList.remove('tabs-active');
    creators.classList.add('tabs-active');
    cadrsActors.classList.remove('is-active');
    cadrsCreators.classList.add('is-active');
}, 
openActors = () => {
    creators.classList.remove('tabs-active');
    actors.classList.add('tabs-active');
    cadrsCreators.classList.remove('is-active');
    cadrsActors.classList.add('is-active');
};

document.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.closest('#actors')) {
        openActors();
    } else if (event.target.closest('#creators')) {
        openCreators();
    }
})

// creators.addEventListener('click', openCreators);
// autors.addEventListener('click', openActors);
