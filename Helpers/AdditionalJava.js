/* 
 Change the text between the <h1> </h1> to change the header across all pages
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const headerItem =
        ` <h1>
            <a href="https://tomorourke1.github.io/SitePages/Homepage.html"> Thomas <br> O'Rourke </a>
            Game Developer from New Jersey, United States.
        </h1> `

    const headerSpot = document.querySelector('header');
    headerSpot.innerHTML = `${headerItem}`;

    const darkModeBtnEmplace = '<div> <button onclick = "DarkMode()"> Switch Theme</button> </div>';
    const darkModeBtnPlacement = document.querySelector('body');
    darkModeBtnPlacement.innerHTML = darkModeBtnEmplace + darkModeBtnPlacement.innerHTML;

    if (localStorage.getItem('theme') == 'darkmode') {
        document.body.classList.toggle("dark-mode", true);
    }
    else {
        document.body.classList.toggle("dark-mode", false);
    }

    const imgResume = ' <img src = "../SiteImages/ThomasORourkeResume.png" />';
    const pdfResume = ' <object data = "../SiteImages/ThomasORourkeResume.pdf" type = "application/pdf" style = "width: 65rem; height: 60rem;" > < iframe src="../SiteImages/ThomasORourkeResume.pdf" style="width: 65rem; height: 60rem;" frameborder="0" ></iframe>  </object> ';

    if (IsMobile()) {
        // If the website is in mobile, use the img version to display
        const resumeSpot = document.querySelector('.resume');
        if (resumeSpot != null) {
            resumeSpot.innerHTML = `${imgResume}`;
        }
    }
    else {
        // If the website is not mobile, display the pdf
        const resumeSpot = document.querySelector('.resume');
        if (resumeSpot != null) {
            resumeSpot.innerHTML = `${pdfResume}`;
        }
    }
});

function IsMobile() {
    const comparor = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return comparor.some((comparee) => {
        return navigator.userAgent.match(comparee);
    });
}

function DarkMode() {
    var _status = document.body.classList.toggle("dark-mode");

    if (_status) {
        localStorage.setItem('theme', 'darkmode');
    }
    else {
        localStorage.setItem('theme', 'lightmode');
    }


    //if (localStorage.getItem('dark')) {
    //    document.body.classList.add('dark');
    //} else {
    //    document.body.classList.remove('dark')
    //}
}