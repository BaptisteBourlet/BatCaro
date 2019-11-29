// mode hot content
const hotQuestions = {
    q1 : 'coucou',
    q2 : "hello",
    q3 : "francis",
    q4 : "yoooooo"
}

const hotGage = {
    g1 : "bois",
    g2 : "prie",
    g3 : "a poil"
}

//mode Poseyy content

const fiestaQuestions = {
    q1 : "yes",
    q2 : "oui",
    q3 : "yeaaah"
}

const fiestaGage = {
    g1 : "bois",
    g2 : "aurevoir",
    g3 : "badaboom"
}

const hotQuestionsList = []
hotQuestionsList.push(Object.values(hotQuestions));

const hotGageList = []
hotGageList.push(Object.values(hotGage));

const fiestaQuestionsList = []
fiestaQuestionsList.push(Object.values(fiestaQuestions));

const fiestaGageList = []
fiestaGageList.push(Object.values(fiestaGage));



(function ($) {
    $(document).ready(function () {
    
        let nameList = []
        $("#submit").click(function(e){
            var name = $('#enterPlayer').val();
            nameList.push(name)
            $('#enterPlayer').val('');
            $('.playerList').append("<p class='nameListe'>" + name + "</p>");
            e.preventDefault();
        });
        

        $('#trustBtn').click(function(){
            
        });
    });
})(jQuery);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
