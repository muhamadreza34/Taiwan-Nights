$(document).ready(function(){$(".dropdowns").click(function(){return $(this).children("ul").slideToggle(150),$(this).hasClass("open")?($(this).removeClass("open"),!1):($(this).addClass("open"),!1);return!1}).hover(function(){},function(){$(this).children("ul").slideUp(150),$(this).removeClass("open")}),$(".dropdowns ul li").click(function(){var e=$(this).html(),t=$(this).attr("id");$(this).siblings("li").removeClass("selected"),$(this).addClass("selected"),$(this).parent("ul").siblings("span.selected").html(e),$(this).parent("ul").siblings("input").val(t)})}),function(){function e(){t()}function t(){l.addEventListener("click",n),o&&o.addEventListener("click",n),i.addEventListener("click",function(e){var t=e.target;c&&t!==l&&n()})}function n(){c?classie.remove(s,"show-menu"):classie.add(s,"show-menu"),c=!c}var s=document.body,i=document.querySelector("body"),l=document.getElementById("open-button"),o=document.getElementById("close-button"),c=!1;e()}();