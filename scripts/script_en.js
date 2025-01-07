function screenVerif(evnt){
  console.log("Page chargé, js prêt")
  if (window.innerWidth<770){
    alert("𝗩𝗼𝘁𝗿𝗲 𝗳𝗲𝗻𝗲𝘁𝗿𝗲 𝗻'𝗲𝘀𝘁 𝗽𝗮𝘀 𝗮𝘀𝘀𝗲𝘇 𝗹𝗮𝗿𝗴𝗲. Essayez en paysage sur smartphone ou d'agrandir la page sur ordinateur \n𝗬𝗼𝘂𝗿 𝘄𝗶𝗻𝗱𝗼𝘄 𝗶𝘀 𝗻𝗼𝘁 𝘄𝗶𝗱𝗲 𝗲𝗻𝗼𝘂𝗴𝗵. Try landscape mode on smartphone or try to enlarge the page on computer" );
    return true;
    }
  }



function affichePopup(survolé){
  console.log(survolé.id);
  let maBulle = document.getElementById('infoBulle');
  maBulle.style.visibility = 'visible';
  posX=event.pageX+'px'; posY=event.pageY+'px';
  console.log(posX, posY)
  maBulle.style.left = posX;
  maBulle.style.top = posY;
  let textAMettre = "n/a"
  switch (survolé.id) {
    case 'catia':
      textAMettre="Software learned in class"
      break;
    case 'selfLearn':
      textAMettre="These projects led me to constantly learn by myself"
      break;
    case 'soif':
      textAMettre="I always want to learn and know more"
      break;
    case 'collab':
      textAMettre="The films and associative projects in which I participated taught me how to work with several people"
      break;
    case 'savoirVivre':
      textAMettre="I adapt easily to different profiles and I listen"
      break;
    case 'aisance':
      textAMettre="I am always willing when it is necessary to speak or defend a project"
      break;
    case 'planification':
      textAMettre="It is important to know how to allocate employees according to their area of excellence"
      break;
    case 'pratique':
        textAMettre="These skills were acquired through my personal projects, especially the experiences that could be described as \"DIY\""
        break;
    case 'logicielsPerso':
      textAMettre="I learned to use these software outside of school"
      break;
    case 'langages':
      textAMettre="I learned and practiced all these languages as part of my projects"
      break;
    case 'inge':
      textAMettre="The skills that my mechatronics courses allowed me to acquire"
      break;
    default:
      textAMettre="n/a";
  }
  maBulle.innerHTML = textAMettre;
}

function retirePopup(){
  var maBulle = document.getElementById('infoBulle');
  maBulle.style.visibility = 'hidden';
}

window.onload = screenVerif;

//Thibaut BOURGEAIS
