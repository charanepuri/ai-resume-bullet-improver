// ========================================
// UI.JS
// Handles all UI interactions
// ========================================

// ========================================
// DOM ELEMENTS
// ========================================

const themeToggle = document.getElementById("themeToggle");

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const toast = document.getElementById("toast");


// ========================================
// INITIALIZE UI
// ========================================

function initializeUI() {

    initializeTheme();

    initializeNavigation();

}


// ========================================
// THEME
// ========================================

function initializeTheme() {

    const savedTheme = Storage.load("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        setThemeIcon(true);

    }

    else {

        document.body.classList.remove("dark");

        setThemeIcon(false);

    }

    themeToggle.addEventListener("click", toggleTheme);

}


function toggleTheme() {

    const isDark =
        document.body.classList.toggle("dark");

    Storage.save(
        "theme",
        isDark ? "dark" : "light"
    );

    setThemeIcon(isDark);

}


function setThemeIcon(isDark) {

    themeToggle.innerHTML = isDark

        ? '<i class="fa-solid fa-sun"></i>'

        : '<i class="fa-solid fa-moon"></i>';

}


// ========================================
// MOBILE NAVIGATION
// ========================================

function initializeNavigation() {

    if (!menuBtn) return;

    menuBtn.addEventListener(
        "click",
        toggleNavigation
    );

    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                closeNavigation
            );

        });

    document.addEventListener(
        "click",
        outsideNavigationClick
    );

}


function toggleNavigation(event) {

    event.stopPropagation();

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.className =
            "fa-solid fa-xmark";

    }

    else {

        icon.className =
            "fa-solid fa-bars";

    }

}


function closeNavigation() {

    navLinks.classList.remove("active");

    const icon =
        menuBtn.querySelector("i");

    icon.className =
        "fa-solid fa-bars";

}


function outsideNavigationClick(event) {

    if (

        !menuBtn.contains(event.target)

        &&

        !navLinks.contains(event.target)

    ) {

        closeNavigation();

    }

}


// ========================================
// TOAST
// ========================================

function showToast(

    message,

    duration = 2500

) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, duration);

}


// ========================================
// LOADING STATE
// ========================================

function setLoading(

    button,

    loadingText = "Loading..."

) {

    button.disabled = true;

    button.dataset.originalText =
        button.innerHTML;

    button.innerHTML =

        `<i class="fa-solid fa-spinner fa-spin"></i> ${loadingText}`;

}


function clearLoading(button) {

    button.disabled = false;

    button.innerHTML =
        button.dataset.originalText;

}


// ========================================
// COPY TO CLIPBOARD
// ========================================

async function copyToClipboard(text) {

    try {

        await navigator.clipboard.writeText(text);

        showToast(
            "Copied to clipboard!"
        );

        return true;

    }

    catch (error) {

        console.error(error);

        showToast(
            "Copy failed."
        );

        return false;

    }

}


// ========================================
// BUTTON STATE
// ========================================

function disableButton(button) {

    button.disabled = true;

}


function enableButton(button) {

    button.disabled = false;

}


// ========================================
// SMOOTH SCROLL
// ========================================

function scrollToElement(id) {

    const element =
        document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}