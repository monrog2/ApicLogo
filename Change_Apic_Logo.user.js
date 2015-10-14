// ==UserScript==
// @name        Change Apic Logo
// @namespace   Cisco Systems Inc.
// @include     *
// @match       http://*/*
// @match       https://*/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @version     1
// @grant       none
// ==/UserScript==

console.log("================SCRIPT RUNNING+++++++++");

//Replace this link with a link to the desired logo image
var myLogo = "https://dl.dropboxusercontent.com/u/4075138/head_icon_simple_3col.png";


function changeLogo (jNode) {
    //No touchy
    console.log("================FOUND LOGO DIV+++++++++");

    //replaces Cisco logo with source image above
    jNode[0].innerHTML = '<div>' +
                            '<table width="100%">' +
                                '<tbody>' +
                                    '<tr>' +
                                        '<td>' +
                                            '<img class="toolbar-logo" style="padding-top:5; padding-left:10" width="76" height="42" src="'+ myLogo +'">' +
                                        '</td>' +
                                    '</tr>' +
                                '</tbody>' +
                            '</table>' +
                        '</div>' 
  
  
}
waitForKeyElements ("#app\\:ifc\\:root\\:main\\:top\\:navigation\\:a0", changeLogo);
