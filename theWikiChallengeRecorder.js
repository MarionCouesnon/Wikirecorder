console.log("Still here?");

window.addEventListener("click", function(event) {
    handleWindowClick(event);
}, false);

function handleWindowClick(event){
  console.log(event);
   var origEl = event.target || event.srcElement;
    if(origEl.tagName === 'A'){
      console.log(event.explicitOriginalTarget.baseURI);
      console.log(event.explicitOriginalTarget.textContent);
      var baseURL = event.explicitOriginalTarget.baseURI;
      var textContent = event.explicitOriginalTarget.textContent;
      index+=1;
      history[index] = {
        url: baseURL,
        text: textContent
      }
      console.log(history);
      localStorage.setItem('WikiChallengeRecorderID', index);//à remplacer par 1 message à envoyer au background pour envoyer l'index//
      localStorage.setItem('WikiChallengeRecorder', JSON.stringify(history));//à remplacer par 1 message à envoyer au background pour envoyer l'history//
      alert("anchor link is clicked");
    }
    else if(origEl.parentNode.tagName === 'A'){
         alert("clicked inside anchor");
    }
}

var currentURL = window.location.valueOf().href;
var startingPoint;
var endingPoint;

///// MANCHE 1 ////
/* Inside the 1st game session, create 1 condition that start listening the user actions if the user reached the defined starting point (wikipedia URL)  */
startingPoint = 'https://fr.wikipedia.org/wiki/Cacaoyer';
endingPoint = 'https://fr.wikipedia.org/wiki/Unterseeboot';
if(currentURL == startingPoint) {
  // Envoyer un message au background script pour signifier le starting point;
}
else if (currentURL == endingPoint) {
  // Envoyer un message au background script pour signifier le ending point;
}
else {

}
