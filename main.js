function main () {
    // Import
    $('head').append('<script src="include.js"></script>');
    // include
    var allTags = document.getElementsByTagName("*");
    for (let z = 0; z < allTags.length; z++) {
        var theTag = allTags[z];
        elmnt = theTag.hasAttribute("include")
        if (elmnt) {
            var atrName=theTag.getAttribute('include');
            includes(theTag,atrName);
        }
    }
    // set theme
    var hourTheme = new Date().getHours();
    if(hourTheme >= 21 || hourTheme <= 6){
        setTimeout(darkMode, 0, '#light')
    }
    // set page 
    var pageID = sessionStorage.getItem('IDpage') || "home.html";
    setTimeout(loadPage, 500, pageID);

}

        

function menu_sidebar(icon) {
    icon.classList.toggle('close');
    let sbar = document.getElementById('mainSidebar');let container = document.getElementById('main');

    if (window.innerWidth > 800) { //DESKTOP

        if (sbar.style.width == "300px") {
                sbar.style.width = "0px";
                sbar.style.padding = "5px 0px";
                container.style.filter = "brightness(100%) blur(0px)";
                // container.style.marginLeft = '0px';   //-> Off-canvas turned off
            } else {
                sbar.style.width = "300px";
                sbar.style.padding = "5px";
                container.style.filter = "brightness(50%)blur(0px)";
                // container.style.marginLeft = '310px'; // -> Off-canvas turned off

        }

    } else { // MOBILE

        if (sbar.style.width == "100%") {
                sbar.style.width = "0px";
                sbar.style.padding = "5px 0px";
                container.style.filter = "blur(0px)brightness(100%)";
                // container.style.marginLeft = '0px';    -> Off-canvas turned off
            } else {
                sbar.style.width = "100%";
                sbar.style.padding = "5px";
                container.style.filter = "blur(2px)brightness(100%)";
                // container.style.marginLeft = '310px'; -> Off-canvas turned off

        }
    }
}
function sidebarClose() {
        var micon = document.getElementById('menuIcon');
        let sbar = document.getElementById('mainSidebar');let container = document.getElementById('main');

        if (micon.className == "close") {
            micon.classList.toggle('close');
        }
        sbar.style.width = "0px";
        sbar.style.padding = "5px 0px";
        container.style.filter = "blur(0px)brightness(100%)";
        // container.style.marginLeft = '0px';    -> Off-canvas turned off

}

function loadPage(IDP) {
            var cont = document.getElementById('mainContent');var titl = document.getElementById('mainContent').title;
            cont.src = IDP;
            sessionStorage.setItem('IDpage', IDP);
            window.reload();
}