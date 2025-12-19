import './i18n'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Solutions from './components/Solutions'
import News from './components/News'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <News />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App
