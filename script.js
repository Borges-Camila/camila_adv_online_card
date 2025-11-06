// ======== LANGUAGE SWITCH ========
const langSwitch = document.getElementById("lang-switch");

const translations = {
  pt: {
    name: "Camila Borges de Jesus",
    role: "Advogada",
    intro:
      "Advogada comprometida em oferecer soluções jurídicas com empatia, clareza e excelência. Atuo de forma dedicada para alcançar os resultados desejados, sempre buscando tornar o processo mais simples e humano.",
    contactTitle: "Entre em contato",
    whatsapp: "💬 Falar no WhatsApp",
    socialTitle: "Redes Sociais",
    footer: "© 2025 Camila Borges de Jesus | Todos os direitos reservados.",
  },
  en: {
    name: "Camila Borges de Jesus",
    role: "Lawyer",
    intro:
      "Lawyer committed to providing legal solutions with empathy, clarity, and excellence. I work with dedication to achieve the desired results, always striving to make the process simpler and more human.",
    contactTitle: "Get in touch",
    whatsapp: "💬 Chat on WhatsApp",
    socialTitle: "Social Media",
    footer: "© 2025 Camila Borges de Jesus | All rights reserved.",
  },
};

let currentLang = "pt";

langSwitch.addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  updateLanguage();
});

function updateLanguage() {
  const lang = translations[currentLang];

  document.getElementById("name").textContent = lang.name;
  document.getElementById("role").textContent = lang.role;
  document.getElementById("intro-text").textContent = lang.intro;
  document.getElementById("contact-title").textContent = lang.contactTitle;
  document.getElementById("whatsapp-btn").textContent = lang.whatsapp;
  document.getElementById("social-title").textContent = lang.socialTitle;
  document.querySelector("footer p").textContent = lang.footer;

  langSwitch.textContent = currentLang === "pt" ? "🇧🇷 PT" : "🇬🇧 EN";
}

// Initialize
updateLanguage();

// ======== FADE-IN ON SCROLL ========
const fadeElements = document.querySelectorAll(".fade-in");

function handleScroll() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll();
