window.onload = ()=> {
    expandcollapse()
    menuCollapse()
}


function anchorLinkHandler(e) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("href");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));



function expandcollapse(){
    let arrow = document.querySelector('.side-menu__switch');
    let box = document.querySelector('.app-box')
    let sidemenu = document.querySelector('.side-menu')
    arrow.onclick =() => {
        arrow.classList.toggle('active')
        box.classList.toggle('active')
        sidemenu.classList.toggle('active')
    }
}

function menuCollapse(){
    let collapse = document.querySelector('.side-menu__collapse')
    collapse.onclick = () => {
        console.log(collapse)
        collapse.classList.toggle('active')
        let menu = document.querySelector('.side-menu__nav')
        console.log(menu)
        menu.classList.toggle('active')
    }
}