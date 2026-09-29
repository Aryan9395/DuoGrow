/*
====================================================
DUOGROW LEAD POPUP
====================================================

Features:
- 30 seconds ke baad popup
- 90% scroll par popup
- Close button
- Mobile responsive
- DuoGrow dark/green design
- Google Sheet / Apps Script ready
- Success message

IMPORTANT:
YOUR_GOOGLE_APPS_SCRIPT_URL ko baad me
apne Google Apps Script Web App URL se replace karo.
====================================================
*/

(function () {

    "use strict";

    // ==========================================
    // GOOGLE SHEET / APPS SCRIPT URL
    // ==========================================

    const APPS_SCRIPT_URL =
        "YOUR_GOOGLE_APPS_SCRIPT_URL";


    // ==========================================
    // POPUP CSS
    // ==========================================

    const popupCSS = `

    #dgLeadPopup,
    #dgLeadPopup * {
        box-sizing: border-box;
    }

    #dgLeadPopup {

        position: fixed;
        inset: 0;

        z-index: 999999;

        display: none;

        align-items: center;
        justify-content: center;

        padding: 20px;

        background: rgba(0, 10, 7, 0.82);

        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

    }


    #dgLeadPopup.dg-show {

        display: flex;

        animation: dgFadeIn 0.3s ease;

    }


    .dg-popup-box {

        position: relative;

        width: 100%;
        max-width: 500px;

        max-height: 92vh;

        overflow-y: auto;

        padding: 32px;

        background: #061c15;

        color: #ffffff;

        border:
        1px solid rgba(114,255,50,0.28);

        border-radius: 22px;

        box-shadow:
        0 0 35px rgba(114,255,50,0.10),
        0 25px 80px rgba(0,0,0,0.55);

        font-family:
        Inter,
        Arial,
        sans-serif;

        animation:
        dgZoomIn 0.35s ease;

    }


    .dg-label {

        display: inline-block;

        color: #72ff32;

        font-size: 11px;

        font-weight: 800;

        letter-spacing: 1.5px;

        margin-bottom: 8px;

    }


    .dg-popup-box h2 {

        margin:
        0 35px 8px 0;

        font-size: 29px;

        line-height: 1.15;

        color: #ffffff;

    }


    .dg-description {

        margin:
        0 0 20px;

        color: #9ab8ae;

        font-size: 14px;

        line-height: 1.6;

    }


    /* CLOSE BUTTON */

    .dg-close {

        position: absolute;

        top: 14px;
        right: 15px;

        width: 36px;
        height: 36px;

        border:
        1px solid rgba(255,255,255,0.10);

        border-radius: 50%;

        color: #ffffff;

        background:
        rgba(255,255,255,0.07);

        font-size: 24px;

        cursor: pointer;

        transition: 0.25s ease;

    }


    .dg-close:hover {

        color: #72ff32;

        background:
        rgba(114,255,50,0.12);

        transform: rotate(90deg);

    }


    /* FORM */

    .dg-form {

        display: grid;

        gap: 12px;

    }


    .dg-form input,
    .dg-form select,
    .dg-form textarea {

        width: 100%;

        padding:
        14px 15px;

        border:
        1px solid rgba(255,255,255,0.12);

        border-radius: 10px;

        outline: none;

        color: #ffffff;

        background: #03140f;

        font: inherit;

        font-size: 14px;

        transition: 0.25s ease;

    }


    .dg-form input::placeholder,
    .dg-form textarea::placeholder {

        color: #78968d;

    }


    .dg-form select {

        color: #9ab8ae;

    }


    .dg-form input:focus,
    .dg-form select:focus,
    .dg-form textarea:focus {

        border-color:
        rgba(114,255,50,0.65);

        box-shadow:
        0 0 12px rgba(114,255,50,0.10);

    }


    .dg-form textarea {

        min-height: 90px;

        resize: vertical;

    }


    /* SUBMIT BUTTON */

    .dg-submit {

        width: 100%;

        padding:
        14px 18px;

        border: none;

        border-radius: 10px;

        background: #72ff32;

        color: #061c15;

        font: inherit;

        font-weight: 800;

        cursor: pointer;

        transition: 0.25s ease;

    }


    .dg-submit:hover {

        transform:
        translateY(-2px);

        box-shadow:
        0 8px 25px
        rgba(114,255,50,0.22);

    }


    .dg-submit:disabled {

        opacity: 0.65;

        cursor: wait;

    }


    /* STATUS */

    .dg-status {

        display: none;

        padding: 11px;

        border-radius: 9px;

        text-align: center;

        font-size: 13px;

    }


    .dg-success {

        display: block;

        color: #9dff7b;

        background:
        rgba(99,255,47,0.08);

        border:
        1px solid
        rgba(99,255,47,0.18);

    }


    .dg-error {

        display: block;

        color: #ffb0b0;

        background:
        rgba(255,70,70,0.08);

        border:
        1px solid
        rgba(255,70,70,0.18);

    }


    /* ANIMATION */

    @keyframes dgFadeIn {

        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }

    }


    @keyframes dgZoomIn {

        from {

            opacity: 0;

            transform:
            scale(0.88);

        }

        to {

            opacity: 1;

            transform:
            scale(1);

        }

    }


    /* MOBILE */

    @media(max-width:600px) {

        #dgLeadPopup {

            padding: 14px;

        }


        .dg-popup-box {

            padding:
            25px 19px;

            border-radius:
            18px;

        }


        .dg-popup-box h2 {

            font-size:
            24px;

        }

    }

    `;


    // ==========================================
    // POPUP HTML
    // ==========================================

    const popupHTML = `

    <div
        id="dgLeadPopup"
        aria-hidden="true"
    >

        <div
            class="dg-popup-box"
            role="dialog"
            aria-modal="true"
        >

            <button
                type="button"
                class="dg-close"
                id="dgClose"
                aria-label="Close"
            >

                &times;

            </button>


            <span class="dg-label">

                LET'S CONNECT

            </span>


            <h2>

                Ready to Grow Your Business?

            </h2>


            <p class="dg-description">

                Tell us what you need and
                our team will contact you shortly.

            </p>


            <form
                id="dgLeadForm"
                class="dg-form"
            >


                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autocomplete="name"
                    required
                >


                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    autocomplete="tel"
                    required
                >


                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autocomplete="email"
                    required
                >


                <select
                    name="service"
                    required
                >

                    <option value="">
                        Select Service
                    </option>

                    <option value="Website Development">
                        Website Development
                    </option>

                    <option value="Meta Ads">
                        Meta Ads
                    </option>

                    <option value="Google Ads">
                        Google Ads
                    </option>

                    <option value="SEO">
                        SEO
                    </option>

                    <option value="Graphic Design">
                        Graphic Design
                    </option>

                    <option value="Video Editing">
                        Video Editing
                    </option>

                    <option value="Lead Generation">
                        Lead Generation
                    </option>

                    <option value="Automation">
                        Automation
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>


                <textarea
                    name="message"
                    placeholder="Tell us about your requirement"
                    rows="3"
                ></textarea>


                <button
                    type="submit"
                    class="dg-submit"
                    id="dgSubmit"
                >

                    Get Free Consultation →

                </button>


                <div
                    id="dgStatus"
                    class="dg-status"
                ></div>


            </form>

        </div>

    </div>

    `;


    // ==========================================
    // ADD CSS TO WEBSITE
    // ==========================================

    const style =
        document.createElement("style");

    style.textContent =
        popupCSS;

    document.head.appendChild(style);


    // ==========================================
    // ADD POPUP HTML
    // ==========================================

    document.body.insertAdjacentHTML(
        "beforeend",
        popupHTML
    );


    // ==========================================
    // ELEMENTS
    // ==========================================

    const popup =
        document.getElementById(
            "dgLeadPopup"
        );


    const closeBtn =
        document.getElementById(
            "dgClose"
        );


    const form =
        document.getElementById(
            "dgLeadForm"
        );


    const submitBtn =
        document.getElementById(
            "dgSubmit"
        );


    const statusBox =
        document.getElementById(
            "dgStatus"
        );


    // ==========================================
    // POPUP STATUS
    // ==========================================

    let popupShown =
        sessionStorage.getItem(
            "dgLeadPopupShown"
        ) === "1";


    // ==========================================
    // SHOW POPUP
    // ==========================================

    function showPopup() {

        if (popupShown) {

            return;

        }


        popupShown = true;


        sessionStorage.setItem(
            "dgLeadPopupShown",
            "1"
        );


        popup.classList.add(
            "dg-show"
        );


        popup.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    // ==========================================
    // CLOSE POPUP
    // ==========================================

    function closePopup() {

        popup.classList.remove(
            "dg-show"
        );


        popup.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    // Close button

    closeBtn.addEventListener(
        "click",
        closePopup
    );


    // Background click

    popup.addEventListener(
        "click",
        function(event) {

            if (
                event.target === popup
            ) {

                closePopup();

            }

        }
    );


    // Escape key

    document.addEventListener(
        "keydown",
        function(event) {

            if (
                event.key === "Escape"
            ) {

                closePopup();

            }

        }
    );


    // ==========================================
    // 30 SECOND POPUP
    // ==========================================

    setTimeout(
        function() {

            showPopup();

        },
        30000
    );


    // ==========================================
    // 90% SCROLL POPUP
    // ==========================================

    window.addEventListener(
        "scroll",
        function() {

            if (popupShown) {

                return;

            }


            const scrollTop =
                window.scrollY;


            const windowHeight =
                window.innerHeight;


            const pageHeight =
                document.documentElement
                .scrollHeight;


            const percentage =

                (
                    (
                        scrollTop +
                        windowHeight
                    )
                    /
                    pageHeight
                )
                * 100;


            if (
                percentage >= 90
            ) {

                showPopup();

            }

        },

        {
            passive: true
        }

    );


    // ==========================================
    // FORM SUBMISSION
    // ==========================================

    form.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            // Check Google Sheet connection

            if (

                !APPS_SCRIPT_URL ||

                APPS_SCRIPT_URL ===
                "YOUR_GOOGLE_APPS_SCRIPT_URL"

            ) {

                statusBox.className =
                    "dg-status dg-error";


                statusBox.textContent =
                    "Google Sheet is not connected yet.";


                return;

            }


            // Loading state

            submitBtn.disabled =
                true;


            submitBtn.textContent =
                "Submitting...";


            statusBox.className =
                "dg-status";


            statusBox.textContent =
                "";


            const formData =
                new FormData(form);


            try {


                // Send lead to Google Apps Script

                await fetch(

                    APPS_SCRIPT_URL,

                    {

                        method: "POST",

                        body: formData,

                        mode: "no-cors"

                    }

                );


                // Success

                statusBox.className =
                    "dg-status dg-success";


                statusBox.textContent =
                    "✓ Thank you! Your enquiry has been submitted successfully.";


                form.reset();


                submitBtn.textContent =
                    "Submitted ✓";


                // Close popup after 4 seconds

                setTimeout(
                    function() {

                        closePopup();

                    },
                    4000
                );


            }

            catch(error) {


                statusBox.className =
                    "dg-status dg-error";


                statusBox.textContent =
                    "Something went wrong. Please try again.";


                submitBtn.disabled =
                    false;


                submitBtn.textContent =
                    "Get Free Consultation →";


            }


        }

    );


})();