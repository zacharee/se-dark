// ==UserScript==
// @name         SEDARK
// @namespace    zachary@techyteen.tk
// @version      0.4.3b
// @description  Dark theme for Stack Exchange
// @author       Zachary Wander

// @include      *://askubuntu.com/*
// @include      *://meta.askubuntu.com/*
// @include      *://stackoverflow.com/*
// @include      *://meta.stackoverflow.com/*
// @include      *://chat.stackexchange.com/*
// @include      *://superuser.com/*
// @include      *://meta.superuser.com/*
// @include      *://chat.stackoverflow.com/*

// @grant        none
// ==/UserScript==

/*global jQuery*/

var str = window.location.href;

var spl = str.split("/");

if ((spl[2] == "askubuntu.com") || (spl[2] == "meta.askubuntu.com")) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/beta/audark.css" class="--apng-checked">');
    
    })();
} else if ((spl[2] == "stackoverflow.com") || (spl[2] == "meta.stackoverflow.com")) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/beta/sodark.css" class="--apng-checked">');
    
    })();
} else if ((spl[2] == "chat.stackexchange.com") || (spl[2] == "chat.stackoverflow.com")) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/beta/sechatdark.css" class="--apng-checked">');
    
    })();
} else if ((spl[2] == "superuser.com") || (spl[2] == "meta.superuser.com")) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/beta/sodark.css" class="--apng-checked">');
    
    })();
} else {}
