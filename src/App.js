import "./App.css"; 
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen font-inter">
      <Sidebar setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="flex-1 p-6 md:ml-64 transition-opacity duration-500 opacity-100">
        {renderPage()}
      </div>
    </div>
  );
}
