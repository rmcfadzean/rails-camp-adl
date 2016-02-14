function scrollNav() {
  $('#navbar-top .nav a, #hero a').click(function(){
    // Collapse navbar
    $('#navbar-collapse').collapse('hide');

    //Animate
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
  });

  $('.scrollTop a').scrollTop();
}

function fixedNav() {
  // Scroll to fixed navbar
  var  navbarTop = $("#navbar-top");
  var  navbarFixedClass = "navbar-fixed-top";
  var  heroElement = $('#hero');

  $(window).on('scroll load', function() {
    if( $(this).scrollTop() > (heroElement.height() + navbarTop.height()/3) ) {
      navbarTop.addClass(navbarFixedClass);
    } else {
      navbarTop.removeClass(navbarFixedClass);
    }
  });
}

function loadMap() {
  var mapLocation = {
    latitude: -35.0666881,
    longitude: 138.7546006
  }

  var mapElement = $('.location-map')[0];
  var mapOptions = {
    center: new google.maps.LatLng(mapLocation.latitude, mapLocation.longitude),
    zoom: 15,
    // panControl: false,
    // zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
  }

  // Map
  if (mapElement) {
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(mapLocation.latitude, mapLocation.longitude),
      map: map,
      visible: true,
      icon: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png',
    });
  }
}


$(document).ready(function() {
  loadMap();
  fixedNav();
  scrollNav();
});
