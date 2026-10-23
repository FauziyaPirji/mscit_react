import './App.css'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/Template/Header'
import Footer from './component/Template/Footer'
//import Home from './component/Template/Home'
//import About from './component/Template/About'
//import ContactUs from './component/Template/ContactUs'
//import Example from './component/Example'
//import Signal from './component/Signal'
//import UseMemoData from './component/UseMemoData'
//import UseRefData from './component/UseRefData'
//import Parent from './component/Parent'
//import Parent2 from './component/Parent2'
//import Parent3 from './component/Parent3'
//import Login from './component/Login'
//import UserData from './component/UserData'
//import AddUser from './component/AddUser'
//import EditUser from './component/EditUser'
import AuthRoute from './AuthRoute'

const Home = lazy(() => import('./component/Template/Home'))
const About = lazy(() => import('./component/Template/About'))
const ContactUs = lazy(() => import('./component/Template/ContactUs'))
const Example = lazy(() => import('./component/Example'))
const Signal = lazy(() => import('./component/Signal'))
const UseMemoData = lazy(() => import('./component/UseMemoData'))
const UseRefData = lazy(() => import('./component/UseRefData'))
const Parent = lazy(() => import('./component/Parent'))
const Parent2 = lazy(() => import('./component/Parent2'))
const Parent3 = lazy(() => import('./component/Parent3'))
const Login = lazy(() => import('./component/Login'))
const UserData = lazy(() => import('./component/UserData'))
const AddUser = lazy(() => import('./component/AddUser'))
const EditUser = lazy(() => import('./component/EditUser'))


function App() {

  return (
    <>
      <Header />

      <Suspense fallback={<div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/user-data" element={<AuthRoute><UserData /></AuthRoute>} />
          <Route path="/add-user" element={<AuthRoute><AddUser /></AuthRoute>} />
          <Route path="/edit-user/:id" element={<AuthRoute><EditUser /></AuthRoute>} />
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
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
