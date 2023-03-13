"use strict";

jQuery(document).ready(function($) {

    /* Menü-Button bekommt seine Logik */
    $("#toggle-button").click(function() {
        $(".page").toggleClass("mobile-nav-opened");
        $(".mobile-nav").toggleClass("mobile-nav-closed");
    });

    $(".page").click(function(event) {
        if ($(event.target).hasClass("navbar-toggler") || $(event.target).parent().hasClass("navbar-toggler")) {
            return false;
        };

        $(".page").removeClass("mobile-nav-opened");
        $(".mobile-nav").addClass("mobile-nav-closed");
    });

    /* more-Buttons bekommen hier ihre Logik zugewiesen */
    $(".moreButton").click(function() {
        let buttonID = $(this).attr("id");
        
        if (buttonID == "home-section") {
            document.getElementById("box-text-0").innerText = "Box-Fenster Home";
            document.getElementById("box-text-1").innerText = "Fenster öffnen auf der selben Seite";
            document.getElementById("box-text-2").innerText = "Per div-Box (deshalb haben wir es Boxfenster genannt) öffnen sich alle Fenster bei Klick auf den Weiter-Button bzw. Mehr-Lesen o.ä. Dieses Öffnen der Fenster funktioniert nur per CSS und ganz ohne Javascript.";
            document.getElementById("box-text-3").innerText = "Fenster Abdunklung";
            document.getElementById("box-text-4").innerText = "Ab einer gewissen Breite des Displays bzw. Bildschirms sind die Box-Fenster nicht mehr füllend in der Breite und Höhe, sondern wir haben diese horizontal und vertikal mittig zentriert mit einem Abstand zum Rand und als kleinen Hingucker noch dabei den Hintergrund abgedunkelt, damit die Fenster sich noch mehr abheben, gerade bei einem One-Pager ein durchaus wertvoller Aspekt.";
        } else if (buttonID == "aboutus-section") {
            document.getElementById("box-text-0").innerText = "Box-Fenster Über uns";
            document.getElementById("box-text-1").innerText = "Unter-Überschrift für Über uns";
            document.getElementById("box-text-2").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            document.getElementById("box-text-3").innerText = "Unter-Unter-Überschrift für Über uns";
            document.getElementById("box-text-4").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        } else if(buttonID == "technic-section") {
            document.getElementById("box-text-0").innerText = "Box-Fenster Technik";
            document.getElementById("box-text-1").innerText = "Unter-Überschrift für Technik";
            document.getElementById("box-text-2").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            document.getElementById("box-text-3").innerText = "Unter-Unter-Überschrift für Technik";
            document.getElementById("box-text-4").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        } else if(buttonID == "contact-section") {
            document.getElementById("box-text-0").innerText = "Box-Fenster die Anfahrt";
            document.getElementById("box-text-1").innerText = "Unter-Überschrift für die Anfahrt";
            document.getElementById("box-text-2").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            document.getElementById("box-text-3").innerText = "Unter-Unter-Überschrift für die Anfahrt";
            document.getElementById("box-text-4").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        } else if (buttonID == "performance-section") {
            document.getElementById("box-text-0").innerText = "Box-Fenster unsere Leistungen";
            document.getElementById("box-text-1").innerText = "Unter-Überschrift für unsere Leistungen";
            document.getElementById("box-text-2").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            document.getElementById("box-text-3").innerText = "Unter-Unter-Überschrift für unsere Leistungen";
            document.getElementById("box-text-4").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        } else if(buttonID == "informations-section") {
            document.getElementById("box-text-0").innerText = "Box-Fenster Informationen";
            document.getElementById("box-text-1").innerText = "Unter-Überschrift für Informationen";
            document.getElementById("box-text-2").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            document.getElementById("box-text-3").innerText = "Unter-Unter-Überschrift für Informationen";
            document.getElementById("box-text-4").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        };

        $(".box-window").removeClass("box-window-closed");
        $(".black-background").removeClass("black-background-hide");
    });

    /* x-button bekommt hier seine logik zugeweisen */
    $(".x-button").click(function() {
        $(".box-window").addClass("box-window-closed");
        $(".box-window-foto-gallery").addClass("box-window-closed");
        $(".black-background").addClass("black-background-hide");
    });

    /* Foto-Gallerie */
    let imgPath = "";
    let bgImg = "";
    const images = [
        "./img/foto-gallery/foto-gallerie-bild-1.jpg", 
        "./img/foto-gallery/foto-gallerie-bild-2.jpg", 
        "./img/foto-gallery/foto-gallerie-bild-3.jpg", 
        "./img/foto-gallery/foto-gallerie-bild-4.jpg", 
        "./img/foto-gallery/foto-gallerie-bild-5.jpg"
    ];

    $(".fotoGallery").click(function() {
        $(".box-window-foto-gallery").removeClass("box-window-closed");
        $(".black-background").removeClass("black-background-hide");
    });

    function showImage(imgPath) {
        $(".big-img").css("background-image", "url(" + imgPath + ")");
        const image = $(".box-window-content img[src='" + imgPath + "']")[0];
        const imageDescription = image.getAttribute("data-description");
        document.getElementById("picture-signature").innerText = imageDescription;
    };

    $(".box-window-foto-gallery img").click(function() {
        imgPath = $(this).attr("src");

        if (images.indexOf(imgPath) !== -1) {
            $(".big-img").removeClass("big-img-hide");
            $(".black-background-img").removeClass("black-background-img-hide");

            showImage(imgPath);
        };
    });

    function getNextImagePath(direction) {
        bgImg =  $(".big-img")
                    .css("background-image")
                    .split('"');

        const splittedImgPath = bgImg[1].split("/");
        let formattedImgPath = [];
        
        let toImg = false;
        for (let i = 0; i < splittedImgPath.length; i++) {
            if (splittedImgPath[i] === "img") {
                formattedImgPath.push(splittedImgPath[i]);
                toImg = true;
            }
            else if (toImg) {
                formattedImgPath.push(splittedImgPath[i]);
            };
        };
        imgPath = "./" + formattedImgPath.join("/");
        
        for (let i = 0; i < images.length; i++) {
            if (imgPath == images[i]) {
                if (direction === "right" && imgPath == images[images.length - 1]) {
                    return images[0];
                }
                else if (direction === "right") {
                    return images[i+1];
                }
                else if (direction === "left" && imgPath == images[0]) {
                    return images[images.length - 1];
                } else {
                    return images[i-1];
                };
            };
        };
    };

    $("#right-next-button").click(function() {
        showImage(getNextImagePath("right"));
    });

    $("#left-next-button").click(function() {
        showImage(getNextImagePath("left"));
    });

    $("#big-img-x-button").click(function() {
        $(".big-img").addClass("big-img-hide");
        $(".black-background-img").addClass("black-background-img-hide");
    });

    /* Der upButton bekommt hier seine Logik */
    window.addEventListener("scroll", function() {
        if (this.pageYOffset > 100) {
            $("#upButton").removeClass("upButton-hide");
        } else {
            $("#upButton").addClass("upButton-hide");
        };
    });

    /* Smooth-Scrolling Animation */
    $('a[href^="#"]').on('click',function(e) {
        e.preventDefault();
        let target = this.hash;
        let $target = $(target);
        $('html, body').stop().animate({
         'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
         window.location.hash = target;
        });
    });

});