
btn_persional = document.getElementById("btn-persional");
btn_social = document.getElementById("btn-social");

btn_social.addEventListener("click", function(){
    
    social = document.getElementById("social");

    if(social.classList.contains("active")){
        return;
    }

    current_active =  document.getElementsByClassName("active");
    current_active[0].classList.add("hide");
    document.getElementsByClassName("hide")[0].classList.remove("hide");
    document.getElementsByClassName("active")[0].classList.remove("active");
    

    social.classList.add("active");
});


btn_persional.addEventListener("click", function(){
    
    persional = document.getElementById("persional");

    if(persional.classList.contains("active")){
        return;
    }

    current_active =  document.getElementsByClassName("active");
    current_active[0].classList.add("hide");
    document.getElementsByClassName("hide")[0].classList.remove("hide");
    document.getElementsByClassName("active")[0].classList.remove("active");
    

    persional.classList.add("active");
});


let items = document.querySelectorAll('li');

items.forEach(li =>{
    li.addEventListener("click", function(e){
        document.getElementById("action").style.left = e.target.offsetLeft + "px";
        items.forEach(li_hide =>{
            li_hide.classList.remove('btn-active');
        })
        this.classList.add("btn-active");
    })
})
