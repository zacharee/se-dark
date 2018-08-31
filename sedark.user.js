// ==UserScript==
// @name         SEDARK
// @namespace    zachary@techyteen.tk
// @version      0.4.1b
// @description  Dark theme for Stack Exchange
// @author       Zachary Wander

// @include      *://askubuntu.com/*
// @include      *://meta.askubuntu.com/*
// @include      *://stackoverflow.com/*
// @include      *://meta.stackoverflow.com/*
// @include      *://chat.stackexchange.com/*

// @grant        none
// ==/UserScript==

/*global jQuery*/

const str = window.location.href;

const spl = str.split("/");

const sites = [
    "askubuntu.com",
    "meta.askubuntu.com",
    "stackoverflow.com",
    "meta.stackoverflow.com",
    "serverfault.com",
    "meta.serverfault.com",
    "superuser.com",
    "meta.superuser.com",
    "math.stackexchange.com",
    "meta.math.stackexchange.com",
    "photo.stackexchange.com",
    "meta.photo.stackexchange.com",
    "tex.stackexchange.com",
    "meta.tex.stackexchange.com",
    "unix.stackexchange.com",
    "meta.unix.stackexchange.com",
    "apple.stackexchange.com",
    "meta.apple.stackexchange.com",
    "judaism.stackexchange.com",
    "meta.judaism.stackexchange.com",
    "meta.stackexchange.com"
];

if (sites.includes(spl[2])) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/master/audark.css" class="--apng-checked">');
    
    })();
}
// else if ((spl[2] === "stackoverflow.com") || (spl[2] === "meta.stackoverflow.com")) {
//     (function() {
//         jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/master/sodark.css" class="--apng-checked">');
//
//     })();
// }
else if (spl[2] === "chat.stackexchange.com" || spl[2] === "chat.stackoverflow.com") {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/master/sechatdark.css" class="--apng-checked">');
    
    })();
} else {}
