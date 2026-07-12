import Nav from './components/Nav'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Consulting from './components/Consulting'
import Workshops from './components/Workshops'
import Courses from './components/Courses'
import Mentoring from './components/Mentoring'
import VideoSeries from './components/VideoSeries'
import Articles from './components/Articles'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Consulting />
        <Workshops />
        <Courses />
        <Mentoring />
        <VideoSeries />
        <Articles />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
