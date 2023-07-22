// main varables
// let theInput = document.querySelector(".get-repos input");
// let getBut = document.querySelector(".get-button");
// let showData = document.querySelector(".data-show");

// getBut.onclick = function(){
//     getRepos();
// }

// function getRepos(){
//     if(theInput.value == ""){
//         showData.innerHTML = `<span> pleace write github userName</span>`
//     }
//     else{
//         fetch('https://api.github.com/users/ElzeroWebSchool/repos')
//         .then(response => response.json())
//         .then(repositories => {
//             showData.innerHTML = '';

//             repositories.forEach(repo => {
//                 // console.log(repo.name);

//                 let mainDiv = document.createElement('div');
//                 let url = document.createElement('a');
//                 let textUrl = document.createTextNode('visits');

//                 url.appendChild(textUrl);
//                 mainDiv.appendChild(url);
//                 url.href = `https://github.com/users/ElzeroWebSchool/${repo.name}`;
//                 let text = document.createTextNode(repo.name);

//                 mainDiv.appendChild(text);

//                 showData.appendChild(mainDiv);
//             });
//         });
//     }
// }
// start hangemane
let letters = "abcdefghijklmnopqrstuvwxyz";

// get letters to array

let arrLetter = Array.from(letters);

// select letters contianer

let letterContainer = document.querySelector(".letters");
// loop for array
arrLetter.forEach(letter => {
    let span = document.createElement('span');

    let textLetter = document.createTextNode(letter);

    span.appendChild(textLetter);

    span.className = "letter-box";

    letterContainer.appendChild(span);
});

// object of words + category

const words = {
    programming : ["php","javascript","go","scala","fortran","r","mysql","python"],
    movies : ["prestige","Inception","parasite","Interstellar","whiplash","Memento","Coco","Up"],
    people : ["Albert Einstein","Hitchcock","Alexander","Cleopatra","Mahatma Ghandi"],
    countries : ["Syria","Palestine","Yemen","Egypt","Bahrain","Qatar"]

}

// Get Random property

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomٍValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueValue = randomPropValue[randomPropNumber];
// console.log(randomValueValue);

// Get span category

document.querySelector(".game-info .category span").innerHTML = randomPropName;

// create letters-guess

let letters_guessContianer = document.querySelector(".letters-guess");

let letterandSpace = Array.from(randomValueValue);

letterandSpace.forEach(letter => {
    let spanEpty = document.createElement('span');

    if(letter === ' '){
        spanEpty.className = "with-space";

    }

    letters_guessContianer.appendChild(spanEpty);
});


// select guess span
let guessSpan = document.querySelectorAll(".letters-guess span");
// set wrong Attempts
let wrongAttempts = 0;
// select the draw element
let theDraw = document.querySelector(".hangman-draw");


// Handle clicking onletters
document.addEventListener("click",(e) => {
    // set the chose status
    let theStatus = false;
    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked");
        // successGame();
        let clickedLetter = e.target.innerHTML.toLowerCase();
        if(clickedLetter === ""){
            document.write = "fjaslkjl"
        }
        
        let changeword = Array.from(randomValueValue.toLowerCase());
        changeword.forEach((wordList,indexLetter) => {
            if(clickedLetter == wordList){
                theStatus = true;
                // loop for all guess letters
                guessSpan.forEach((span,indexSpan)=>{
                    if(indexLetter === indexSpan){
                        span.innerHTML = clickedLetter;
                       
                      
                    }
                })
            
            }
        });
        
        // if Letters is wrong
        if(theStatus !== true){
            // increase the wrong Attempts
            wrongAttempts++;
            // Add Class wrong on the draw Element
            theDraw.classList.add( `wrong-${wrongAttempts}`);

            // play fail sounds
            document.getElementById("fail").play();
            if(wrongAttempts === 8){

                endGame();
              
            }
        }
        
        else{
             // play success sounds
             document.getElementById("success").play();
        }
    }

});

// if(clickedLetter !== ""){
//     successGame();
//     console.log("yes");
// }
function endGame(){
  
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: `Game over, the word Is <span class = "yes">${randomValueValue}</span><br>do you whant try agin ?`,
        showConfirmButton: false,
        // timer: 1500
      
        footer: '<a href="index.html">Try agin?</a>',
    })
}

function successGame(){
  
    Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: `Game over, the word Is <span class = "yes">${randomValueValue}</span><br>do you whant try agin ?`,
        showConfirmButton: false,
        // timer: 1500
      
        footer: '<a href="index.html">Try agin?</a>',
    })
}