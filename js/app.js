// ========================================
// APP.JS
// Main Application Controller
// ========================================


// ========================================
// DOM ELEMENTS
// ========================================

const resumeInput = document.getElementById("resumeInput");

const styleSelect = document.getElementById("styleSelect");

const levelSelect = document.getElementById("levelSelect");

const techSelect = document.getElementById("techSelect");

const improveBtn = document.getElementById("improveBtn");

const clearBtn = document.getElementById("clearBtn");

const copyBtn = document.getElementById("copyBtn");

const regenerateBtn = document.getElementById("regenerateBtn");

const resultText = document.getElementById("resultText");

const wordCount = document.getElementById("wordCount");

const charCount = document.getElementById("charCount");


// ========================================
// INITIALIZE
// ========================================

document.addEventListener("DOMContentLoaded", init);

function init() {

    initializeUI();

    restoreForm();

    updateCounters();

    bindEvents();

}


// ========================================
// EVENTS
// ========================================

function bindEvents() {

    resumeInput.addEventListener("input", handleInput);

    improveBtn.addEventListener("click", handleImprove);

    clearBtn.addEventListener("click", clearForm);

    copyBtn.addEventListener("click", copyResult);

    regenerateBtn.addEventListener("click", regenerateResult);

}


// ========================================
// INPUT
// ========================================

function handleInput() {

    updateCounters();

    saveForm();

}


// ========================================
// COUNTERS
// ========================================

function updateCounters() {

    const text = resumeInput.value.trim();

    const words =
        text === ""
            ? 0
            : text.split(/\s+/).length;

    const chars = resumeInput.value.length;

    wordCount.textContent = `${words} Words`;

    charCount.textContent = `${chars} Characters`;

}


// ========================================
// STORAGE
// ========================================

function saveForm() {

    Storage.save("resumeForm", {

        input: resumeInput.value,

        style: styleSelect.value,

        level: levelSelect.value,

        technology: techSelect.value

    });

}


function restoreForm() {

    const data = Storage.load("resumeForm");

    if (!data) return;

    resumeInput.value = data.input || "";

    styleSelect.value = data.style || "Professional";

    levelSelect.value = data.level || "Student";

    techSelect.value = data.technology || "General";

}


// ========================================
// VALIDATION
// ========================================

function validateInput() {

    const text = resumeInput.value.trim();

    if (text === "") {

        showToast("Please enter a resume point.");

        return false;

    }

    if (text.length < 10) {

        showToast("Resume point is too short.");

        return false;

    }

    return true;

}


// ========================================
// AI
// ========================================

async function handleImprove() {

    if (!validateInput()) return;

    setLoading(

        improveBtn,

        "Improving..."

    );

    try {

        const improved = await improveResume({

            resumePoint:

                resumeInput.value,

            style:

                styleSelect.value,

            level:

                levelSelect.value,

            technology:

                techSelect.value

        });

        resultText.textContent = improved;

        Storage.save(

            "lastResult",

            improved

        );

        showToast(

            "Resume improved!"

        );

    }

    catch (error) {

        console.error(error);

        showToast(

            "Unable to connect to AI."

        );

    }

    finally {

        clearLoading(

            improveBtn

        );

    }

}


// ========================================
// REGENERATE
// ========================================

function regenerateResult() {

    handleImprove();

}


// ========================================
// COPY
// ========================================

async function copyResult() {

    const text = resultText.textContent.trim();

    if (

        text === "" ||

        text.includes("appear here")

    ) {

        showToast(

            "Nothing to copy."

        );

        return;

    }

    await copyToClipboard(text);

}


// ========================================
// CLEAR
// ========================================

function clearForm() {

    resumeInput.value = "";

    resultText.textContent =
        "Your AI-generated resume bullet will appear here.";

    updateCounters();

    Storage.remove("resumeForm");

    showToast(

        "Form cleared."

    );

}