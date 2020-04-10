// ==UserScript==
// @name OGAS (Gold)
// @description BRAVELY, COMRADES, FORWARD! CYBERNISATION, FUTURISATION, AUTOMATISATION!
// @author Vestrate
// @license VPP
// @version 7.0
// @require http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @include http://wildpolitics.online/mining*
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */

setTimeout(function(){ window.location.href = window.location.href; }, 60000);
    $.ajax({
        type: "GET",
        url: "/status/0/",
        dataType: "html",
        cache: false,
        success: function(data){
           var result = JSON.parse(data);
            if (result.energy >= 10){
                document.getElementsByClassName("btn btn-default")[0].click();
            }
        }
    }
)