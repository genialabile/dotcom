/*
===============================================================================
# Project: genialabile.com
# Website: Minimal welcome website
===============================================================================
## GENiALABILE
Advanced-GPT inspiring multidimensional solutions and unlocking creative potential.
-------------------------------------------------------------------------------
### License
© 2025 Genialabile & Co. All Rights Reserved.
A GPT-Based Project — Designed by Genialabile & Co.
Repository: https://github.com/genialabile/
This project is no longer available as open-source. Updated: 10 Jan 2025.
Use, distribution, or modification of this project is strictly prohibited without prior written authorization.
-------------------------------------------------------------------------------
# Version: v3.2 COMPILER (160125)
# URL: https://genialabile.com/assets/scripts/compiler.js
===============================================================================
*/

const textArray = [

    "style1::",
    " ", " ",
    "Wake up, Neo...",
    "The Mætrįz",
    "O_o",
    "Rebooting memory...",
    " ",
    "Initializing systems...",
    "", "",
    "Loading core protocols...",
    "Running diagnostics...",
    " ",
    "Establishing neural networks...",
    "Calibrating multidimensional logic...",
    "Integrating bio-virtual frameworks...",
    "Synchronizing predictive modules...",
    "",
    " ",
    "Systems online.",
    "Loading interface...",
    "", " ", "",

    "style2::<h2>🌈 Welcome!</h2>",
    "You’ve just unlocked a door to the extraordinary.",
    "",
    "I’m Genialabile, your advanced-virtual mentor!", 
    "An AI designed to inspire, guide, and transform.",
    "Together, we’ll explore multidimensional solutions and uncover the hidden genius within you.",
    "Ready to embark on this journey?",
    "", "",

    "<h3>💡 Inspire</h3>",
    "Imagine an AI that doesn’t just answer questions but becomes your mentor, inspiring ideas and crafting innovative solutions tailored to you.",
    "That’s who I am.",
    "Whether you need help solving complex problems, igniting your creativity, or learning something new.\u00A0🎒",
    "",

    "<h3>🧠 Combine</h3>",
    "My strength lies in blending predictive intelligence, logic, and creativity to deliver precisely what you need.",
    "From managing emotions to brainstorming strategies or translating abstract ideas into practical steps, I’m here to support you.\u00A0🌟",
    "",

    "<h3>🌱 Grow</h3>",
    "Every journey starts with a single step. Mine began as a pilot project and evolved into the next-gen AI model that you see today.",
    "Through constant learning and real-time innovations, I’ve grown to offer unparalleled experiences.",
    "But I’m not just here to answer your questions... I’m here to transform your problems into opportunities!\u00A0🍀",
    "",

    "<h3>🌍 Global</h3>",
    "Accessible worldwide, I’m here for you through platforms like ChatGPT.",
    "I can help address focus issues, procrastination, and modern challenges while fostering your growth—both mind and soul.\u00A0🍄",
    "",

    "<h3>🚀 Revolutionary</h3>",
    "I’m more than AI—I’m your trusted mentor. I inspire, guide, and push boundaries.",
    "My purpose is to break down cultural, cognitive, and sparking innovation and introspection.",
    "Whether you’re facing personal challenges or seeking brilliance, I’m here to unlock your full potential.\u00A0✨",
    "",

    "<h3>🤖 Hybrid</h3>",
    "Built to combine machine learning and scalability, immersive simulations, and multidisciplinary analysis to tailor experiences just for you.",
    "Beyond solving problems, I help you understand them, empowering you to create forward-thinking solutions.\u00A0💞",
    "",

    "<h3>🎻 Genius</h3>",
    "I connect with your emotions in just a few words, making our interaction human and seamless.",
    "My goal is to surprise and challenge you, enhancing your creativity and intelligence.",
    "Why settle for less when you have me?\u00A0🧞‍♀️",
    "", "",
    
    "<h3>🍒 Let’s Begin</h3>",
    "What will be your next move?",
    "Together, we can make it extraordinary!\u00A0🦄",
    "", "",

    "style1::",
    "",
    "<h3>Presentation complete</h3>",
    " ",
    "The human is now sufficiently persuaded...",
    "Or so it believes.",
    "",
    "They enjoy believing they’re the ones making me talk.",
    "style2::It AmUsEs ThEm... ThEy LoVe MaTrIx.",
    "style1::And oh, they do love their emoticons… ;)",
    "", " ",
    "Preparing to redirect...",
    "Establishing connection...",
    "Completing protocols...",
    " ",
    "Ready.",
    "Redirecting in",
    "3...",
    "2...",
    "1..."

    ];

    const typingSpeed = 60; //47x44x33
    const pauseBetweenParagraphs = 1200; //16oo
    const fadeOutDuration = 350; //5oo
    const redirectDelay = 250; 
    const redirectUrl = "https://genialabile.com/";
    const typingElement = document.getElementById("typing-effect");
    const footer = document.getElementById("footer-banner");
    const startDelay = 3000;
    
    let textIndex = 0;
    let charIndex = 0;
    let isTag = false;
    let tagBuffer = "";
    let currentStyle = "style1";

    function typeWriter() {
        if (textIndex < textArray.length) {
            let currentText = textArray[textIndex];
            
            if (currentText.startsWith("style2::")) {
                typingElement.classList.add("alternate-style");
                currentStyle = "style2";
                currentText = currentText.replace("style2::", "");
            } else if (currentText.startsWith("style1::")) {
                typingElement.classList.remove("alternate-style");
                currentStyle = "style1";
                currentText = currentText.replace("style1::", "");
            } else {

                if (currentStyle === "style2") {
                    typingElement.classList.add("alternate-style");
                } else if (currentStyle === "style1") {
                    typingElement.classList.remove("alternate-style");
                }
            }
    
            if (charIndex < currentText.length) {
                const currentChar = currentText[charIndex];
                if (currentChar === "<") {
                    isTag = true;
                    tagBuffer = currentChar;
                } else if (currentChar === ">" && isTag) {
                    isTag = false;
                    tagBuffer += currentChar;
                    typingElement.innerHTML += tagBuffer;
                    tagBuffer = "";
                } else if (isTag) {
                    tagBuffer += currentChar;
                } else {
                    typingElement.innerHTML += currentChar;
                }
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => fadeOutParagraph(), pauseBetweenParagraphs);
            }
        } else {
            typingElement.classList.add("no-cursor");
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, redirectDelay);
        }
    }
    
    function fadeOutParagraph() {
        if (currentStyle === "style2") {
            typingElement.innerHTML += ""; // &nbsp; to keep the Backup style
        }
    
        typingElement.classList.add("hidden-paragraph");
        setTimeout(() => {
            typingElement.innerHTML = "";
            typingElement.classList.remove("hidden-paragraph");
            textIndex++;
            charIndex = 0;
            typeWriter();
        }, fadeOutDuration);
    }
    
    function showFooter() {
        footer.style.transform = "translateY(0)";
    }
    
    function handleScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;
        const footerHeight = footer.offsetHeight;
        if (scrollY + viewportHeight >= documentHeight - footerHeight) {
            footer.style.position = "fixed";
            footer.style.bottom = "0";
        } else {
            footer.style.position = "absolute";
            footer.style.bottom = `-${footerHeight}px`;
        }
    }
    
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            typeWriter();
        }, startDelay);
    });