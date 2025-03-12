// Add a subtle parallax effect to the background pattern
document.addEventListener("mousemove", (e) => {
    const pattern = document.querySelector(".background-pattern")
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
  
    pattern.style.transform = `translate(${x * 20}px, ${y * 20}px)`
  })
  
  // Add animation to highlight cards on scroll
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".highlight-card")
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }
        })
      },
      { threshold: 0.1 },
    )
  
    cards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      observer.observe(card)
    })
  })
  
  // Add a simple confetti effect when the page loads
  function createConfetti() {
    const colors = ["#e75a8d", "#f9c5d5", "#f2c1d1", "#9061f9", "#f0b429"]
    const confettiContainer = document.createElement("div")
    confettiContainer.style.position = "fixed"
    confettiContainer.style.top = "0"
    confettiContainer.style.left = "0"
    confettiContainer.style.width = "100%"
    confettiContainer.style.height = "100%"
    confettiContainer.style.pointerEvents = "none"
    confettiContainer.style.zIndex = "1000"
    document.body.appendChild(confettiContainer)
  
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement("div")
        confetti.style.position = "absolute"
        confetti.style.width = `${Math.random() * 10 + 5}px`
        confetti.style.height = `${Math.random() * 5 + 5}px`
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        confetti.style.borderRadius = "2px"
        confetti.style.left = `${Math.random() * 100}%`
        confetti.style.top = "-20px"
        confetti.style.opacity = "0"
        confetti.style.transform = "rotate(0deg)"
        confetti.style.transition = "transform 3s linear, top 3s linear, opacity 0.3s ease-in, opacity 0.3s ease-out 2.7s"
  
        confettiContainer.appendChild(confetti)
  
        setTimeout(() => {
          confetti.style.opacity = "1"
          confetti.style.transform = `rotate(${Math.random() * 360}deg)`
          confetti.style.top = `${Math.random() * 100 + 100}%`
        }, 10)
  
        setTimeout(() => {
          confetti.remove()
        }, 3000)
      }, i * 100)
    }
  }
  
  // Run confetti effect when page loads
  window.addEventListener("load", createConfetti)
  
  