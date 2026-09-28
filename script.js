const data=[
["▣","Website Development","Modern, fast and mobile-friendly websites that rank and perform better."],
["➤","Meta Ads (Facebook & Instagram)","Targeted ads to get you more leads, sales and brand awareness."],
["♧","Lead Generation","We bring real customers, not just traffic. Get quality leads for your business."],
["◉","WhatsApp Integration","Let your customers connect with you directly on WhatsApp."],
["▤","Booking System","Allow customers to book appointments easily online."],
["⚙","Digital Automation","Save time with smart automation and streamline your business."]
];
document.querySelector("#servicesGrid").innerHTML=data.map(x=>`<article class="service"><i>${x[0]}</i><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");
const root=document.documentElement,toggle=document.querySelector("#theme");
function theme(t){root.dataset.theme=t;localStorage.setItem("theme",t);toggle.textContent=t==="dark"?"☀":"☾"}
theme(localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
toggle.onclick=()=>theme(root.dataset.theme==="dark"?"light":"dark");
const nav=document.querySelector("#nav");document.querySelector("#menu").onclick=()=>nav.classList.toggle("open");
nav.querySelectorAll("a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
/* =========================================
   STATS NUMBER COUNT ANIMATION
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const statsSection = document.getElementById("stats");
    const counters = document.querySelectorAll(".counter");

    if (!statsSection || counters.length === 0) {
        return;
    }

    let hasAnimated = false;

    function startCounters() {

        if (hasAnimated) return;

        hasAnimated = true;

        counters.forEach(function (counter) {

            const target = parseInt(counter.getAttribute("data-target"));
            const suffix = counter.getAttribute("data-suffix") || "";

            let start = 0;
            const duration = 3500;
            const startTime = performance.now();

            function count(currentTime) {

                const elapsed = currentTime - startTime;

                const progress = Math.min(
                    elapsed / duration,
                    1
                );

                // Smooth ease-out
                const ease = 1 - Math.pow(1 - progress, 3);

                start = Math.floor(target * ease);

                counter.textContent = start + suffix;

                if (progress < 1) {
                    requestAnimationFrame(count);
                } else {
                    counter.textContent = target + suffix;
                }
            }

            requestAnimationFrame(count);
        });
    }


    /* Cursor stats section ke andar aaye */

    statsSection.addEventListener("mouseenter", startCounters);


    /* Agar cursor na bhi aaye, section screen par aaye
       to animation automatically start ho */

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    startCounters();
                }

            });

        },
        {
            threshold: 0.35
        }
    );

    observer.observe(statsSection);

});
