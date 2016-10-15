if(!localStorage.getItem('WikiChallengeRecorder')) {
  localStorage.setItem('WikiChallengeRecorder', '');
}

var index = parseInt(localStorage.getItem('WikiChallengeRecorderID')) || 0;
var history = JSON.parse(localStorage.getItem('WikiChallengeRecorder'));

window.test = "ok";
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
      localStorage.setItem('WikiChallengeRecorderID', index);
      localStorage.setItem('WikiChallengeRecorder', JSON.stringify(history));
      alert("anchor link is clicked");
    }
    else if(origEl.parentNode.tagName === 'A'){
         alert("clicked inside anchor");
    }
}

function generatePDF() {
  var monpdf = new jsPDF();
  var content = parseJSON(localStorage.getItem("WikiChallengeRecorder"));
  var contentArray = [];
  content.map(function(entry) {
    contentArray.push(entry.url + " " + entry.text);
  });

  monpdf.text(contentArray);
  monpdf.save(test.pdf);
}

var currentURL = window.location.valueOf().href;
var startingPoint;
var endingPoint;

///// MANCHE 1 ////
/* Inside the 1st game session, create 1 condition that start listening the user actions if the user reached the defined starting point (wikipedia URL)  */
startingPoint = 'https://fr.wikipedia.org/wiki/Cacaoyer';
endingPoint = 'https://fr.wikipedia.org/wiki/Unterseeboot';
if(currentURL == startingPoint) {
  //localStorage.setItem('step', '0');
}
else if (currentURL == endingPoint) {
  /* Stop the recording session */

}
else {

}
