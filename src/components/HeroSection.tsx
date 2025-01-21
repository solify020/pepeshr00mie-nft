import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  isWalletConnected: boolean;
  onConnectWallet: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isWalletConnected, onConnectWallet }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars" />
        <div className="twinkling" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-brown-400 to-yellow-300 text-transparent bg-clip-text font-blueberry">
            Mint Your Cosmic PEPE Companion!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Explore the fusion of flavors, fun, and the blockchain
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-black font-bold text-lg transform hover:scale-105 transition-all"
              onClick={() => alert('Minting coming soon!')}
            >
              Mint Now <Sparkles className="inline ml-2" />
            </button>

            <button 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg transform hover:scale-105 transition-all"
              onClick={onConnectWallet}
            >
              {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'} <Heart className="inline ml-2" />
            </button>

            <button 
              className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full font-bold text-lg transform hover:scale-105 transition-all"
              onClick={() => document.getElementById('collections')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}