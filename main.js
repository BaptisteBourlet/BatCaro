// mode hot content
const hotQuestions = {
    q1: 'coucou',
    q2: "hello",
    q3: "francis",
    q4: "yoooooo"
}

const hotGage = {
    g1: "bois",
    g2: "prie",
    g3: "a poil"
}

//mode Poseyy content
const fiestaQuestions = {
    q1: "yes",
    q2: "oui",
    q3: "yeaaah"
}

const fiestaGage = {
    g1: "bois",
    g2: "aurevoir",
    g3: "badaboom"
}

let hotQuestionsList = [];
hotQuestionsList.push(Object.values(hotQuestions));

let hotGageList = [];
hotGageList.push(Object.values(hotGage));

let fiestaQuestionsList = [];
fiestaQuestionsList.push(Object.values(fiestaQuestions));

let fiestaGageList = [];
fiestaGageList.push(Object.values(fiestaGage));

/* ---------------------------- fct randomNumber ---------------------------- */

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


(function ($) {
    $(document).ready(function () {

        let nameList = [];

/* --------------------- fct inscription player in form --------------------- */

        $("#submit").click(function (e) {
            var name = $('#enterPlayer').val();
            nameList.push(name);
            $('#enterPlayer').val('');
            $('.playerList').append("<p class='nameListe'>" + name + "</p>");
            e.preventDefault();
        });

/* ------------------------------ fct trustBtn ------------------------------ */

        $('#trustBtn').click(function () {
            $('.listDT').remove();
            let x = getRandomInt(hotQuestionsList[0].length);

            $('#showDT').append("<p class='listDT'>" + hotQuestionsList[0][x] + "</p>");

        });

/* ------------------------------- fct dareBtn ------------------------------ */

        $('#dareBtn').click(function () {
            $('.listDT').remove();
            let x = getRandomInt(hotGageList[0].length);

            $('#showDT').append("<p class='listDT'>" + hotGageList[0][x] + "</p>");
        });
    });
})(jQuery);
