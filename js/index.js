let openSideMenu = document.querySelector(".side-menu__button--hamburguer");
let modal = document.querySelector(".modal");
let closeModal = modal.querySelector(".close");
let modalImg = modal.querySelector(".modal__image");
let modalLike = modal.querySelector(".modal__like");
let arrowNext = modal.querySelector(".next");
let arrowBack = modal.querySelector(".previous");
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
            updateModal(img);
              
        }


    function updateModal(img){
         modalImg.src = img.src
         if(isLiked(img)){
         modalLike.classList.remove("hidden")     
    }else{
        modalLike.classList.add("hidden");
       
      }
      selectedImage = img;
      handleArrow(img);
    }

    function isLiked(img){
        let likeImg = img.previousElementSibling;
        if(likeImg.classList.contains("item__like")){
            if(likeImg.classList.contains("hidden")){
                return false;
            }else{
                return true;
            }


        };
        
    }
    

    closeModal.addEventListener("click",()=>{
        modal.classList.add("hidden")
        modal.querySelector(".modal__image").src="";
    })



    modalImg.addEventListener("dblclick",()=>{
        likeHandler(selectedImage);
        if(modalLike.classList.contains("hidden")){
            modalLike.classList.remove("hidden")
        }else{
            modalLike.classList.add("hidden")
        }
        
    })

    arrowBack.addEventListener("click",()=>{
        let previousCard = selectedImage.parentNode.previousElementSibling;
        let previousImg = previousCard.querySelector(".item__image");
        updateModal(previousImg);
    })

    
    arrowNext.addEventListener("click",()=>{
        let nextCard = selectedImage.parentNode.nextElementSibling;
        let nextImg = nextCard.querySelector(".item__image");
        updateModal(nextImg);
    })
    
    function handleArrow(img){
        let cards = img.parentNode;

        if(cards.previousElementSibling == null){
            arrowBack.style.display = "none"
        }else{
            arrowBack.style.display = "block"
        }

        if(cards.nextElementSibling == null){
            arrowNext.style.display = "none"
        }else{
            arrowNext.style.display = "block"
        }
    }

 
