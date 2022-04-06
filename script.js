let btn = document.getElementsByClassName("btn");
let slide = document.getElementById("slide");

btn[0].onclick=function(){
    slide.style.transform="translateX(0px)";
    for(i=0;i<5;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick=function(){
    slide.style.transform="translateX(-1200px)";
    for(i=0;i<5;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick=function(){
    slide.style.transform="translateX(-2400px)";
    for(i=0;i<5;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[3].onclick=function(){
    slide.style.transform="translateX(-3600px)";
    for(i=0;i<5;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}
btn[4].onclick=function(){
    slide.style.transform="translateX(-4800px)";
    for(i=0;i<5;i++){
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}