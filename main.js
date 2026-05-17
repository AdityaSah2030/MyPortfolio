// Main JavaScript file for dynamically generating portfolio content and handling interactions

document.addEventListener('DOMContentLoaded', () => {
    // 1. Populate Dynamic Data
    
    // Hero section
    if (portfolioData.hero) {
        document.getElementById('nav-name').innerHTML = `${portfolioData.hero.name || ""}<span style="color: var(--accent)">.</span>`;
        document.getElementById('hero-tagline').textContent = portfolioData.hero.tagline || "";
        document.getElementById('hero-name').innerHTML = `${portfolioData.hero.name || ""}<span style="color: var(--accent)">.</span>`;
        document.getElementById('hero-role').textContent = portfolioData.hero.role || "";
        document.getElementById('hero-description').textContent = portfolioData.hero.description || "";
        document.getElementById('footer-name').textContent = portfolioData.hero.name || "";
    }

    // About section
    const aboutContainer = document.getElementById('about-content-container');
    if (portfolioData.about) {
        const aboutMapping = [
            { title: "🌱 Currently Learning", key: "currentlyLearning" },
            { title: "🔍 Exploring", key: "exploring" },
            { title: "👯 Looking to Collaborate", key: "lookingToCollaborate" },
            { title: "💬 Ask Me About", key: "askMeAbout" }
        ];

        aboutMapping.forEach(section => {
            const items = portfolioData.about[section.key];
            if(items && items.length > 0) {
                const card = document.createElement('div');
                card.className = 'about-card fade-in';
                card.innerHTML = `<h3>${section.title}</h3><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
                aboutContainer.appendChild(card);
            }
        });
    }

    // Skills section
    // Technical Skills section
    const skillsContainer = document.getElementById('skills-content-container');
    if (portfolioData.technicalSkills) {
        for (const [category, skillsList] of Object.entries(portfolioData.technicalSkills)) {
            if (skillsList.length > 0) {
                const skillCategory = document.createElement('div');
                skillCategory.className = 'skill-category fade-in';
                skillCategory.innerHTML = `
                    <h3>${category}</h3>
                    <div class="skills-grid">
                        ${skillsList.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                    </div>
                `;
                skillsContainer.appendChild(skillCategory);
            }
        }
    }

    // Specialized Tools section
    const specializedToolsContainer = document.getElementById('specialized-tools-content-container');
    if (specializedToolsContainer && portfolioData.specializedTools) {
        for (const [category, toolsList] of Object.entries(portfolioData.specializedTools)) {
            if (toolsList.length > 0) {
                const toolCategory = document.createElement('div');
                toolCategory.className = 'skill-category fade-in';
                toolCategory.innerHTML = `
                    <h3>${category}</h3>
                    <div class="skills-grid">
                        ${toolsList.map(tool => `<span class="skill-badge">${tool}</span>`).join('')}
                    </div>
                `;
                specializedToolsContainer.appendChild(toolCategory);
            }
        }
    }

    // Projects section
    const projectsContainer = document.getElementById('projects-content-container');
    if (portfolioData.projects && portfolioData.projects.length > 0) {
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card fade-in';
            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p class="tech-stack">${project.techStack}</p>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="link-styled">${project.linkText} <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }

    // Interests section
    const interestsContainer = document.getElementById('interests-content-container');
    if (portfolioData.interests && portfolioData.interests.length > 0) {
        portfolioData.interests.forEach(interest => {
            const interestCard = document.createElement('div');
            interestCard.className = 'interest-card fade-in';
            interestCard.innerHTML = `
                <div class="interest-icon">${interest.icon}</div>
                <h3>${interest.title}</h3>
                <p>${interest.description}</p>
                <a href="${interest.link}" target="_blank" rel="noopener noreferrer" class="link-styled">${interest.linkText} <i class="fa-solid fa-arrow-right"></i></a>
            `;
            interestsContainer.appendChild(interestCard);
        });
    }

    // Contact section
    if (portfolioData.contact) {
        document.getElementById('contact-desc').textContent = portfolioData.contact.description || "";
        const emailLink = document.getElementById('contact-email-link');
        emailLink.href = `mailto:${portfolioData.contact.email || ""}`;
        document.getElementById('contact-email-text').textContent = portfolioData.contact.email || "";

        const socialLinksContainer = document.getElementById('social-links-container');
        const socialIcons = {
            linkedin: "fa-linkedin-in",
            github: "fa-github",
            twitter: "fa-x-twitter",
            instagram: "fa-instagram"
        };

        if (portfolioData.contact.socialLinks) {
            for (const [platform, url] of Object.entries(portfolioData.contact.socialLinks)) {
                if (url) {
                    const a = document.createElement('a');
                    a.href = url;
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                    a.className = "social-link";
                    a.title = platform.charAt(0).toUpperCase() + platform.slice(1);
                    
                    // Handle brand specific classes
                    const brandClass = platform === 'twitter' ? 'fa-brands' : 'fab';
                    a.innerHTML = `<i class="${brandClass} ${socialIcons[platform] || 'fa-link'}"></i>`;
                    socialLinksContainer.appendChild(a);
                }
            }
        }
    }


    // 2. Interactions & UI Logic
    
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if(nav.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            if (navToggle.querySelector('i')) {
                navToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            }
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button logic
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// 3. Global Functions

// Resume Download
window.downloadResume = function() {
    const fileName = (portfolioData.hero && portfolioData.hero.resumeLink) ? portfolioData.hero.resumeLink : 'Aditya_Kumar_Sah_Resume.pdf';
    const githubRawUrl = `https://github.com/AdityaSah2030/MyPortfolio/raw/main/${fileName}`;
    const localUrl = fileName;
    
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.location.href = githubRawUrl;
    } else {
        const tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.download = fileName;
        document.body.appendChild(tempLink);
        
        fetch(localUrl, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    tempLink.href = localUrl;
                    tempLink.click();
                } else {
                    tempLink.href = githubRawUrl;
                    tempLink.target = '_blank';
                    tempLink.click();
                }
            })
            .catch(() => {
                tempLink.href = githubRawUrl;
                tempLink.target = '_blank';
                tempLink.click();
            })
            .finally(() => {
                setTimeout(() => {
                    if (document.body.contains(tempLink)) {
                        document.body.removeChild(tempLink);
                    }
                }, 1000);
            });
    }
};
