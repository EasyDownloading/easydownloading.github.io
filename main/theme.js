function darkMode(light) {
    var activeMode = document.querySelector("#darkmode span")
    var homeC = $('main');
    var sideB = $('#mainSidebar');
    var headerM = $('header#mainHeader');
    var footerM = $('footer');

    if (activeMode.innerHTML == "Light Mode") {

        activeMode.innerHTML = "Night Mode";
        $(light).css({ 'filter': 'brightness(25%)' })
        $("#darkmode i").css({'color':'#000'}) //apagado



        $('html').css({'background-color': '#111'});
        homeC.css({
            'background': '#ccc',
            'color': 'azure',
        }); //INSIDE FRAMES

        headerM.css({
                'background': '#eee',
            }) // INSIDE HEADER
        $('header#mainHeader #menuIcon div').css({ 'background': '#334' });
        $('header#mainHeader #logo').css({ 'color': '#E17', 'animation-duration': '2s' });
        $('header#mainHeader #mainMenu .menu button').css({ 'background': '#ddd', 'color': '#334' });
        $('header#mainHeader #mainMenu .menu a').css({ 'background': '#ddd', 'color': '#334' });
        $('header#mainHeader #mainMenu').css({ 'background': '#ddd' });
        $('header#mainHeader .menu nav.submenu a').css({ 'background': 'slategray' });
        $('header#mainHeader #social img').css({ 'filter': 'grayscale(0%)' });

        sideB.css({
            'background': 'linear-gradient(to bottom right, slateblue,slategray)',
            'color': 'azure',
        });

        footerM.css({  })


        $('#darkmode').css({ 'background-color': '#eee' });


} else {


        activeMode.innerHTML = "Light Mode";
        $(light).css({ 'filter': 'brightness(100%)' })
        $("#darkmode i").css({'color':'#FF0'}) //acesso


        $('html').css({'background-color': ''});
        homeC.css({
            'background': '',
            'color': '',
        })

        headerM.css({
                'background': '',
            })
            // INSIDE HEADER
        $('header #menuIcon div').css({ 'background': '' });
        $('header #logo').css({ 'color': '', 'animation-duration': '' });
        $('header #mainMenu .menu button').css({ 'background': '', 'color': '' });
        $('header #mainMenu .menu a').css({ 'background': '', 'color': '' });
        $('header #mainMenu').css({ 'background': '' });
        $('header .menu nav.submenu a').css({ 'background': '' });
        $('header #social img').css({ 'filter': '' });

        sideB.css({
            'background': '',
            'color': '',
        });

        footerM.css({ 'background': '' })

        $('#darkmode').css({ 'background-color': '' });
    }

    // Environment


}
