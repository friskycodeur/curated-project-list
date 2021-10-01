const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const occasion = "25 Dec 2021";

function countDown() {
    const eventDate = new Date(occasion);
    const currentDate = new Date();
    const totalSecs = (eventDate - currentDate) / 1000;
    const Days = Math.floor(totalSecs / 3600 / 24);
    const Hours = Math.floor(totalSecs / 3600) % 24;
    const Mins = Math.floor(totalSecs / 60) % 60;
    const Secs = Math.floor(totalSecs) % 60;

    daysEl.innerHTML = Days;
    hoursEl.innerHTML = formatTime(Hours);
    minsEl.innerHTML = formatTime(Mins);
    secsEl.innerHTML = formatTime(Secs);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);

// Snow Config
particlesJS("particles-js", {
    particles: {
        number: {
            value: 500,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable_auto: false,
            distance: 100,
            color: "#fff",
            opacity: 0,
            width: 1,
            condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
            },
        },
        move: {
            enable: true,
            speed: 5,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
            },
            onclick: {
                enable: false,
            },
            resize: true,
        },
    },
    retina_detect: true,
});
