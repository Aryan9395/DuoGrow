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