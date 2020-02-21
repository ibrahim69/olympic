// check window for mobile phone
var $window = $(window);

function checkWidth() {
    var windowsize = $window.width();

    if (windowsize > 960 || windowsize == 768) {
        $(".athletes .masonry-slider .slideshow").slick({
            dots: false,
            infinite: false,
            slidesToScroll: 1
        });

        // init Masonry
        var $grid = $('.athletes .masonry-slider .grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: 1,
            fitWidth: true
        });

        // layout Masonry after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.masonry();
        });
    } else {
        $(".masonry-slider .slideshow").removeClass('slideshow');
        $('.athletes .masonry-slider .grid').eq(1).css("display", "none");
        $('.athletes .masonry-slider .grid').eq(2).css("display", "none");
        $('.athletes .masonry-slider .grid .grid-item').removeClass('w-70 col w-40')
        $('.athletes .masonry-slider .grid').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        })
    }

    if (windowsize <= 960) {
        $('.header-top.navbar-light').addClass('mobile-phone');
    } else {
        $('.header-top.navbar-light').removeClass('mobile-phone');
    }
    
    if (windowsize <= 767) {
        $('.id-athlete .bio').slick({
            dots: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        })
    } else {

    }
}
// Execute on load
checkWidth();
// Bind event listener
$(window).resize(function() {
    checkWidth;
    location.reload();
});


// Hide Navbar When Scroll Down
var c, currentScrollTop = 0, navbar = $('.header-main'),  navbar_mobile = $('.mobile-phone');

$(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
    
    currentScrollTop = a;
    
    if (c < currentScrollTop && a > b + b) {
        navbar.removeClass("scrollUp");
        navbar_mobile.removeClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
        navbar.addClass("scrollUp");
        navbar_mobile.addClass("scrollUp");
    } else {
        navbar.removeClass("scrollUp");
        navbar_mobile.removeClass("scrollUp");
    }
    c = currentScrollTop;
});

// $('.mobile-phone').sticky({topSpacing: 0});

//drop down menu
// $(".drop-down").hover(function() {
//     $('.mega-menu').addClass('display-on');
// });
// $(".drop-down").mouseleave(function() {
//     $('.mega-menu').removeClass('display-on');
// });

// $('.header-main .navbar-nav').hover( function() {
//     i = 0;
//     j = 5
//     if (i = 0, i <= j, i++) {

//     }

// })

// Search Header
$('.header-main .search').on('click', function() {
    $('.search-box').toggleClass('display-on');
})

$('.header-top.mobile-phone .search').on('click', function() {
    $('.search-box').toggleClass('display-on');
})

// Filtering button in Nav Dropdown
filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("element-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btns = document.getElementsByClassName("button");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// //  Slide Show in Navbar Dropdown
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("element-item");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
// }