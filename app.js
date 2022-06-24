const alert = document.querySelector(".alert")
document.addEventListener('scroll', (e) => {

    let scrollPosition = window.scrollY;
 
    console.log(Math.floor(scrollPosition));
 
    let ScrollValue = Math.floor(scrollPosition)
 
    // ScrollValue < 90 ? console.log("ishladi") : console.log("ishlamadi >>>");
    if(ScrollValue > 832 && ScrollValue < 1432){
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 2-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 1664 && ScrollValue < 2264) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 3-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 2496 && ScrollValue < 3096) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 4-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 3328 && ScrollValue < 3928) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 5-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 4160 && ScrollValue < 4760) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 6-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 4992 && ScrollValue < 5592) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 7-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 5824 && ScrollValue < 6424) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 8-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 6656 && ScrollValue < 7256) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 9-sahifaga o'tdingiz"
    }
    else if (ScrollValue > 7488 && ScrollValue < 8088) {
        alert.style.transform = "translateX(0)"
        p.innerHTML = "Siz 10-sahifaga o'tdingiz"
    }
     else {
        alert.style.transform = "translateX(-200px)"
    }
 });