const navShow = () => {
    const burger = document.querySelector ('#kontrol');
    const nav = document.querySelector ('.nav-links');

    burger.addEventListener ('click', ()=>{
        navClassList.toggle('#kontrol');
    });
}
navShow();