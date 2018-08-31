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
// @include      *://serverfault.ccom/*
// @include      *://meta.serverfault.com/*
// @include      *://superuser.com/*
// @include      *://meta.superuser.com/*
// @include      *://math.stackexchange.com/*
// @include      *://meta.math.stackexchange.com/*
// @include      *://photo.stackexchange.com/*
// @include      *://meta.photo.stackexchange.com/*
// @include      *://tex.stackexchange.com/*
// @include      *://meta.text.stackexchange.com/*
// @include      *://unix.stackexchange.com/*
// @include      *://meta.unix.stackexchange.com/*
// @include      *://apple.stackexchange.com/*
// @include      *://meta.apple.stackexchange.com/*
// @include      *://judaism.stackexchange.com/*
// @include      *://meta.judaism.stackexchange.com/*
// @include      *://meta.stackexchange.com/*
// @include      *://chat.stackexchange.com/*
// @include      *://chat.stackoverflow.com/*

// @grant        none
// ==/UserScript==

/*global jQuery*/

const str = window.location.href;

const spl = str.split("/");

const sites = [
    'askubuntu.com',
    'meta.askubuntu.com',
    'stackoverflow.com',
    'meta.stackoverflow.com',
    'serverfault.com',
    'meta.serverfault.com',
    'superuser.com',
    'meta.superuser.com',
    'math.stackexchange.com',
    'meta.math.stackexchange.com',
    'photo.stackexchange.com',
    'meta.photo.stackexchange.com',
    'tex.stackexchange.com',
    'meta.tex.stackexchange.com',
    'unix.stackexchange.com',
    'meta.unix.stackexchange.com',
    'apple.stackexchange.com',
    'meta.apple.stackexchange.com',
    'judaism.stackexchange.com',
    'meta.judaism.stackexchange.com',
    'meta.stackexchange.com'
];

if (sites.includes(spl[2])) {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/master/audark.css" class="--apng-checked">');
    
    })();
} else if (spl[2] === "chat.stackexchange.com" || spl[2] === "chat.stackoverflow.com") {
    (function() {
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/zacharee/se-dark/master/sechatdark.css" class="--apng-checked">');
    
    })();
}
