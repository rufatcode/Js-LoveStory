$(document).ready(function(){
    $(".slideShow, body").vegas({
        slides: [
            { src: "/img/forget1.webp" },
            { src: "/img/forget2.jpeg" },
            { src: "/img/forget3.jpeg" },
            { src: "/img/forget4.jpeg" },
            { src: "/img/forget5.jpeg" },
            { src: "/img/forget6.jpeg" }
        ],
        timer:false,
        delay:4000,
        transition: 'zoomOut2',
    });
});