$(document).ready(function(){function e(){var e={zoom:11,scrollwheel:!1,navigationControl:!1,mapTypeControl:!1,scaleControl:!1,draggable:!1,center:new google.maps.LatLng(25.035433,121.566295),styles:[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#4f595d"},{visibility:"on"}]}]},t=document.getElementById("map"),n=new google.maps.Map(t,e),i=new google.maps.Marker({position:new google.maps.LatLng(40.67,-73.94),map:n,title:"Snazzy!"})}$(".dropdowns").click(function(){return $(this).children("ul").slideToggle(150),$(this).hasClass("open")?($(this).removeClass("open"),!1):($(this).addClass("open"),!1);return!1}).hover(function(){},function(){$(this).children("ul").slideUp(150),$(this).removeClass("open")}),$(".dropdowns ul li").click(function(){var e=$(this).html(),t=$(this).attr("id");$(this).siblings("li").removeClass("selected"),$(this).addClass("selected"),$(this).parent("ul").siblings("span.selected").html(e),$(this).parent("ul").siblings("input").val(t)}),$(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")+"<small>by Marsel Van Oosten</small>"}}}),google.maps.event.addDomListener(window,"load",e)}),function(){function e(){t()}function t(){a.addEventListener("click",n),l&&l.addEventListener("click",n),s.addEventListener("click",function(e){var t=e.target;o&&t!==a&&n()})}function n(){o?classie.remove(i,"show-menu"):classie.add(i,"show-menu"),o=!o}var i=document.body,s=document.querySelector("body"),a=document.getElementById("open-button"),l=document.getElementById("close-button"),o=!1;e();var r={valueNames:["name"]},d=new List("users",r)}(jQuery),function(){function e(){if(classie.has(n,"open")){classie.remove(n,"open"),classie.add(n,"close");var e=function(t){if(support.transitions){if("visibility"!==t.propertyName)return;this.removeEventListener(transEndEventName,e)}classie.remove(n,"close")};support.transitions?n.addEventListener(transEndEventName,e):e()}else classie.has(n,"close")||classie.add(n,"open")}var t=document.getElementById("trigger-overlay"),n=document.querySelector("div.overlay"),i=n.querySelector("button.overlay-close");transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},transEndEventName=transEndEventNames[Modernizr.prefixed("transition")],support={transitions:Modernizr.csstransitions},t.addEventListener("click",e),i.addEventListener("click",e)}();