

// Слайдеры карусели
$(document).ready(function(){

    $('#carousel1').owlCarousel({
        loop: true,
        margin: 50,
        items: 3,
        dots: true,
        responsiveClass: true,
        slideSpeed: 300,
        paginationSpeed: 500,
        responsive: {
            0: {
                items: 3
            }
        }
    });

    $('#carousel2').owlCarousel({
        loop: true,
        margin: 50,
        items: 3,
        dots: true,
        responsiveClass: true,
        slideSpeed: 300,
        paginationSpeed: 500,
        responsive: {
            0: {
                items: 3
            }
        }
    });

    $('#carousel3').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        responsiveClass: true,
        slideSpeed: 300,
        paginationSpeed: 500,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('#carousel4').owlCarousel({
        loop: true,
        margin: 50,
        items: 3,
        dots: true,
        responsiveClass: true,
        slideSpeed: 300,
        paginationSpeed: 500,
        responsive: {
            0: {
                items: 3
            }
        }
    });

    $(function() {
		$('#example').barrating({
			theme: 'fontawesome-stars',
			onSelect: function(value, text, event) {
        if (typeof(event) !== 'undefined') {
            let e = event.target
            //let rating = e.dataset.ratingValue
            //let ratingField = document.querySelector('#F_rating')
            //ratingField.value = rating
            //console.log(rating)
        } else {
        // rating was selected programmatically
        // by calling `set` method
                }
            }
	    });
    });

    $('a').filter(function(i) {
        return $(this).attr("href") === "#";
    })
        .bind('click.dontClick',function(e){
            e.preventDefault();
        })

    // Форма регистрации
$('#R_form').submit(function(e) {
    e.preventDefault();

    let r_username = $('#R_username').val();
    let r_password = $('#R_password').val();
    $.ajax({
        method: 'POST',
        url: 'php/signup.php',
        data: {
            username: r_username,
            password: r_password
        }
    }).done(function(result) {
        console.log(result);
        let response = JSON.parse(result);
        console.log(response);
        if(response.success) {
            //alert('Done');
            HideObj($('#SignUpModal')[0]);
            //HideObj($('#SignUp')[0]);
        }
        else {
            alert(response.error);
        }
    });
});

$('#L_form').submit(function(e) {
    e.preventDefault();

    let l_username = $('#L_username').val();
    let l_password = $('#L_password').val();
    
    $.ajax({
        method: 'GET',
        url: 'php/signin.php',
        data: {
            username: l_username,
            password: l_password
        }
    }).done(function(result) {
        console.log(result);
        let response = JSON.parse(result);
        console.log(response);
        if(response.success) {
            //alert('Welcome');
            localStorage['user'] = response.user_id;
            localStorage['username'] = response.user_name;
            HideObj($('#SignIn')[0]);
            HideObj($('#SignInModal')[0]);
            HideObj($('#SignUp')[0]);
            ShowUserName();
        }
        else {
            alert(response.error);
        }
    })
})

$('#F_form').submit(function(e) {
    e.preventDefault();
    console.log('SUBMIT')

    let c_employ = $('#F_employ').val();
    let c_feedback = $('#F_feedback').val();
    let c_rating = $('.F_rating').val();
    let user = localStorage['user'];

    if(localStorage['user'] && c_employ && c_feedback && c_rating) {
        $.ajax({
            method: 'POST',
            url: 'php/create.php',
            data: {
                employ: c_employ,
                feedback: c_feedback,
                rating: c_rating,
                user_id: user
            }
        }).done(function(result) {
            console.log(result);
            let response = JSON.parse(result)
            console.log(response);
            if(response.success) {
                alert('Done')
                $('.feedbacks-section').css("height", "0px");
            }
            else {
                alert("Упс... Что-то пошло не так")
            }
        })
    }
    else {
        alert('Пожалуйста, заполните форму отзыва полностью')
    }
});

const ShowUserName = () => {
    if (localStorage['username']) {
        console.log('LEL')
        ShowObj($('.UserNameShow')[0])
        $( ".UserNameShow" ).html("<h2>" + "<a href=\"\" class=\"btn-setting-link\" ><i class=\"fas fa-user\"></i></a>" + localStorage['username'] + "</h2>");
        HideObj($('#SignIn')[0]);
        HideObj($('#SignUp')[0]);
        ShowObj($('#LogOut')[0]);
        ShowObj($('#leaveFeedbackBtn')[0]);
    } else {
        HideObj($('.UserNameShow')[0]);
        HideObj($('#leaveFeedbackBtn')[0]);
    }
}

ShowUserName();

})

var HideObj = (Btn) => {
    if (Btn.style.display != "none") {
        Btn.style.display = "none"
    }
}

