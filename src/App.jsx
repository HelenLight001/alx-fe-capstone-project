import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./components/SignUp";
import ProjectForm from "./components/ProjectForm";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import Contact from "./components/Contact";
import ForgotPassword from "./components/ForgotPassword";
import Users from "./components/UserDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap everything in Layout so Navbar & Hero appear */}
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HeroSection />} /> */}
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="ProjectForm" element={<ProjectForm />} />
          
           <Route path="/users" element={<Users />} />
          {/* add more routes here */}
        </Route>
      </Routes>
    </Router>
  );
}
