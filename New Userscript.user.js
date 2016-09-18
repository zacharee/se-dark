// ==UserScript==
// @name         AUDARK
// @namespace    zachary@techyteen.tk
// @version      0.1
// @description  Dark theme for Ask Ubuntu
// @author       Zachary Wander
// @match        http://askubuntu.com/*
// @grant        none
// ==/UserScript==

(function() {
    $('head').append('<link rel="stylesheet" type="text/css" href="http://sedark.atwebpages.com/AskUbuntuDARK.css" class="--apng-checked">');
})();