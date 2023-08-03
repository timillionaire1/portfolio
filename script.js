const myButton=document.getElementById('button');
        const myOverlay2=document.getElementById('overlay2');
        myButton.onclick=function(){
         myOverlay2.style.transform += 'rotate(90deg)'
        }
/*var circle = document.getElementById('circle');
var myRound=document.getElementsByClassName('fa-circle');
myDetail1 = document.getElementById('#section1');
myDetail2 = document.getElementById('#team-head');
//console.log(myRound[0])
myRound.forEach(n=>n.addEventListener('click', function(){
    if(myRound[0]){
        console.log('hi');
        myDetail1.style.opacity='0';
        myDetail2.style.opacity='1';
    }else{
        console.log('wow')
    }
}))
for (let i=0; i<myRound.length; i++){
    myRound[i].onclick=function(){
        if(myRound[0]){
            console.log('hi');
            myDetail1.style.opacity='0';
            myDetail2.style.opacity='1';
        }else{
            console.log('wow')
        }  
    }
}*/
let section3= document.querySelector('.section3')
let teamHead = document.getElementById('team-head');
let contact = document.querySelector('.section3 div a');
//console.log(contact)
contact.onclick=function(){
    section3.style.display='none'
    teamHead.style.display='block'
}
const caption2=document.getElementById('caption2');
caption2.onclick=function(){
    myOverlay2.style.transform += 'rotate(90deg)';
}
let faTimes= document.querySelector('.fa-times');
let navSection= document.querySelector('.nav-bar ul')
faTimes.onclick=function() {
    navSection.style.display='none';
}
let faBars= document.querySelector('.fa-bars');
faBars.onclick=function(){
    navSection.style.display='block';
}