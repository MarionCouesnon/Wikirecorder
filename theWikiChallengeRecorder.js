// /* First, create a function that :
// - Listen to user clicks on hyperlinks*/
// //console.log("Wikichallenge recorder starts now!");
// var index = parseInt(localStorage.getItem('WikiChallengeRecorderID')) || 0;
// var history = JSON.parse(localStorage.getItem('WikiChallengeRecorder'));
//
// window.addEventListener("click", function(event) {
//     handleWindowClick(event);
// }, false);
//
// //1 get item, si vide, ajouter un objet vide
// //2 ajouter l'url a history dans l'objet
// //3 set item pour le sauver
//
// function handleWindowClick(event){
//   console.log(event);
//    var origEl = event.target || event.srcElement;
//     if(origEl.tagName === 'A'){
//       console.log(event.explicitOriginalTarget.baseURI);
//       console.log(event.explicitOriginalTarget.textContent);
//       var baseURL = event.explicitOriginalTarget.baseURI;
//       var textContent = event.explicitOriginalTarget.textContent;
//       index+=1;
//       history[index] = {
//         url: baseURL,
//         text: textContent
//       }
//       console.log(history);
//       //debugger;
//       localStorage.setItem('WikiChallengeRecorderID', index);
//       localStorage.setItem('WikiChallengeRecorder', JSON.stringify(history));
//       //localStorage.setItem('WikiChallengeRecorder', '{"history" : ["aljdfalsdlfaskjdf"]}');
//       alert("anchor link is clicked");
//     }
//     else if(origEl.parentNode.tagName === 'A'){
//          alert("clicked inside anchor");
//     }
// }

/* Then, create a function for the global party */

/* Inside, create 3 functions for each game session */

/* Also, declare a variable for StartingPoint and another for EndingPoint */
var currentURL = window.location.pathname;
var startingPoint;
var endingPoint;

///// MANCHE 1 ////
/* Inside the 1st game session, create 1 condition that start listening the user actions if the user reached the defined starting point (wikipedia URL)  */
startingPoint = 'https://fr.wikipedia.org/wiki/Cacaoyer';
endingPoint = 'https://fr.wikipedia.org/wiki/Unterseeboot';
while (currentURL == startingPoint) {
    alert("You're on the right track!");
  /* Trigger the recording session */
  
  /* Inside the 1st game session, create 1 condition that stop listening the user actions if the user reached the defined ending point (wikipedia URL)  */
  if (currentURL == endingPoint) {
    /* Stop the recording session */
    /* Generate pdf */
  }
}
