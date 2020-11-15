function includes(to,from) {
    var theFrom = from.toLowerCase();
    switch (theFrom) {
        case 'header':
        var input = iheader;
            break;
        case 'sidebar':
        var input = isidebar;
            break;
        case 'footer':
        var input = ifooter;
            break;
        default:
        var input = 'Page Not Found!';
            break;
    }
    $(to).prepend(input);

}

var iheader = `
    <!--MenuIcon--> 
        <span id="menuIcon" onclick="menu_sidebar(this)"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div></span>
        <!--Logo-->
        <h1 id="logo"><a href='#' target='_self' onclick="loadPage('home.html')">
            EasyDownloading</a>
        </h1>
        <!-- Main Navbar -->
        <nav id="mainMenu">
            <div class="menu"><button onclick="loadPage('page/news.html');include()">Novidades</button>
            </div>
            <div class="menu mdrop"><button onclick="loadPage('page/flexw3page.html')">Downloads</button><input class="Obtn" type="button" name="OpenMenu">
                <nav class="submenu">
                    <a href="#pes6">Pes6</a>
                    <a href="#slide">Games</a>
                </nav>
            </div>
            <div class="menu"><button onclick="loadPage('page/pes6.html')">PES6</button>
            </div>
            <div class="menu mdrop"><button onclick="loadPage('page/examples.html')">Mais</button><input class="Obtn" type="button" name="Mais">
                <nav class="submenu">
                    <a href="#" onclick="loadPage('page/slide.html')">Slide</a>
                    <a href="#" onclick="loadPage('page/teste.html')">Teste</a>
                    <a href="#" onclick="loadPage('page/faq.htm')">FAQ</a>
                </nav>
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
            <img id="light" src="theme/light.svg" alt="&#128262;"> 
            <span>Light Mode</span> 
        </div> 

`// END OF

var ifooter = `
    

`// END OF

var isidebar = `
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
            <a href='https://github.com/erilShackle/EasyDownloading' title='GitHub'>GitHub</a> 
        </span> 
        </div> 

`// END OF