
let theme = document.getElementById("theme");
let changeTheme = document.getElementById("change");
let goTop = document.getElementById('top');
let navbar = document.getElementById('navbar');
let navLinks = document.querySelectorAll(".nav-item .nav-link");
let textBlack50 = document.querySelectorAll(".text-black-50");
// let activeAfter = document.querySelectorAll(".active::after");
console.log(textBlack50)
AOS.init();
changeTheme.onclick = function(){
    let lightTheme = 'css/main-light.css' ;
    let darkTheme = 'css/main-dark.css' ;
    if(theme.getAttribute('href') === lightTheme){
        theme.setAttribute('href' , darkTheme);
        for(let t = 0;t<textBlack50.length;t++){
            textBlack50[t].classList.add('text-white-50');
        }
    }else{
        theme.setAttribute('href' , lightTheme);
        for(let t = 0;t<textBlack50.length;t++){
            textBlack50[t].classList.remove('text-white-50');
        }
    }
};

goTop.onclick = ()=>{window.scrollTo(0,0)}
window.onscroll = function(){
    if(scrollY > 400){
        goTop.style.display = 'block';

        
    }else{
        goTop.style.display = 'none';

    }
    if(scrollY > 100){
        navbar.style.backgroundColor = 'white';
        // activeAfter.style.backgroundColor = '#1C1C1C'
        
        for(let i = 0 ; i< navLinks.length ; i++){
            navLinks[i].style.color = 'black';
        }
        document.querySelector('.navbar-brand').style.color = 'black';
    }else{
        navbar.style.backgroundColor = 'transparent';
        for(let i = 0 ; i< navLinks.length ; i++){
            navLinks[i].style.color = 'white';
        }
        document.querySelector('.navbar-brand').style.color = 'white';

    }
}



for( let i = 0 ; i < navLinks.length ; i++){
    navLinks[i].onclick = function(){
        for( let i = 0 ; i < navLinks.length ; i++){
            navLinks[i].classList.remove('active');
        }
        this.classList.add('active');
    }
}
// console.log(navLinks[1]);



// Skills
let skillsInfo = document.querySelector(".skills");


// console.log(skillsInfo);
let progress = document.querySelectorAll(".skill-progress")
for(let i=0;i< progress.length;i++){
    progressValue = progress[i].attributes['data-width'].value;
    progress[i].style.width = `${progressValue}%`;
    // console.log(progressValue);
}

// counter
 let counter = document.querySelectorAll('.counter')

function counting(item,end){
    let i = 1;
    let inter = setInterval(()=>{
        counter[item].innerHTML = i++;
        i > end && clearInterval(inter);
    },1)
}
counting(0,850);
counting(1,230);
counting(2,9450);
counting(3,780);   

// portfolio

let tabLinks = document.querySelectorAll('.nav .nav-item .nav-link');
let items = document.querySelectorAll('.items .all');
tabLinks.forEach((e)=>{
    e.onclick = function(){
        tabLinks.forEach((e)=>{
            e.classList.remove('active');
            this.classList.add('active');
            console.log(this.dataset.cat);
            for(let i = 0; i< items.length;i++){
                if(items[i].classList.contains(this.dataset.cat)){
                items[i].style.display = 'block';
            }
                else{
                    items[i].style.display = 'none';
                }
                console.log()
            }
        })
    // console.log(items[1].classList.contains('all'));


    }
})
// console.log(tabLinks);
// blog
let blogItem = document.querySelectorAll('.blog .owl');
let blogIndicators = document.querySelectorAll('.blog .indicators button');


blogIndicators.forEach((e)=>{
    
    let start =0;
    let end =3;
    for(let i=0; i<blogItem.length;i++){
        if(i>=start && i<end){
            blogItem[i].style.display = 'block';
        }else{
            blogItem[i].style.display = 'none';
    
        }
    }
    e.onclick = function(){
        
        if(this.id == '1'){
            start = 0;
            end = 3;
        }
        else if(this.id == '2'){
            start = 1;
            end = 4;
        }
        else if(this.id == '3'){
            start = 2;
            end = 5;
        }
        else if(this.id == '4'){
            start = 3;
            end = 6;
        }
        for(let i=0; i<blogItem.length;i++){
            if(i>=start && i<end){
                blogItem[i].style.display = 'block';
            }else{
                blogItem[i].style.display = 'none';
        
            }
        }
    }

})
