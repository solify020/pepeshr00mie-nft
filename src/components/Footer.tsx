import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Licenses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://discord.gg/wW7Qywd9bb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/PepeShr00mie" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/PEPECHOCOSHR00MIE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by PEPE CHOCOSHR00MIE Team
          </p>
        </div>
      </div>
    </footer>
  );
}