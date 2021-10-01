let openSideMenu = document.querySelector(".side-menu__button--hamburguer");
let modal = document.querySelector(".modal");
let closeModal = modal.querySelector(".close");
let modalImg = modal.querySelector(".modal__image");
let selectedImage = null;

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
    let clickCounter=0
    img.addEventListener("click",()=>{
        clickCounter++;
        if(clickCounter === 1){
            clickerTime = setTimeout(()=>{
                clickCounter = 0;
                openModal(img);
            },400);
        }else if(clickCounter===2){
            clearTimeout(clickerTime)
            clickCounter = 0
            likeHandler(img);
        }
   
    });
});

    function likeHandler(img){
    let like = img.previousElementSibling;
    if(like.classList.contains("item__like")){
        if(like.classList.contains("hidden")){
            like.classList.remove("hidden")
        }else{
            like.classList.add("hidden")
        }
    }
}

    function openModal(img){
            modal.classList.remove("hidden")
            modal.querySelector(".modal__image").src=img.src;   
        }



    

    closeModal.addEventListener("click",()=>{
        modal.classList.add("hidden")
        modal.querySelector(".modal__image").src="";
    })



    modalImg.addEventListener("dblclick",()=>{
        likeHandler()
    })

 