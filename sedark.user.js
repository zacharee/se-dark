// ==UserScript==
// @name         SEDARK
// @namespace    zachary@techyteen.tk
// @version      0.2
// @description  Dark theme for Stack Exchange
// @author       Zachary Wander
// @include      http://askubuntu.com/*
// @include      http://meta.askubuntu.com/*
// @include      http://stackoverflow.com/*
// @include      http://meta.stackoverflow.com/*
// @include      http://chat.stackexchange.com/*
// @grant        none
// ==/UserScript==

/*global jQuery*/

var str = window.location.href;

var spl = str.split("/");

if ((spl[2] == "askubuntu.com") || (spl[2] == "meta.askubuntu.com")) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://preview.c9users.io/zacharee1/sedark/audark.css" class="--apng-checked">');
    
    })();
} else if ((spl[2] == "stackoverflow.com") || (spl[2] == "meta.stackoverflow.com")) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://preview.c9users.io/zacharee1/sedark/sodark.css" class="--apng-checked">');
    
    })();
} else if (spl[2] == "chat.stackexchange.com") {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://preview.c9users.io/zacharee1/sedark/sechatdark.css" class="--apng-checked">');
    
    })();
} else {}