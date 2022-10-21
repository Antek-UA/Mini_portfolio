// Tabs
const btns = document.querySelectorAll('[data-target]'),
      btnContent = document.querySelectorAll('[data-content]');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.target);

        btnContent.forEach(bc => { //bc = btn content
            bc.classList.remove('wrapper__active');
        })
        target.classList.add('wrapper__active');
        
        btns.forEach(b => { //b - btn
            b.classList.remove('btn__active');
        })
        btn.classList.add('btn__active')
    })
})
// Dark Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.profile__border`);
sr.reveal(`.profile__title`, {delay: 500});
sr.reveal(`.profile__proff`, {delay: 600});
sr.reveal(`.profile__social`, {delay: 700});
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700});
sr.reveal(`.profile__buttons`, {delay: 800});
sr.reveal(`.buttons`, {delay: 900});
sr.reveal(`.wrapper`, {delay: 1000});
