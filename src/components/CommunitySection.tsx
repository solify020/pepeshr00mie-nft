import React from 'react';
import { MessageSquare as Discord, Twitter, Send } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Join the Fungi Federation!</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href="https://discord.gg/wW7Qywd9bb" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#5865F2] rounded-full hover:bg-opacity-90 transition-all"
          >
            <Discord /> Join Discord
          </a>
          <a 
            href="https://x.com/PepeShr00mie" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#1DA1F2] rounded-full hover:bg-opacity-90 transition-all"
          >
            <Twitter /> Follow Twitter
          </a>
          <a 
            href="https://t.me/PEPECHOCOSHR00MIE" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-[#0088CC] rounded-full hover:bg-opacity-90 transition-all"
          >
            <Send /> Join Telegram
          </a>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Stay Sweet with Choco Updates!</h3>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
            />
            <button className="px-8 py-3 bg-purple-600 rounded-r-full hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}