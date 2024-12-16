import React from 'react';
import { Github, Mail, Linkedin, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 animate-float">
              <img 
                src="meet.png?auto=format&fit=crop&w=300&h=300" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 className="text-5xl font-bold text-center mb-4 animate-slide-up">
              Meet Mangaonkar
            </h1>
            
            <p className="text-xl text-center text-purple-200 mb-8 animate-slide-up delay-200">
            Curious Mind | Aspiring Engineer & Tech Explorer
            </p>

            <div className="prose prose-invert mx-auto max-w-2xl animate-slide-up delay-300">
              <p className="text-lg text-center leading-relaxed">
              I'm a first-year engineering student at Fr. Conceicao Rodrigues College of Engineering, Bandra. I'm highly eager and passionate about everything I do, always striving for perfection. As an all-rounder, I have a solid grasp of multiple coding languages and tech skills, combined with excellent verbal communication abilities. My creativity and imagination constantly drive me to explore new possibilities and tackle challenges with enthusiasm.
              </p>
            </div>

            <div className="flex justify-center space-x-6 mt-8 animate-slide-up delay-400">
              <a href="https://github.com/How2Invade" 
                className="transform hover:scale-110 transition-transform duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/meet-mangaonkar-363640329/" 
                className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:mangaonkarmeet@gmail.com" 
                className="transform hover:scale-110 transition-transform duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <div className="flex justify-center mt-12 animate-slide-up delay-500">
              <a 
                href="https://wa.me/919969282858?text= Hey Meet!! I hope you're doing well. I wanted to reach out and connect with you. Looking forward to hearing from you soon.  
" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center px-8 py-3 bg-white text-purple-900 rounded-full font-semibold 
                         transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
              >
                Whatsapp
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;