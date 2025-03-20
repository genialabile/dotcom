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
# Version: v3.2 COMPILER (190125)
# URL: https://genialabile.com/assets/scripts/preloader.js
===============================================================================
*/

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const fadeDelay = 2000;

    setTimeout(() => {
        //
        preloader.classList.add("hidden");
        //
        setTimeout(() => {
            document.body.classList.add("visible");
        }, 500);
    }, fadeDelay);
});