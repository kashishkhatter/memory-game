const cardArray=[ //array conatining objects of all cards 
    {
        name:'fries', //object of every item
        img:'images/fries.png' 
    },
    
    {
        name:'cheesburger',
        img:'images/cheeseburger.png'
    },

    {
        name:'hotdog',
        img:'images/hotdog.png'
    },

    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },

    {
        name:'milkshake',
        img:'images/milkshake.png'
    },

    {
        name:'pizza',
        img:'images/pizza.png'
    },
    
    {
        name:'fries', //repeat coz sab items twice
        img:'images/fries.png' 
    },
    
    {
        name:'cheesburger',
        img:'images/cheeseburger.png'
    },

    {
        name:'hotdog',
        img:'images/hotdog.png'
    },

    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },

    {
        name:'milkshake',
        img:'images/milkshake.png'
    },

    {
        name:'pizza',
        img:'images/pizza.png'
    }
    


];

cardArray.sort(function(){ //sort fun randomly shuffles the array 
    return 0.5-Math.random(); //random gives a val btw 0 to 1 and by sub it from 0.5 we get a no btw [-.5,.5] then sorting gives random rearrangement of array
})

const gridDisplay=document.querySelector('#grid') //pick the grid for applying fun
const resultDisplay=document.querySelector('#result') //displays score

let cardChosen=[] //to store the clicked and chosen cards
let cardsChosenIds=[] //to store ids of clicked cards
let cardsWon=[] //storecards matched

function createBoard(){ //to create board containing all cards
    for(let i=0;i<12;i++){
        const card=document.createElement('img')  //create card element (image)in the board
        card.setAttribute('src','images/blank.png') //jo card create kia ha initially attach blank img to it(palatna sa phla)
        card.setAttribute('data-id',i) //to identify every card seperately
        card.addEventListener('click',flipcard)//on clicking the card flipcard fun is called
        gridDisplay.append(card) //jo card ha add to grid
    }
}


function checkMatch(){ //to check if two cards matcg
    const cards= document.querySelectorAll('img')  //select images of cards
 
    
    if(cardChosen[0]==cardChosen[1]){ //agr dono same card chosen
        alert('You found a match!')
        cards[cardsChosenIds[0]].setAttribute('src','images/white.png') //dono ki img ko white krdo
        cards[cardsChosenIds[1]].setAttribute('src','images/white.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipcard) //ab ispr click krna sa kuchni hoga
        cards[cardsChosenIds[1]].removeEventListener('click',flipcard)
        cardsWon.push(cardChosen) //won vala array ma add krdo
    }
    else{ //agr diff chosen
        cards[cardsChosenIds[0]].setAttribute('src','images/blank.png') //img vapis blank (grid) krdo
        cards[cardsChosenIds[1]].setAttribute('src','images/blank.png') 
      
    }
   cardChosen=[]  //reset after every try coz 2 hi compare krna at a time
  cardsChosenIds=[]
   resultDisplay.textContent=cardsWon.length //score displays abtk kitna paisa match hogya(cardswon conatins matched cards so uski length=score)
  if(cardsWon.length==(cardArray.length/2)){
    resultDisplay.innerHTML='Congratulations! You found them all!' //agr sara match hogya to result ma ye display krdo
}
}
function flipcard(){ //fun to flip card when clicked
 let cardId=this.getAttribute('data-id') //to get unique id of the card clicked(this implies jo clicked)
 cardChosen.push(cardArray[cardId].name) //jo clicked ha us card ki id pr array ma jo item name ha vo chosen cards ma daldo
 cardsChosenIds.push(cardId) //add to array conatining ids of chosen cards
 this.setAttribute('src',cardArray[cardId].img) //us id pr jo img ha array ha vo display krdo on click
 if(cardChosen.length===2){ //agr 2 cards choose hogya ha so comapre krlo
    setTimeout(checkMatch,1500) //after 500ms check krke palat do
 }
}
createBoard()


