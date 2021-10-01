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

    document.querySelectorAll(".item__image").forEach(img => {
    img.addEventListener("dblclick",()=>{
        let like = img.previousElementSibling;
        if(like.classList.contains("item__like")){
            if(like.classList.contains("hidden")){
                like.classList.remove("hidden")
            }else{
                like.classList.add("hidden")
            }
        }

    });
    
    img.addEventListener("click",()=>{
        let modal = document.querySelector(".modal");

        if(modal.classList.contains("hidden")){
            modal.classList.remove("hidden")
            modal.querySelector(".modal__image").src=img.src;
        }else{
            modal.classList.add("hidden")
            modal.querySelector(".modal__image").src="";
        }
        
     
    }
    )
});


   