var ShowObj = (Btn) => {
    if (Btn.style.display != "block") {
        Btn.style.display = "block"
    }
}

function getStars(rating) {
    let ratingStars = ''
    for (let i = 0; i < rating; i++) {
        ratingStars += '<i class="ti ti-star"></i>'
    }
    return ratingStars
}

const show_feedbacks = () => {
    $.ajax({
        method: 'GET',
        url: 'php/get.php',
        data: {
        }
    }).done(function(result) {
        console.log(result);
        let response = JSON.parse(result);
        console.log(response);

        response.forEach(feedbacks => {
            document.querySelector('#carousel3').innerHTML += `      
            <div class="carousel__item text-center">
                <div class="feedback-wrapper">
                <div class="feedback__header">
                <i class="fas fa-quote-left"></i>
                <h3 class="feedback__title-main">
                ${feedbacks.feedback}
                </h3>
                </div>
                <div class="feedback__post">
                <h3 class="feedback__title-main">
                ${feedbacks.username}
                </h3>
                <p class="feedback__title-sub">
                ${feedbacks.employ}
                </p>
                <div class="feedback__rating">
                `
                +
                getStars(feedbacks.rating)
                +
                `
                </div>
                </div>
                </div>
                </div>
        `;
        });

    });
};

document.addEventListener("DOMContentLoaded", function() {
    'use strict'
const menu = document.querySelector('nav')
menu.setAttribute('class', 'main-nav')

const menuHeading = document.querySelector('nav > div')
menuHeading.setAttribute('class', 'main-nav__heading')

const menuLogo = document.querySelector('nav > div > a')
menuLogo.setAttribute('class', 'main-nav__logo')

const toggleButton = menu.querySelector('button')
toggleButton.setAttribute('id', 'toggle-nav')

const menuUl = document.querySelector('nav > ul')
menuUl.setAttribute('class', 'main-nav__menu')

const menuLis = document.querySelectorAll('nav > ul > li')
for (const menuLi of menuLis) {
  menuLi.setAttribute('class', 'main-nav__menu-item')

  if (menuLi.querySelector('ul') !== null) {
    menuLi.classList.add('main-nav__menu-item--dropdown')
  }
}

const menuLinks = document.querySelectorAll(
  'nav > ul > li > a ,  nav > ul > li > span'
)
for (const menuLink of menuLinks) {
  menuLink.setAttribute('class', 'main-nav__menu-item-link')
}

const subMenus = menu.querySelectorAll('span + ul')
for (const subMenu of subMenus) {
  subMenu.setAttribute('class', 'main-nav__sub-menu')
}

const subMenuLis = menu.querySelectorAll('span + ul > li')

for (const subMenuLi of subMenuLis) {
  subMenuLi.setAttribute('class', 'main-nav__sub-menu-item')
}
const subMenuLiLinks = menu.querySelectorAll('span + ul > li > a')

for (const subMenuLisLink of subMenuLiLinks) {
  subMenuLisLink.setAttribute('class', 'main-nav__sub-menu-item-link')
}

// -------------------------------------------------------------------------------

// Helper function
function addListenerToElement (element, eventType, listener) {
  element.addEventListener(eventType, listener)
}

// Remove active class from menu items, add it on clicked element and toggle show in sub-menus
function toggleActiveItem (event) {
  let parentItem = event.target.parentElement
  let siblingItem = event.target.nextElementSibling

  for (const value of menuLis) {
    value.classList.remove('main-nav__menu-item--active')
  }
  parentItem.classList.add('main-nav__menu-item--active')

  if (siblingItem) {
    siblingItem.classList.toggle('open')
    dropDownAnimation(event.target)
  }
}

// Toggle animated menu opening in mobile view, dynamically based on menu items quantity
function toggleNav (event) {
  const siblingItem = event.target.parentElement.nextElementSibling
  siblingItem.classList.toggle('open')
  dropDownAnimation(event.target.parentElement)
}

// Animation for dropdowns
function dropDownAnimation (clicked) {
  let clickedItem = clicked
  let clickedItemSibling = clickedItem.nextElementSibling

  if (clickedItemSibling !== null) {
    let menuItems = clickedItemSibling.children
    let menuItemHeight = menuItems[0].offsetHeight
    let menuItemLength = menuItems.length
    let menuHeight = menuItemHeight * menuItemLength

    const animationParameters = {
      duration: 500,
      easing: 'ease-out'
    }
    if (clickedItemSibling.classList.contains('open')) {
      clickedItemSibling.animate(
        [{ height: '0' }, { height: menuHeight + 'px' }],
        animationParameters
      )
    } else {
      clickedItemSibling.animate(
        [{ height: menuHeight + 'px' }, { height: '0' }],
        animationParameters
      )
    }
  }
}

// //Close the open submenu  clicking everywhere
function closeDropdown (event) {
  for (const li of menuLis) {
    let dropDownShow = li.querySelector('.open')

    if (
      dropDownShow !== null &&
      dropDownShow !== event.target.nextElementSibling
    ) {
      dropDownShow.classList.remove('open')
      dropDownAnimation(dropDownShow.previousElementSibling)
    }
  }
}

for (const value of menuLinks) {
  addListenerToElement(value, 'click', toggleActiveItem)
}

addListenerToElement(toggleButton, 'click', toggleNav)
addListenerToElement(window, 'mouseup', closeDropdown)

    // Запрос в БД для отзывов
    show_feedbacks();
    
    let logOutBtn = document.querySelector('#LogOut')

    // ------------------------------------ Modal ---------------------------------------
    let SignUpModal = document.getElementById("SignUpModal");
    let btnSignUp = document.getElementById("SignUp");
    let btnCloseSignUp =  SignUpModal.getElementsByClassName("modal-close")[0];
    let SignInModal = document.getElementById("SignInModal");
    let btnSignIn = document.getElementById("SignIn");
    let btnCloseSignIn = SignInModal.getElementsByClassName("modal-close")[0];
    let UserNameField = document.querySelector('.UserNameShow');


    const logout = () => {
        if (localStorage['user']) {
            localStorage.removeItem('user');
        }
        if (localStorage['username']) {
            localStorage.removeItem('username');
        }
        ShowObj(btnSignUp)
        ShowObj(btnSignIn)
        HideObj(logOutBtn)
        HideObj(btnFeedback)
        HideObj(UserNameField)
    }

    logOutBtn.addEventListener('click', logout)

    btnSignUp.addEventListener('click', () => {
        SignUpModal.style.display = "block";
        SignInModal.style.display = "none";
    })

    var winX = null, winY = null;

    window.addEventListener('scroll', function () {
    if (winX !== null && winY !== null) {
        window.scrollTo(winX, winY);
    }

    if (SignUpModal.style.display == "block" || SignInModal.style.display == "block") {
        disableWindowScroll();
    } else {
        enableWindowScroll();
    }
    });

    function disableWindowScroll() {
        winX = window.scrollX;
        winY = window.scrollY;
    };

    function enableWindowScroll() {
        winX = null;
        winY = null;
    };

    btnSignIn.addEventListener('click', () => {
        SignInModal.style.display = "block";
        SignUpModal.style.display = "none";
    })

    btnCloseSignUp.addEventListener('click', () => {
        SignUpModal.style.display = "none"; 
    })

    btnCloseSignIn.addEventListener('click', () => {
        SignInModal.style.display = "none"; 
    })

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == SignUpModal) {
            SignUpModal.style.display = "none";
        }
        if (event.target == SignInModal)
        {
            SignInModal.style.display = "none";
        }
    }
    //-----------------------------------------------------------------------------------------------------------

    // ------------------------- Форма обратной связи ----------------------------------
    var btnFeedback = document.querySelector('.btn-feedback');
    let FeedBackForm = document.querySelector('.feedbacks-section');
    let FeedBackFormContent = FeedBackForm.querySelector('.container');
    let FeedBackOriginalForm = document.querySelector('#F_form');

    btnFeedback.addEventListener('click', () => {
        let curHeight = window.getComputedStyle(FeedBackForm).height;
        let contentHeight = window.getComputedStyle(FeedBackFormContent).height;
        if (curHeight !== 0 + 'px') {
            FeedBackForm.style.height = 0 + 'px';
        } else {
            FeedBackForm.style.height = contentHeight;
        }
    })

    // -------------------------------------------------- Работа с БД --------------------------------------------------
    // -----------------------------------------------------------------------------------------------

    // --------------------------------------  Кнопка подъем вверх -----------------------------------
    let elevatorBtn = document.querySelector('.elevator-button');
    let elevator = new Elevator({
        element: elevatorBtn,
        duration: 1000 // milliseconds
    });
    elevatorBtn.addEventListener('click', (e) => {
        e.preventDefault();
        elevator.elevate();
    })
    // --------------------------------------------------------------------------------------------------

    // -------------------------------------- Фильтр по кнопка --------------------------------------
    let menuAll = document.querySelectorAll('[data-filter]')
    let cardItem = document.querySelectorAll('[data-cat]')

    function filterElements(categoryName, nodeListOf) {
        for (let i = 0; i < nodeListOf.length; i++){
            if (categoryName === 'alld') {
                console.log('Show all')
                if (nodeListOf[i].classList.contains('hide')){
                    nodeListOf[i].classList.remove('hide')
                    FadeInOut('in', nodeListOf[i], 2)
                }
            } else
            {
                let filterCat = nodeListOf[i].dataset.cat
                if (categoryName === filterCat) {
                    if (nodeListOf[i].classList.contains('hide')){
                        nodeListOf[i].classList.remove('hide')
                        FadeInOut('in', nodeListOf[i])
                    }
                } else
                {
                    FadeInOut('out', nodeListOf[i])
                }
            }
        }

    }

    function FadeInOut(mode, element) {
        let step = 0
        if(mode === 'in'){
            element.style.transform = 'scale(' + 0 + ')'
            element.style.opacity = 0;
            step = 0.05
        } else if(mode === 'out'){
            element.style.transform = 'scale(' + 1 + ')'
            element.style.opacity = 1;
            step = - 0.05;
        }

        setTimeout(function () {
            Animation(element, step)
        }, 10)
    }

    function Animation(element, step) {
        let scale = +getComputedStyle(element).transform.slice(7).split(',')[0]
        let opacity = parseFloat(element.style.opacity)
        element.style.transform = `scale(${scale + step})`
        element.style.opacity = opacity + step;
        if (step > 0){
            if (element.style.opacity < 1){
                setTimeout(function () {
                    Animation(element, step)
                }, 10);
            }
        } else {
            if (element.style.opacity > 0.1){
                setTimeout(function () {
                    Animation(element, step)
                }, 10);
            } else
            {
                element.classList.add('hide')
            }
        }
    }

    menuAll.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            let target = e.target
            if (target.hasAttribute('data-filter')) {
                let cat = target.dataset.filter
                SetActive(cat)
                filterElements(cat, cardItem)
            }
        })
    })

    function SetActive(cat) {
        menuAll.forEach(item => {
                if (item.dataset.filter === cat) {
                    item.classList.add('menu-list__link-active')
                } else
                {
                    item.classList.remove('menu-list__link-active')
                }
        })
    }
    // --------------------------------------------------------------------------------------------------

    // ---------------------------------- Слайдеры ----------------------------------
    let slider = document.querySelectorAll('.slider');

    slider.forEach((slider, index)=> {
        slider.addEventListener("click", (event)=>{
            let target = event.target
            move_slide(target, index)
        })
    })

    function move_slide(event, index = 0) {
        let classSet = 'slider-' + (index + 1),
            mySlider = document.getElementById(classSet).getElementsByClassName('slider__wrapper')[0],
            sliderScrollWidth = mySlider.scrollWidth,
            slideWidth = mySlider.firstElementChild.scrollWidth * -1,
            slideVariable = parseInt(mySlider.dataset.pos),
            sliderItems = mySlider.querySelectorAll('.slider__item')

            let slideMovePose = 0

            if (event.classList.contains('slider__navigation-left')) {
                slideMovePose = slideVariable + slideWidth * -1
            }
            if (event.classList.contains('slider__navigation-right')) {
                slideMovePose = slideVariable - slideWidth * -1
            }


            if (slideMovePose < (sliderScrollWidth + slideWidth)*-1) {
                slideMovePose = (sliderScrollWidth + slideWidth)*-1
            }
            mySlider.dataset.pos = slideMovePose.toString()

            mySlider.dataset.pos = Math.min(slideMovePose, 0).toString()
            mySlider.style.left = mySlider.dataset.pos + 'px'
    }
    // --------------------------------------------------------------------------------------------------

/*
    // Автотекст
    let name = document.querySelector('#typetext')
    let names = ['COMPLETE SITES', 'PERFECT SHOPS', 'GOOD PLACES']
    let curIndex = 0
    let curLetter = 0
    function type() {
        if (curLetter === names[curIndex].length) {
            curLetter = 0
            curIndex ++
            clearTimeout(timeType)
            remove()
            return
        }
        name.innerHTML += names[curIndex][curLetter]
        curLetter++
        timeType = setTimeout(type, getRandom(50,400))
    }
    function remove() {
        if (name.innerHTML.length > 0) {
            name.innerHTML = name.innerHTML.substring(0, name.innerHTML.length - 1)
        }
        else {
            if (curIndex === names.length) curIndex = 0
            clearTimeout(timeRemove)
            timeType = setTimeout(type, 100)
            return
        }
        var timeRemove = setTimeout(remove, 100)
    }
    var timeType = setTimeout(type, 100)
    function getRandom(mn, mx) {
        let randomizer = Math.round((mx-mn)*Math.random() + mn)
        return randomizer
    }
*/
})