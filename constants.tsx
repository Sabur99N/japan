
import React from 'react';
import { Region, Tradition, Festival, FoodItem } from './types';

export const COLORS = {
  background: '#F9F6F1', // Rice paper
  primary: '#2D3047',    // Deep Indigo
  accent: '#FFB7C5',     // Sakura Pink
  secondary: '#E63946',  // Vermillion
  muted: '#A8A29E'       // Muted Gray
};

export const TRADITIONS: Tradition[] = [
  {
    id: 'tea',
    title: 'Chadō',
    description: 'The Way of Tea. A ritualized preparation and consumption of matcha focused on mindfulness and respect.',
    icon: '🍵'
  },
  {
    id: 'kimono',
    title: 'Kimono',
    description: 'The traditional Japanese garment, representing centuries of textile artistry and social custom.',
    icon: '👘'
  },
  {
    id: 'calligraphy',
    title: 'Shodō',
    description: 'The art of traditional Japanese calligraphy, where every brush stroke captures the heart of the moment.',
    icon: '🖌️'
  },
  {
    id: 'flower',
    title: 'Ikebana',
    description: 'The disciplined art form of flower arrangement that brings nature and humanity together.',
    icon: '🌸'
  }
];

export const REGIONS: Region[] = [
  {
    id: 'kyoto',
    name: 'Kyoto',
    jpName: '京都',
    description: 'The cultural heart of Japan, home to thousands of temples and traditional wooden machiya houses.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    jpName: '東京',
    description: 'A neon-lit metropolis where futuristic skyscrapers stand alongside ancient shrines and quiet gardens.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200'
  },
  {
    id: 'osaka',
    name: 'Osaka',
    jpName: '大阪',
    description: 'Japan\'s kitchen, known for its vibrant street food scene, friendly locals, and energetic neon nights.',
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200'
  },
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    jpName: '北海道',
    description: 'The wild northern frontier, offering vast landscapes, volcanic mountains, and world-class skiing.',
    image: 'https://images.unsplash.com/photo-1547941126-3d5323b218e0?q=80&w=1200'
  }
];

export const FESTIVALS: Festival[] = [
  {
    id: 'gion',
    title: 'Gion Matsuri',
    month: 'July',
    description: 'One of the most famous festivals in Japan, featuring massive floats through the streets of Kyoto.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600'
  },
  {
    id: 'yuki',
    title: 'Sapporo Yuki Matsuri',
    month: 'February',
    description: 'A spectacular winter display of massive ice and snow sculptures in the heart of Sapporo.',
    image: 'https://images.unsplash.com/photo-1547941126-3d5323b218e0?q=80&w=600'
  },
  {
    id: 'omizutori',
    title: 'Omizutori',
    month: 'March',
    description: 'A sacred fire and water festival held at Todai-ji Temple to welcome the arrival of spring.',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=600'
  }
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'sushi',
    name: 'Edomae Sushi',
    description: 'A masterclass in simplicity, where the freshest fish meets perfectly seasoned vinegar rice.',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800'
  },
  {
    id: 'ramen',
    name: 'Tonkotsu Ramen',
    description: 'A rich, creamy pork bone broth that takes days to prepare, served with artisanal noodles.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800'
  },
  {
    id: 'wagashi',
    name: 'Wagashi',
    description: 'Traditional Japanese confections often served with tea, reflecting the fleeting beauty of the seasons.',
    image: 'https://images.unsplash.com/photo-1594911773199-a9217f2ee0d6?q=80&w=800'
  }
];
