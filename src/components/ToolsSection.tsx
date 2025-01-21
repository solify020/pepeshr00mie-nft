import React from 'react';
import { Coins, CircleUser, Heart } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const tools = [
    {
      title: 'Choco Raffles',
      description: 'Win exclusive NFTs and rewards',
      icon: Coins,
      color: 'from-yellow-400 to-brown-600'
    },
    {
      title: 'Mushroom Missions',
      description: 'Complete quests, earn rewards',
      icon: CircleUser,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Golden Heart Auctions',
      description: 'Bid on rare collectibles',
      icon: Heart,
      color: 'from-yellow-300 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-black bg-opacity-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Tools</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.title}
              className="relative group bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`} />
              
              <tool.icon className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}