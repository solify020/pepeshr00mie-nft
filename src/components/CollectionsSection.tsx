import React from 'react';
import { Star, GamepadIcon, Users, Home } from 'lucide-react';

export const CollectionsSection: React.FC = () => {
  const collections = [
    {
      title: 'Cosmic Chocolates',
      subtitle: 'Genesis Collection',
      description: '10,000 unique PEPE chocolates with cosmic effects',
      image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80',
      icon: Star
    },
    {
      title: 'Multidimensional Shrooms',
      subtitle: 'Pixel Art Collection',
      description: 'Retro-style mushroom companions',
      image: 'https://images.unsplash.com/photo-1512595263860-30e59fcaa11d?auto=format&fit=crop&w=600&q=80',
      icon: GamepadIcon
    },
    {
      title: 'Allies & Foes',
      subtitle: 'Collaborative Collection',
      description: 'Special editions by guest artists',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=600&q=80',
      icon: Users
    },
    {
      title: 'Chocolate Dens',
      subtitle: 'Metaverse Collection',
      description: 'Stake and earn in the metaverse',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80',
      icon: Home
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.title}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <collection.icon className="w-12 h-12" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{collection.title}</h3>
                <p className="text-purple-400 mb-2">{collection.subtitle}</p>
                <p className="text-gray-400 mb-4">{collection.description}</p>
                
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                    Mint
                  </button>
                  <button className="flex-1 px-4 py-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}