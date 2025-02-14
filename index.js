



(function main(){
    const header = document.querySelector("header");
    

    window.addEventListener("scroll", () =>{
        const scrolled = 'scrolled';
        if(window.scrollY > 50){
            header.classList.add(scrolled);
        }else{
            header.classList.remove(scrolled);
        }
    })
    
}());