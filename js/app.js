document.addEventListener('DOMContentLoaded',() => {
    let design = document.querySelector('#design');
    let topFront = design.querySelector(".front");
    let ramka = design.querySelector(".ramka");
    let delta = 0

    console.log('aa');

    design.addEventListener('mousemove',(e) => {
        delta = (e.clientX - window.innerWidth / 2) * 0.5

        ramka.style.left = e.clientX + delta + 'px'
        topFront.style.width = e.clientX + delta + 'px'
    })
})