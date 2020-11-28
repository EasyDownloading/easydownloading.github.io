var loadHeader = `
    <header id='mainHeader'>
    <!--MenuIcon--> 
        <span id="menuIcon" onclick="menu_sidebar(this)"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div></span>
        <!--Logo-->
        <h1 id="logo"><a href='#' target='_self' onclick="loadPage('main.html')">
            EasyDownloading</a>
        </h1>
        <!-- Main Navbar -->
        <nav id="mainMenu">
            <div class="menu"><a href="#home" onclick="loadPage('main.html')">Home</a>
            </div>
            <div class="menu mdrop"><a href="#reference" onclick="loadPage('ref.html')">Referencias</a><input class="Obtn" type="button" name="OpenMenu">
                <nav class="submenu">
                    <a href="page/pes6.html">PES6</a>
                    <a href="">outros</a>
                </nav>
            </div>
            <div class="menu"><a href="#music" onclick="loadPage('musics')">Musicas</a>
            </div>
            <div class="menu mdrop"><button onclick="loadPage('page/examples.html')">Programas</button><input class="Obtn" type="button" name="Mais">
                <nav class="submenu">
                    <a href="#" onclick="loadPage('page/slide.html')">Slide</a>
            </div>
            <div class="menu"><button onclick="loadPage('about.html')">Sobre Nós</button>
            </div>
        </nav>
        <!-- Social -->
        <div id="social">
            <a href="https://web.facebook.com/groups/easydown.pes6" target="_blank" title="Nosso grupo no Facebook">
                <i class="fab fa-facebook-square" style="color: #374480"></i>
            </a>
        </div>
        <!-- Dark Mode -->
        <div id="darkmode" title="Mudar Tema" onclick="darkMode('#light')" draggble="false"> 
            <i class="far fa-lightbulb"></i> 
            <span>Light Mode</span> 
        </div>
        </header>
`
var loadSidebar = `

        <aside id="mainSidebar">
        <div class="topsidebar" style="position: relative;">
            <form action="http://www.google.com/" target="_blank" method="GET">
                <input class="searchTxt" name="q" type="seacrh" placeholder="Pesquisar..." autocomplete="true">
                <button class="searchBtn" type="submit" autofocus="true"></button>
            </form>
        </div>
        <div class='fLogo'> 
            <img src='theme/ico.jpg' alt='EasyDownloading' name='EasyDownloading'> 
        </div> 
        <div class='fText'> 
            Um mini-projeto desenvolido por <br>
             Eril Tavares ® 2019-2020 EasyDownloading. <br>
             All rights reserved. 
        </div> 
        <div class='fContact'> 
            <span class='links'> 
            <a href='mailto:erilandocarvalho@gmail.com' style='background-image:url(theme/mail.svg);' title='Gmail'>Gmail</a> 
            <a href='https://easydownloading.github.io/' title='GitHub'>GitHub</a> 
        </span> 
        </div> 
        </aside> 

`// END OF LOADS
window.onload = function () {
    // Import
    // include
    /* var allTags = document.getElementsByTagName("*");
    for (let z = 0; z < allTags.length; z++) {
        var theTag = allTags[z];
        elmnt = theTag.hasAttribute("include")
        if (elmnt) {
            var atrName=theTag.getAttribute('include');
            includes(theTag,atrName);
        }
    }
    */
    $("body").prepend(loadHeader);
    $("body").prepend(loadSidebar);
    // set theme
    var hourTheme = new Date().getHours();
    if(hourTheme >= 21 || hourTheme <= 6){
        setTimeout(darkMode, 0, '#light')
    }
    // set page 
    var pageID = sessionStorage.getItem('IDpage') || "main.html";
    loadPage(pageID);// setTimeout(loadPage, 100, pageID);

  // set head
    var _head = document.getElementsByTagName('head')[0];
<<<<<<< HEAD
    var _icon = document.createElement("link");_icon.rel="icon";_icon.href="main/icon.jpg";
    _head.appendChild(_icon);
    

   //set refH
   var allTags = document.getElementsByTagName("a");
    for (let z = 0; z < allTags.length; z++) {
        var theTag = allTags[z];
        elmnt = theTag.hasAttribute("href")
        if (elmnt) {
            theTag.setAttribute("target", "_parent")
    }}

  
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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
