
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Navbar from './Components/shared/Navbar';
import Blog from './Components/pages/Blog';
import Footer from './Components/shared/Footer';
import Newsletter from './Components/shared/Newsletter';
import SingleBlog from './Components/pages/SingleBlog';
import ContactPage from './Components/pages/ContactPage';
import NotFound from './Components/pages/NotFound';



function App() {
  return (
    <Router>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Newsletter/>  
    <Footer/>
    </Router>
  );
}

export default App;
