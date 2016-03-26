(function () {


    "use strict";
    // Instantiate new xhr object
    var dataFile = "scripts/app.json";
    var request = new XMLHttpRequest();
    request.open('GET', dataFile, true);
    request.addEventListener('readystatechange', function () {
        // wait for file to finish loading
        if (request.readyState === 4) {
            var paragraph = {};

            // read in the json object
            paragraph = JSON.parse(request.responseText);


            // declare local paragraph array container
            var paragraphArray = [];

            // read in the paragraphs array from the json object
            paragraphArray = paragraph.Paragraphs;

            //store
            var paragraphArrayLength = paragraphArray.length;
            //loop
            for (var number = 0; number < paragraphArrayLength; number++) {
                var paragraph = document.getElementById('Paragraph1' + 'Paragraph2' + (number + 1));
                Paragraphs.Paragraph1.innerHTML = paragraphArray[number];
                paragraphs.Paragraph2.innerHTML = paragraphArray[number];
            }
        }
    });
    request.send();

})();