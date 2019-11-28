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

    });
})(jQuery);


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
    g1 : "goodbye",
    g2 : "aurevoir",
    g3 : "badaboom"
}