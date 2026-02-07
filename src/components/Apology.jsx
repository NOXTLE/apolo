import React, { useEffect, useRef } from 'react'

function Apology() {
  const sectionRef = useRef(null)

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
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="apology" className="apology-section">
      <div className="apology-images">
        <img src="https://media.istockphoto.com/id/455441259/vector/sorry.jpg?s=612x612&w=0&k=20&c=HvJRF7wEbkFhwZJhauIGZS_Bdi18D6jCkdsf4Uf_M6g=" alt="Sorry" className="apology-decorative-img" />
        <img src="https://media.tenor.com/nMi95UhfCmkAAAAM/sad-sorry.gif" alt="Sad sorry" className="apology-decorative-img" />
      </div>
      <div ref={sectionRef} className="apology-card slide-up">
        <h2 className="apology-heading">I'm really sorry 😢</h2>
        <div className="apology-text">
          <p>
            I know I hurt you, and I feel terrible about it. I was rude to you when you didn't deserve any of it. You were just thinking for me in a caring way, and instead of listening to you, I responded in a way that must have made you feel so bad and i am sorry for that. 😢
          </p>
          <p>
            I should have listened to you patiently. Your words, your feelings, your thoughts  they all matter so much to me. I was wrong to not give you the respect you deserve.
          </p>
          <p>
            You are an important person in my life, and the last thing I ever want to do is make you feel unheard or disrespected. I am truly, deeply sorry from the bottom of my heart. 💕
          </p>
          <p className="apology-signature">
            I really am sorry, Jahanvi 🥺❤️
          </p>
        </div>
      </div>
    </section>
  )
}

export default Apology
