document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var acc = document.getElementsByClassName('accordion-btn');
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            for (var j = 0; j < acc.length; j++) {
                if (acc[j] !== this) {
                    acc[j].classList.remove('active');
                    acc[j].nextElementSibling.style.maxHeight = null;
                }
            }            
            this.classList.toggle('active');
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
});