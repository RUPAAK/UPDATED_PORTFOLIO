const day= document.getElementById("day");
const night= document.getElementById("night");
const seemore= document.querySelector('.seemore')
const hiddenProjects= document.querySelector('.hidden_projects')
const form= document.querySelector('form')
const input = document.querySelectorAll('input')

hiddenProjects.style.height= '0px'


//prevent file submition twice on reload
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}


night.addEventListener('click', ()=>{   
    document.body.style.background= "#252525";
    document.body.style.color= "white";
    input.color= "black"
    form.style.background= "rgb(99, 97,  97)"
    night.style.display= "none";
    day.style.display= "block";
})
day.addEventListener('click', ()=>{   
    document.body.style.background= "white";
    document.body.style.color= "#252525";
    form.style.background= "rgb(0, 0, 0))"
    night.style.display= "block";
    day.style.display= "none";
})

seemore.addEventListener('click', ()=>{
    if(hiddenProjects.style.height== '0px'){
        hiddenProjects.style.height= 'auto'
        seemore.textContent= "Hide..."
    }else{
        hiddenProjects.style.height= '0px'
        seemore.textContent= "See More..."
    }
})

form.addEventListener('submit', ()=>[
    alert('Recieved Your Message. Will Reply You Soon')
])