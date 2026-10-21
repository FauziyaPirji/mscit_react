import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Template/Header'
import Footer from './component/Template/Footer'
import Home from './component/Template/Home'
import About from './component/Template/About'
import ContactUs from './component/Template/ContactUs'
import Example from './component/Example'
import Signal from './component/Signal'
import UseMemoData from './component/UseMemoData'
import UseRefData from './component/UseRefData'
import Parent from './component/Parent'
import Parent2 from './component/Parent2'
import Parent3 from './component/Parent3'
import Login from './component/Login'
import UserData from './component/UserData'
import AddUser from './component/AddUser'
import EditUser from './component/EditUser'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user-data" element={<UserData />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/example" element={<Example />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/usememo" element={<UseMemoData />} />
        <Route path="/useref" element={<UseRefData />} />
        <Route path="/props-drilling" element={<Parent />} />
        <Route path="/useContext" element={<Parent2 />} />
        <Route path="/redux" element={<Parent3 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
