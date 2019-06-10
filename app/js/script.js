function Tabs() {
    let bindAll = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].addEventListener('click', change, false);
        }
    };

    let clear = function() {
        let menuElements = document.querySelectorAll('[data-tab]');
        for(let i = 0; i < menuElements.length ; i++) {
            menuElements[i].classList.remove('active-tab-body');
            let id = menuElements[i].getAttribute('data-tab');
            document.getElementById(id).classList.remove('active-tab-body');
        }
        let tab = document.querySelectorAll('.banner__tab');
        for(let i = 0; i < tab.length ; i++) {
            tab[i].classList.remove('tab-active');
        }

        let tabDescr = document.querySelectorAll('.banner__tab-descr');
        for(let i = 0; i < tabDescr.length ; i++) {
            tabDescr[i].classList.remove('active');
        }

    };

    let change = function(e) {
        e.preventDefault();
        clear();
        e.target.classList.add('tab-active');
        let id = e.currentTarget.getAttribute('data-tab');
        document.getElementById(id).classList.add('active-tab-body');
    };

    bindAll();
}

let connectTabs = new Tabs();

let trigger = document.querySelector('#header-trigger');

trigger.addEventListener('click', function (e) {
   console.log('work');
    let menu = document.querySelector('.header__low-menu');
    if (trigger.classList.contains('js-trigger-active')){
        trigger.classList.remove('js-trigger-active');
        menu.classList.add('hide');
        menu.classList.remove('display');
    }
    else {
      trigger.classList.add('js-trigger-active');
      menu.classList.add('display');
      menu.classList.remove('hide');
      menu.classList.add('show');
    }

    window.onclick = function(event) {
        if (event.target !== trigger) {
            menu.classList.add('hide');
            menu.classList.remove('display');
            trigger.classList.remove('js-trigger-active');
        }
    }
});