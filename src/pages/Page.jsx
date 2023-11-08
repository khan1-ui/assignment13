import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AboutPage from './AboutPage'
import BlogPage from './BlogPage'
import ContactPage from './ContactPage'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import ServicePage from './ServicePage'
import Header from '../component/Header'



const Page = () => {
    return (
        <div>
        <BrowserRouter>
           <Header/>
          <br /><br /><br />
        <Routes>
            <Route path="/about"   element={<AboutPage/>}/>
            <Route path="/blog"   element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/"        element={<HomePage/>}/>
            <Route path="/project" element={<ProjectPage/>}/>
            <Route path="/service" element={<ServicePage/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    );
};

export default Page;