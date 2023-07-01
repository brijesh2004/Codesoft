setInterval(() => {
    setTimeout(() => {
      let x = document.getElementById("name").innerHTML = "HI";
      document.getElementById("name").style.color = "red";
    }, 500);
    setTimeout(() => {
      let x = document.getElementById("name").innerHTML = "HI I";
      document.getElementById("name").style.color = "yellow";
    }, 1000);
    setTimeout(() => {
      document.getElementById("name").innerHTML = "HI I AM";
      document.getElementById("name").style.color = "blue";
    }, 1500);
    setTimeout(() => {
      document.getElementById("name").innerHTML = "HI I AM BRIJESH";
      document.getElementById("name").style.color = "gray";
    }, 2000);
    setTimeout(() => {
      document.getElementById("name").innerHTML = "HI I AM BRIJESH SINGH";
      document.getElementById("name").style.color = "green";
    }, 2500);
    setTimeout(() => {
        document.getElementById("name").innerHTML = "HI I AM BRIJESH";
        document.getElementById("name").style.color = "gray";
      }, 3000);
      setTimeout(() => {
        document.getElementById("name").innerHTML = "HI I AM";
        document.getElementById("name").style.color = "blue";
      }, 3500);
      setTimeout(() => {
        document.getElementById("name").innerHTML = "HI I ";
        document.getElementById("name").style.color = "blue";
      }, 4000);
      setTimeout(() => {
        document.getElementById("name").innerHTML = "HI";
        document.getElementById("name").style.color = "blue";
      }, 4500);
  }, 5000);


let hero=document.getElementById("hero");
function Changehero(){
  hero.src="Images/hero2.jpg";
}
function ChangeAgain(){
  hero.src="Images/hero.jpg";
}

const body = document.getElementById("body");
const about = document.getElementById("about");
const education = document.getElementById("education");
const skill = document.getElementById("skills");
const skil = document.getElementById("skill");
const project = document.getElementById("project");
const contect = document.getElementById("contect");



function fun(){
  if(body.style.backgroundColor=="rgb(185, 171, 171)"){
    body.style.backgroundColor="rgb(1, 1, 41)";
  }
  else{
    body.style.backgroundColor="rgb(185, 171, 171)";
  }
  if(about.style.backgroundColor=="white"){
    about.style.backgroundColor="black";
    about.style.color="white";
    education.style.backgroundColor="black";
    education.style.color="white";
    skill.style.backgroundColor="black";
    skill.style.color="white";
    skil.style.color="white";
    project.style.backgroundColor="black";
    project.style.color="white";
    contect.style.backgroundColor="black";
    contect.style.color="white";
  }
  else{
    about.style.backgroundColor="white";
    about.style.color="black";
    education.style.backgroundColor="white";
    education.style.color="black";
    skill.style.backgroundColor="white";
    skill.style.color="black";
    skil.style.color="black";
    project.style.backgroundColor="white";
    project.style.color="black";
    contect.style.backgroundColor="white";
    contect.style.color="black";
  }

  
}