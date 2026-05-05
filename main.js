// ── 1. MOBIL MENU ──────────────────────────────────────────────
const menuBtn    = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
})

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})


// ── 2. SMOOTH SCROLL ───────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})


// ── 3. NAVBAR SHADOW VED SCROLL ────────────────────────────────
const navbar = document.getElementById('navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('shadow-md')
  } else {
    navbar.classList.remove('shadow-md')
  }
})


// ── 4. VELKOMMEN-KNAP → VIS BESKED ─────────────────────────────
const velkommenBtn    = document.getElementById('velkommen-btn')
const velkommenBesked = document.getElementById('velkommen-besked')

velkommenBtn.addEventListener('click', () => {
  velkommenBesked.classList.toggle('hidden')
})


// ── 5. MODAL ───────────────────────────────────────────────────
const modal    = document.getElementById('modal')
const omMigBtn = document.getElementById('om-mig-btn')
const modalLuk = document.getElementById('modal-luk')

omMigBtn.addEventListener('click', () => modal.classList.remove('hidden'))
modalLuk.addEventListener('click', () => modal.classList.add('hidden'))

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden')
})
