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
        var back = ["navy","gold","dodgerblue","red", "skyblue","green", "yellow", "purple", "orange", "black", "pink", "gray","yellowgreen","turquoise"];
        let nbr = -1;
        let nameList = [];
        $("#submit").click(function (e) {
            nbr += 1;
            var rand = back[nbr];
            
            var name = $('#enterPlayer').val();
            if (name.length > 0) nameList.push(name);
            $('#enterPlayer').val('');
            $('.playerList').append("<p class='nameListe'>" + name + "</p>");
            $('.playerList :last-child').css('color', rand);
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
            $('.listDT').fadeIn(2500);
        });

        /* ------------------------------ Bouton Jouer ------------------------------ */

        $('#anchor').on('click', function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').stop()
                .animate({ scrollTop: $(target).offset().top }, 1300);
        });

    });
})(jQuery);

/* ---------------------------- bouton play pause --------------------------- */

const vid = document.getElementById("mySong");
function playVid() { vid.play() };
function pauseVid() { vid.pause() };