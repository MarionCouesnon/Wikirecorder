console.log("hellpppp");

if(!StorageArea.get('WikiChallengeRecorder')) {  // background
    StorageArea.set('WikiChallengeRecorder', ''); // background
}

var index = localStorage.getItem('WikiChallengeRecorderID') || 0; // background
var history = localStorage.getItem('WikiChallengeRecorder'); // background

//1 fonction de récupération du message index//
//1 fonction de récupération du message history//
//1 fonction de récupération du message starting point//
//1 fonction de récupération du message ending point//

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
