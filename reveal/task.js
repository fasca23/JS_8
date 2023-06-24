let rev = document.querySelectorAll(".reveal");

rev.forEach(r => {
    document.addEventListener("scroll", () => {
    const {top, bottom} = r.getBoundingClientRect();

    // если низ ниже окна прокрутки
    if(bottom < 0){
        return false;
    }

    // если верх  
    if(top > window.innerHeight){
        return false;
    }

    r.classList.add("reveal_active");

    })
})