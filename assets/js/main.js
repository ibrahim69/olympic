//drop down menu	
$(".drop-down").hover(function() {
    $('.mega-menu').addClass('display-on');
});
$(".drop-down").mouseleave(function() {
    $('.mega-menu').removeClass('display-on');
});

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

//  Slick js (Carousel)
$(".carousel").slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
});


//  Carousel List 2
$(".carousel-list-2").slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
});

// social-wall

$('.wrapper-social').masongram({
    access_token: '2127248609.1677ed0.db0b4ad502bf43d3b915db9fadcfece0',
    // endpoint
    endpoint: 'users/self',

    // infinite scroll
    loop: true,

    // the number of images to display
    count: 15,

    // distance (percent) from bottom of page where new API request is sent
    offset: 1,

    // image quality
    size: 'low_resolution',

    // HTML content of caption
    // variables: {caption}, {location}, {likes}
    caption: 
        '<div class="text-center">' +
        '<p data-if="{likes}"><i class="fa fa-heart text-danger"></i> {likes}</p>' +
        '<p data-if="{caption}">{caption}</p>' +
        '<a tabindex="-1" class="btn btn-primary" href="https://fruskac.net/en/map?c={location},12z" target="_blank" data-if="{location}"><i class="fa fa-map-o"></i> Location</a> ' +
        '<a tabindex="-1" class="btn btn-primary" href="{link}" target="_blank" data-if="{link}"><i class="fa fa-instagram"></i> Instagram</a> ' +
        // Optional FancyBox button
        '<a tabindex="-1" class="btn btn-primary" data-fancybox href="{image}"><i class="fa fa-photo"></i> Fancybox</a>' +
        '</div>',

    // location information
    // location: 'inherit&caption',
}).on('masongram:api:end', function () {
    console.info('No more API items');
  }).on('masongram:error', function () {
    if (!access_token) {
      $('#photos').after('<br><p class="text-center"><a class="btn btn-info btn-lg ' + authorization + '">Allow MasonGram to access your public photos</a></p>');
    }
});