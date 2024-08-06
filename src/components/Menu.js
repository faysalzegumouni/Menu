import React, { useState } from 'react';
import MenuItem from './MenuItem';
import CategoryList from './CategoryList';
import salade from '../public/menu/salade.jpeg';
import Margarita from '../public/menu/margarita.jpeg';
import Pepperoni from '../public/menu/Pepperoni.jpeg';
import frommage from '../public/menu/Pizza Quatre Fromages.jpeg';
import vege from '../public/menu/Pizza Végétarienne.jpeg';
import alferdo from '../public/menu/Pasta Alfredo.jpeg';
import bolog from '../public/menu/Pasta Bolognese.jpeg';
import Carbon from '../public/menu/Pasta Carbonara.jpeg';
import lasagnes from '../public/menu/Lasagnes.jpeg';
import Mer from "../public/menu/Salade de Fruits de Mer.jpeg";
import crecque from "../public/menu/Salade Grecque.jpeg";
import nicoise from "../public/menu/Salade Niçoise.jpeg";
import nutella from "../public/menu/Crêpe Nutella.jpeg";
import tiramisu from "../public/menu/Tiramisu.jpeg";
import Pomme from "../public/menu/Tarte aux Pommes.jpeg";
import cotta from "../public/menu/Panna Cotta.jpeg";
import 'animate.css';

const menuItems = [
  // Pizzas
  { id: 1, name: 'Pizza Margherita', description: 'Tomate, mozzarella, basilic', price: '35 dhs', imageUrl: Margarita, category: 'Pizzas' },
  { id: 2, name: 'Pizza Pepperoni', description: 'Tomate, mozzarella, pepperoni', price: '40 dhs', imageUrl: Pepperoni, category: 'Pizzas' },
  { id: 3, name: 'Pizza Quatre Fromages', description: 'Mozzarella, gorgonzola, parmesan, chèvre', price: '45 dhs', imageUrl: frommage, category: 'Pizzas' },
  { id: 4, name: 'Pizza Végétarienne', description: 'Tomate, mozzarella, légumes grillés', price: '38 dhs', imageUrl: vege, category: 'Pizzas' },

  // Pâtes
  { id: 5, name: 'Pasta Carbonara', description: 'Pâtes, crème, lardons', price: '30 dhs', imageUrl: Carbon, category: 'Pâtes' },
  { id: 6, name: 'Pasta Bolognese', description: 'Pâtes, sauce bolognaise', price: '32 dhs', imageUrl: bolog, category: 'Pâtes' },
  { id: 7, name: 'Pasta Alfredo', description: 'Pâtes, sauce Alfredo', price: '34 dhs', imageUrl: alferdo, category: 'Pâtes' },
  { id: 8, name: 'Lasagnes', description: 'Pâtes, viande hachée, sauce tomate, fromage', price: '36 dhs', imageUrl: lasagnes, category: 'Pâtes' },

  // Salades
  { id: 9, name: 'Salade César', description: 'Laitue, poulet, parmesan, croûtons', price: '30 dhs', imageUrl: salade, category: 'Salades' },
  { id: 10, name: 'Salade Niçoise', description: 'Laitue, thon, olives, œufs', price: '28 dhs', imageUrl: nicoise, category: 'Salades' },
  { id: 11, name: 'Salade Grecque', description: 'Tomates, concombres, feta, olives', price: '25 dhs', imageUrl: crecque, category: 'Salades' },
  { id: 12, name: 'Salade de Fruits de Mer', description: 'Laitue, crevettes, calamars, vinaigrette', price: '35 dhs', imageUrl: Mer, category: 'Salades' },

  // Desserts
  { id: 13, name: 'Crêpe Nutella', description: 'Crêpe, Nutella, banane', price: '20 dhs', imageUrl: nutella, category: 'Desserts' },
  { id: 14, name: 'Tarte aux Pommes', description: 'Pâte, pommes, cannelle', price: '25 dhs', imageUrl: Pomme, category: 'Desserts' },
  { id: 15, name: 'Panna Cotta', description: 'Crème, sucre, vanille, coulis de fruits rouges', price: '30 dhs', imageUrl: cotta, category: 'Desserts' },
  { id: 16, name: 'Tiramisu', description: 'Café, mascarpone, cacao', price: '28 dhs', imageUrl: tiramisu, category: 'Desserts' },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Pizzas');

  // Regroupez les éléments de menu par catégorie
  const categories = menuItems.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, []);

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600">
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="w-full md:w-3/4 mt-4 md:mt-0 md:ml-4">
          <div className="flex flex-wrap justify-center">
            {filteredItems.map(item => (
              <div className="animate__animated animate__fadeIn animate__delay-1s p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={item.id}>
                <MenuItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
