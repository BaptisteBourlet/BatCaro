/* --------------------------- // mode hot content -------------------------- */

const hotQuestions = {
    q1: 'Nini, bois un coup mon pote !',
    q2: "hello",
    q3: "francis",
    q4: "yoooooo"
}

const hotGage = {
    g1: "Tu peux boire un coup Bébé Auré !",
    g2: "prie",
    g3: "a poil"
}

/* --------------------------- mode Poseyy content -------------------------- */

const fiestaQuestions = {
    q1: "Nini, bois un coup mon pote !",
    q2: "oui",
    q3: "yeaaah"
}

const fiestaGage = {
    g1: "Tu peux boire un coup Bébé Auré !",
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

let questionX
let dareX

/* ---------------------------- fct choix du mode --------------------------- */

$("#fiestaMod").on('click', function () {
    questionX = fiestaQuestionsList;
    dareX = fiestaGageList;
});

$("#hotMod").on('click', function () {
    questionX = hotQuestionsList;
    dareX = hotGageList;
});

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
            if (name.length>0)nameList.push(name);
            $('#enterPlayer').val('')
            $('.playerList').append("<p class='nameListe'>" + name + "</p>");
            e.preventDefault();
        });

        /* ------------------------------ fct trustBtn + error------------------------------ */

        $('#trustBtn').click(function () {
            $('.listDT').remove();

            if (questionX == undefined) {
                $('#showDT').append("<p class='listDT'>Vous n'avez pas choisi de mode bande de Niouk !</p>");
            } else {
                let x = getRandomInt(questionX[0].length);
                if (nameList.length > 0) {
                    let y = getRandomInt(nameList.length);
                    
                    $('#showDT').append("<p class='listDT'><strong>" + nameList[y] + "</strong> : " + questionX[0][x] + "</p>");
                    
                } else {
                    $('#showDT').append("<p class='listDT'>Y'a personne pour jouer !</p>");
                }
            }
        });

        $('#trustBtn').click(function(){
            $('.listDT').css('display','none');
            $('.listDT').fadeIn(1800);
        });

        /* ------------------------------- fct dareBtn + error------------------------------ */

        $('#dareBtn').click(function () {
            $('.listDT').remove();
            if (dareX == undefined) {
                $('#showDT').append("<p class='listDT'>Vous n'avez pas choisi de mode bande de Niouk !</p>");
            } else {
                let x = getRandomInt(dareX[0].length);
                if (nameList.length > 0) {
                    let y = getRandomInt(nameList.length);
                    $('#showDT').append("<p class='listDT'><strong>" + nameList[y] + "</strong> : " + dareX[0][x] + "</p>");
                } else {
                    $('#showDT').append("<p class='listDT'>Y'a personne pour jouer !</p>");
                }
            }

        });
        $('#dareBtn').click(function(){
            $('.listDT').css('display','none');
            $('.listDT').fadeIn(1800);
        });
    });
})(jQuery);
