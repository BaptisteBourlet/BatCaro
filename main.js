/* ---------------------------- fct randomNumber ---------------------------- */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

/* --------------------------------- jQuery --------------------------------- */

(function ($) {
    $(document).ready(function () {

        /* ------------------------- recup des données json fiesta Mode------------------------- */

        let questionX
        let dareX
        $("#fiestaMod").on('click', function succesfct() {
            $.ajax({
                url: 'data.json',
                dataType: "json",
                type: "get",
                success: showContentFiesta,
                error: function (err) {
                    if (err.status == 404) {
                        console.log(err + 'il y a une erreur');
                        $('div').html('errooooor');
                    }
                }
            });
            function showContentFiesta(result) {
                questionX = result.fiestaQuestions;
                dareX = result.fiestaGage;
            };
        });

        /* --------------------- recup des données json mode hot -------------------- */

        $("#hotMod").on('click', function succesfct() {
            $.ajax({
                url: 'data.json',
                dataType: "json",
                type: "get",
                success: showContentHot,
                error: function (err) {
                    if (err.status == 404) {
                        console.log(err + 'il y a une erreur');
                        $('div').html('errooooor');
                    }
                }
            });
            function showContentHot(result) {
                questionX = result.hotQuestions;
                dareX = result.hotGage;
            };
        });

        /* --------------------- fct inscription player in form --------------------- */

        let nameList = [];
        $("#submit").click(function (e) {
            var name = $('#enterPlayer').val();
            if (name.length > 0) nameList.push(name);
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
                let x = getRandomInt(questionX.length);
                if (nameList.length > 0) {
                    let y = getRandomInt(nameList.length);

                    $('#showDT').append("<p class='listDT'><strong>" + nameList[y] + "</strong> : " + questionX[x] + "</p>");

                } else {
                    $('#showDT').append("<p class='listDT'>Y'a personne pour jouer !</p>");
                }
            }
        });

        $('#trustBtn').click(function () {
            $('.listDT').css('display', 'none');
            $('.listDT').fadeIn(1800);
        });

        /* ------------------------------- fct dareBtn + error------------------------------ */

        $('#dareBtn').click(function () {
            $('.listDT').remove();

            if (dareX == undefined) {
                $('#showDT').append("<p class='listDT'>Vous n'avez pas choisi de mode bande de Niouk !</p>");
            } else {
                let x = getRandomInt(dareX.length);
                if (nameList.length > 0) {
                    let y = getRandomInt(nameList.length);
                    $('#showDT').append("<p class='listDT'><strong>" + nameList[y] + "</strong> : " + dareX[x] + "</p>");
                } else {
                    $('#showDT').append("<p class='listDT'>Y'a personne pour jouer !</p>");
                }
            }
        });
        $('#dareBtn').click(function () {
            $('.listDT').css('display', 'none');
            $('.listDT').fadeIn(1800);
        });
    });
})(jQuery);