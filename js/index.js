let openSideMenu = document.querySelector(".side-menu__button--hamburguer");

openSideMenu.addEventListener("click",()=>{
    let sideMenu = document.querySelector(".side-menu");
    let btnimg = openSideMenu.querySelector(".side-menu__icon");
    
    if(sideMenu.classList.contains("closed") ){
        sideMenu.classList.remove("closed");
        btnimg.src = "./assets/open-menu.svg"
    }else{
        sideMenu.classList.add("closed");
        btnimg.src = "./assets/closed-menu.svg";
    }
});