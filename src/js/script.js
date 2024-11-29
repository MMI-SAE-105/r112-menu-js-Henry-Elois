const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const body = document.body;

toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
const isClosed = !isOpen;
    nav.ariaHidden = isOpen
  toggle.ariaExpanded = isClosed
   body.classList.toggle("noscroll", isClosed);
});

<a href="../fr/index.html" onclick="document.cookie = 
`nf_lang=fr; path=/ ; SameSite=Strict`
"></a>