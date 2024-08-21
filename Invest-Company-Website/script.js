gsap.registerPlugin(ScrollTrigger);

// Logo Animation
gsap.from(".logo div", {
    opacity: 0,
    delay: 1,
    x: 20,
    duration: 1,
    ease: "power2.out",
});

// Menu Items Animation with Stagger and Background Color Change
const menu_items = document.querySelector(".menu-items");
gsap.from(menu_items.children, {
    opacity: 0,
    x: -50,
    duration: 1,
    delay: 1.5,
    stagger: {
        amount: 1,
        from: "center",
    },
    ease: "back.out(1.7)",
    onStart: () => {
        gsap.to(".nav-bar", { backgroundColor: "#1a1a1a", duration: 1 });
    },
});

// Star Elements Animation with Parallax Effect
gsap.utils.toArray(".star").forEach((star) => {
    gsap.fromTo(
        star,
        {
            rotation: 450,
            opacity: 0,
            y: 100,
        },
        {
            rotation: 0,
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.5,
            scrollTrigger: {
                trigger: star,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

// Title Animation with Skew and Bounce
gsap.utils.toArray(".title").forEach((title) => {
    gsap.fromTo(
        title,
        {
            letterSpacing: "10px",
            opacity: 0,
            x: 300,
            skewX: 65,
        },
        {
            letterSpacing: "0",
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: 0.5,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

// Paragraph Animation with Subtle Color Shift
gsap.utils.toArray("p").forEach((p) => {
    gsap.fromTo(
        p,
        {
            opacity: 0,
            x: 150,
            skewX: 30,
        },
        {
            opacity: 1,
            x: 0,
            skewX: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
            backgroundColor: "rgba(255,255,255,0.05)",
            scrollTrigger: {
                trigger: p,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

// Button Fade-in with Bounce Effect on Hover
gsap.utils.toArray("button").forEach((button) => {
    gsap.fromTo(
        button,
        {
            opacity: 0,
            scale: 0.9,
        },
        {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: button,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        }
    );

    button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.in" });
    });
});

// Pyramid Scale-up Animation with Parallax Effect
gsap.from(".pyramid", {
    opacity: 0,
    scale: 0.5,
    duration: 1.5,
    delay: 0.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".pyramid",
        start: "top 70%",
        toggleActions: "play none none reverse",
    },
});

// Hand Image with Skew and Elastic Bounce
gsap.fromTo(
    ".hand",
    {
        scale: 0.2,
        opacity: 0,
        skewY: 30,
    },
    {
        scale: 1,
        opacity: 1,
        skewY: 0,
        duration: 1.5,
        ease: "elastic.out(1.5, 0.5)",
        scrollTrigger: {
            trigger: ".hand",
            start: "top 75%",
            toggleActions: "play none none reverse",
        },
    }
);

// Line Drawing Animation
gsap.utils.toArray(".line").forEach((line) => {
    gsap.fromTo(
        line,
        {
            opacity: 0,
            width: "0%",
        },
        {
            opacity: 1,
            width: "100%",
            duration: 1,
            delay: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: line,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

// Rotation Element Animation with Advanced Stagger
gsap.utils.toArray(".rotation").forEach((rotate) => {
    gsap.fromTo(
        rotate,
        {
            opacity: 0,
            rotation: 350,
            scale: 0.2,
        },
        {
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            delay: 1,
            scrollTrigger: {
                trigger: rotate,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        }
    );
});

// Card Fade-in with Dynamic Stagger
gsap.fromTo(
    ".card",
    {
        opacity: 0,
        scale: 0.1,
    },
    {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
        stagger: {
            amount: 1,
            from: "start",
        },
        scrollTrigger: {
            trigger: ".card",
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
    }
);

// Menu Items in Footer with Parallax Effect
const menu = document.querySelector(".menu");

gsap.from(menu.children, {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.5,
    stagger: {
        amount: 1,
    },
    ease: "power3.out",
    scrollTrigger: {
        trigger: menu.children,
        start: "top 85%",
        toggleActions: "play none none reverse",
    },
});

// String Interaction with Enhanced Hover Effects
var initialPath = "M 0 100 Q 500 100 1000 100";
var string = document.querySelector("#string");
var pathElement = string.querySelector("path");

string.addEventListener("mousemove", function (dets) {
    var rect = string.getBoundingClientRect();
    var xPos = dets.clientX - rect.left;
    var yPos = dets.clientY - rect.top;

    var path = `M 0 100 Q ${xPos} ${yPos} 1000 100`;

    gsap.to(pathElement, {
        attr: { d: path },
        stroke: "cyan",
        strokeWidth: 2,
        duration: 0.2,
        ease: "power3.out",
    });
});

string.addEventListener("mouseleave", function () {
    gsap.to(pathElement, {
        attr: { d: initialPath },
        stroke: "white",
        strokeWidth: 2,
        duration: 1.5,
        ease: "elastic.out(1.2, 0.4)",
    });
});

string.addEventListener("mouseenter", function () {
    gsap.fromTo(
        pathElement,
        { scaleX: 1.02 },
        { scaleX: 1, duration: 0.5, ease: "bounce.out" }
    );
});
