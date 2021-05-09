const day= document.getElementById("day");
const night= document.getElementById("night");

night.addEventListener('click', ()=>{   
    document.body.style.background= "#252525";
    document.body.style.color= "white";
    night.style.display= "none";
    day.style.display= "block";
})
day.addEventListener('click', ()=>{   
    document.body.style.background= "white";
    document.body.style.color= "#252525";
    night.style.display= "block";
    day.style.display= "none";
})