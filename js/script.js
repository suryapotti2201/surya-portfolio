// =========================================================
// Surya Potti Portfolio JavaScript
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const topButton = document.getElementById("topButton");
    const year = document.getElementById("year");
    const themeToggle = document.getElementById("themeToggle");

    // Current year
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Mobile navigation
    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("hidden");
            menuButton.innerHTML = navMenu.classList.contains("hidden")
                ? '<i class="fa-solid fa-bars" aria-hidden="true"></i>'
                : '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.add("hidden");
                menuButton.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
            });
        });
    }



    // Theme toggle
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
    }

    const updateThemeButton = () => {
        if (!themeToggle) return;

        const isLight = document.body.classList.contains("light-mode");
        themeToggle.innerHTML = isLight
            ? '<i class="fa-solid fa-moon" aria-hidden="true"></i>'
            : '<i class="fa-solid fa-sun" aria-hidden="true"></i>';

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark mode" : "Switch to light mode"
        );
        themeToggle.setAttribute(
            "title",
            isLight ? "Switch to dark mode" : "Switch to light mode"
        );
    };

    updateThemeButton();

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");

            const isLight = document.body.classList.contains("light-mode");
            localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");

            updateThemeButton();
        });
    }

        // Reveal sections/cards while scrolling
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => observer.observe(element));

    // Back-to-top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Highlight navigation item based on current section
    const sections = document.querySelectorAll("main section[id]");

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");

                        if (link.getAttribute("href") === `#${entry.target.id}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    sections.forEach(section => sectionObserver.observe(section));

    // Flip on touch and keyboard, while pointer hover is handled by CSS.
    const flipCards = document.querySelectorAll(".flip-card, .project-flip-card");

    flipCards.forEach(card => {
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Show details for ${card.querySelector("h3")?.textContent?.trim() || "card"}`);
        card.setAttribute("aria-pressed", "false");

        const toggleCard = () => {
            const flipped = card.classList.toggle("flipped");
            card.setAttribute("aria-pressed", String(flipped));
            card.setAttribute("aria-label", `${flipped ? "Hide" : "Show"} details for ${card.querySelector("h3")?.textContent?.trim() || "card"}`);
        };

        card.addEventListener("click", event => {
            if (event.target.closest("a, button")) return;
            if (window.matchMedia("(hover: none)").matches) toggleCard();
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleCard();
            }
        });
    });
});



// Portfolio upgrade interactions
(function(){
  const roles=['Java Full Stack Developer','Java Backed Developer', 'Java Developer', 'Spring Boot Developer',
        'Microservices Developer','Backend Engineer'];
  const role=document.getElementById('heroRole');
  if(role && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    let i=0,pos=0,deleting=false;
    function type(){const word=roles[i]; role.textContent=word.slice(0,pos);
      if(!deleting){pos++; if(pos>word.length){deleting=true;setTimeout(type,1300);return}}
      else{pos--;if(pos===0){deleting=false;i=(i+1)%roles.length}}
      setTimeout(type,deleting?45:80)} type();
  } const bar=document.querySelector('.scroll-progress');
  if(bar){const update=()=>{const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?(scrollY/max)*100:0)+'%'};addEventListener('scroll',update,{passive:true});update()}
})();

// Animate hero-card numbers once when the page opens.
function animateHeroNumbers() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const numbers = document.querySelectorAll(
        ".hero-card > .accent-text, .hero-card strong"
    );

    numbers.forEach(element => {
        if (element.dataset.animated === "true") return;

        const originalText = element.textContent.trim();
        const match = originalText.match(/^(\d+(?:\.\d+)?)(.*)$/);

        if (!match) return;

        element.dataset.animated = "true";

        const target = Number(match[1]);
        const suffix = match[2];
        const decimals = (match[1].split(".")[1] || "").length;
        const duration = 1600;
        let startTime;

        element.textContent = (0).toFixed(decimals) + suffix;

        function updateNumber(timestamp) {
            if (startTime === undefined) startTime = timestamp;

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            // Slow down smoothly as the number reaches its target.
            const easedProgress = 1 - Math.pow(1 - progress, 3);

            element.textContent =
                (target * easedProgress).toFixed(decimals) + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = originalText;
            }
        }

        requestAnimationFrame(updateNumber);
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        animateHeroNumbers,
        { once: true }
    );
} else {
    animateHeroNumbers();
}