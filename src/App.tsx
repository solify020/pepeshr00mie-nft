import React, { useState } from 'react';
import { Heart, Coins, CircleUser, Award, MessageSquare as Discord, Twitter, Send, ChevronRight } from 'lucide-react';
import { HeroSection } from './components/HeroSection';
import { ToolsSection } from './components/ToolsSection';
import { CollectionsSection } from './components/CollectionsSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      // @ts-ignore - Phantom wallet
      const { solana } = window;
      
      if (solana?.isPhantom) {
        const response = await solana.connect();
        setIsWalletConnected(true);
        console.log('Connected with Public Key:', response.publicKey.toString());
      } else {
        alert('Phantom wallet not found! Please install it first.');
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to wallet!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-brown-900 to-purple-900 text-white">
      <HeroSection isWalletConnected={isWalletConnected} onConnectWallet={connectWallet} />
      <ToolsSection />
      <CollectionsSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

export default App;