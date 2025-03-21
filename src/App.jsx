import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';
import myimage from './assets/my-img.jpg';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Rupanshu Dutta</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Web Developer
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a href="https://github.com/RupanshuDutta" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rupanshu-dutta-766901242/" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:rupanshudutta555@gmail.com" className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <a href="#about" className="animate-bounce inline-block">
              <ChevronDown size={32} className="text-gray-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <img
                  src={myimage}
                  alt="Profile"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-600 mb-6">
                  As a web developer, I strive to leverage emerging technologies and frameworks to create innovative, 
                  user-centric projects while continually enhancing my expertise to deliver exceptional design and user 
                  experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Frontend</h3>
                    <p className="text-gray-600">React, JavaScript, Tailwind CSS</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Backend</h3>
                    <p className="text-gray-600">Node.js</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Database</h3>
                    <p className="text-gray-600">SQL</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Developer Tools</h3>
                    <p className="text-gray-600">VSCode, Git</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <Timeline />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Rupanshu Dutta</h3>
              <p className="text-gray-400">Web Developer</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/RupanshuDutta" className="hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rupanshu-dutta-766901242/" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rupanshudutta555@gmail.com" className="hover:text-indigo-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400 text-sm">
            © {new Date().getFullYear()} Rupanshu Dutta. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;