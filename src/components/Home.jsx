import React from 'react'

function Home() {
  const scrollToApology = () => {
    const element = document.getElementById('apology')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="floating-hearts">
        <span className="heart">💕</span>
        <span className="heart">😞</span>
        <span className="heart">✨</span>
        <span className="heart">💖</span>
        <span className="heart">😞</span>
        <span className="heart">⭐</span>
        <span className="heart">💕</span>
        <span className="heart">😞</span>
        <span className="heart">✨</span>
        <span className="heart">💖</span>
      </div>
      <div className="decorative-images">
        <img src="https://media.istockphoto.com/id/455441259/vector/sorry.jpg?s=612x612&w=0&k=20&c=HvJRF7wEbkFhwZJhauIGZS_Bdi18D6jCkdsf4Uf_M6g=" alt="Sorry" className="decorative-img sorry-img" />
        <img src="https://media.tenor.com/DdWddLM2wLAAAAAM/cute-animated.gif" alt="Cute animated" className="decorative-img cute-img" />
        <img src="https://media.tenor.com/nMi95UhfCmkAAAAM/sad-sorry.gif" alt="Sad sorry" className="decorative-img sad-img" />
      </div>
      <div className="home-content">
        <h1 className="home-title fade-in">Hi Jahanvi</h1>
        <p className="home-text fade-in-delay-1">
          Sometimes words don't feel like enough… so I made this little website instead.
        </p>
        <p className="home-subtitle fade-in-delay-2">You matter to me.</p>
        <button 
          className="home-button fade-in-delay-3"
          onClick={scrollToApology}
        >
          Read what I wanted to say
        </button>
      </div>
    </section>
  )
}

export default Home
