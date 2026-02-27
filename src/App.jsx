import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import Resume from './pages/Resume'
import Form from './pages/Form'
import History from './pages/History'
import Pnf from './pages/Pnf'


function App() {

  return (
    <>

      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='resume-generator' element={<Resume />} />
        <Route path='form' element={<Form />} />
        <Route path='history' element={<History />} />
        <Route path='/*' element={<Pnf />} />
      </Routes>

      <Footer />


    </>
  )
}

export default App