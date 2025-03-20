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
# URL: https://genialabile.com/assets/scripts/footer.js
===============================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
    const footerBanner = document.getElementById("footer-info");
    const footerContainer = document.getElementById("footer-content");

    let lastScrollY = 0;
    let isFooterVisible = false;
    let scrollingTimeout;

    async function fetchFooterContent() {
        try {
            const response = await fetch('https://genialabile.com/footer.html');
            if (!response.ok) throw new Error('Failed to fetch footer content');
            const data = await response.text();
            footerContainer.innerHTML = data;
        } catch (error) {
            console.error('Error fetching footer:', error);
        }
    }

    function handleScroll() {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.body.offsetHeight;

        const atPageBottom = scrollY + viewportHeight >= documentHeight - 20;
        const atPageTop = scrollY <= 5;
        const scrollingDown = scrollY > lastScrollY;

        clearTimeout(scrollingTimeout);

        if (atPageBottom && !isFooterVisible) {
            footerBanner.classList.add("active");
            isFooterVisible = true;
        }

        if (atPageTop && isFooterVisible && scrollingDown) {
            footerBanner.classList.remove("active");
            isFooterVisible = false;
        }

        scrollingTimeout = setTimeout(() => {
            if (!atPageBottom && scrollingDown) {
                footerBanner.classList.remove("active");
                isFooterVisible = false;
            }
        }, 150); // Mobile X-Speed

        lastScrollY = scrollY;
    }

    function addTouchSupport() {
        let touchStartY = 0;
        let touchEndY = 0;

        window.addEventListener("touchstart", (e) => {
            touchStartY = e.touches[0].clientY;
        });

        window.addEventListener("touchmove", (e) => {
            touchEndY = e.touches[0].clientY;

            if (touchEndY < touchStartY && !isFooterVisible) {
                footerBanner.classList.add("active");
                isFooterVisible = true;
            } else if (touchEndY > touchStartY && isFooterVisible) {
                footerBanner.classList.remove("active");
                isFooterVisible = false;
            }
        });
    }
    // Mobile X-Design
    const disappearSpeed = window.innerWidth < 768 ? 350 : 500;
    const appearSpeed = disappearSpeed * 0.9;

    footerBanner.style.transition = `
        transform ${disappearSpeed}ms ease-in-out, 
        opacity ${appearSpeed}ms ease-in-out
    `;
    
    fetchFooterContent();
    window.addEventListener("scroll", handleScroll);
    addTouchSupport();
    handleScroll();
});

// ===================================
// Shadow Footer Runners
// ===================================
document.addEventListener('scroll', function () {
    const footer = document.querySelector('footer');
    const body = document.body;
    const html = document.documentElement;

    // Altezza totale della pagina
    const documentHeight = Math.max(body.scrollHeight, html.scrollHeight);
    const viewportHeight = window.innerHeight;

    // Posizione attuale dello scroll
    const scrollPosition = window.scrollY + viewportHeight;

    // Aggiunge o rimuove la classe "no-shadow" se sei al fondo
    if (scrollPosition >= documentHeight) {
        footer.classList.add('no-shadow'); // Rimuove ombra
    } else {
        footer.classList.remove('no-shadow'); // Mostra ombra
    }
});