(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

window.onload = function () {
    expandcollapse();
    menuCollapse();
};

function anchorLinkHandler(e) {
    var distanceToTop = function distanceToTop(el) {
        return Math.floor(el.getBoundingClientRect().top);
    };

    e.preventDefault();
    var targetID = this.getAttribute("href");
    var targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    var originalTop = distanceToTop(targetAnchor);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    var checkIfDone = setInterval(function () {
        var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

var linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(function (each) {
    return each.onclick = anchorLinkHandler;
});

function expandcollapse() {
    var arrow = document.querySelector('.side-menu__switch');
    var box = document.querySelector('.app-box');
    var sidemenu = document.querySelector('.side-menu');
    arrow.onclick = function () {
        arrow.classList.toggle('active');
        box.classList.toggle('active');
        sidemenu.classList.toggle('active');
    };
}

function menuCollapse() {
    var collapse = document.querySelector('.side-menu__collapse');
    collapse.onclick = function () {
        console.log(collapse);
        collapse.classList.toggle('active');
        var menu = document.querySelector('.side-menu__nav');
        console.log(menu);
        menu.classList.toggle('active');
    };
}

},{}]},{},[1]);
