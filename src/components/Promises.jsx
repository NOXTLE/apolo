import React, { useEffect, useRef } from 'react'

function Promises() {
  const sectionRef = useRef(null)

  const promises = [
    {
      emoji: '👂',
      title: 'I will always listen to you',
      text: 'No matter what, I will give you my full attention when you talk to me. Your words are precious to me.'
    },
    {
      emoji: '🗣️',
      title: 'I will speak to you with kindness',
      text: 'I will never speak rudely to you again. You deserve only gentle and caring words.'
    },
    {
      emoji: '💪',
      title: 'I will be patient',
      text: 'I will always be patient and listen to you.'
    },
    {
      emoji: '❤️',
      title: 'I will respect your words',
      text: 'Your words are valid and important. I will never dismiss.'
    },
    {
      emoji: '🤗',
      title: 'I will be better every day',
      text: 'I promise to work on myself and become a better person. Every single day.'
    },
    {
      emoji: '🌹',
      title: 'I will cherish every moment with you',
      text: 'Every second spent with you is special to me, and I will never take that for granted again.'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.promise-card')
      cards.forEach((card) => observer.observe(card))
    }

    return () => {
      if (sectionRef.current) {
        const cards = sectionRef.current.querySelectorAll('.promise-card')
        cards.forEach((card) => observer.unobserve(card))
      }
    }
  }, [])

  return (
    <section id="promises" className="promises-section">
      <div className="promises-images">
        <img src="https://media.tenor.com/DdWddLM2wLAAAAAM/cute-animated.gif" alt="Cute animated" className="promises-decorative-img" />
        <img src="https://media.istockphoto.com/id/455441259/vector/sorry.jpg?s=612x612&w=0&k=20&c=HvJRF7wEbkFhwZJhauIGZS_Bdi18D6jCkdsf4Uf_M6g=" alt="Sorry" className="promises-decorative-img" />
        <img src="https://media.tenor.com/nMi95UhfCmkAAAAM/sad-sorry.gif" alt="Sad sorry" className="promises-decorative-img" />
      </div>
      <div ref={sectionRef} className="promises-container">
        <h2 className="promises-heading slide-up">My Promises to You</h2>
        <div className="promises-grid">
          {promises.map((promise, index) => (
            <div key={index} className="promise-card slide-up">
              <div className="promise-emoji">{promise.emoji}</div>
              <h3 className="promise-title">{promise.title}</h3>
              <p className="promise-text">{promise.text}</p>
            </div>
          ))}
        </div>
        <p className="promises-footer">
          Thank you for reading this. I just wanted you to know how much you mean to me.
        </p>
      </div>
    </section>
  )
}

export default Promises
