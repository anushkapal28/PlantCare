import React, { useState } from 'react';
import { FaSeedling, FaSun, FaTint, FaLeaf } from 'react-icons/fa';

// Sample dataset - you can replace this with your full dataset
const plantData = [
  [
    { "name": "Aloe Vera", "description": "A succulent plant known for its soothing gel." },
    { "name": "Bamboo", "description": "A fast-growing grass that resembles a tree." },
    { "name": "Basil", "description": "An aromatic herb commonly used in cooking." },
    { "name": "Banyan", "description": "A large tree known for its aerial roots and expansive canopy." },
    { "name": "Cactus", "description": "A succulent plant adapted to arid environments." },
    { "name": "Cedar", "description": "An evergreen tree known for its aromatic wood." },
    { "name": "Chamomile", "description": "A flowering plant known for its calming tea." },
    { "name": "Cherry Blossom", "description": "A tree famous for its beautiful spring flowers." },
    { "name": "Coconut", "description": "A palm tree known for its edible fruit and versatile uses." },
    { "name": "Coriander", "description": "An herb used in various cuisines, also known as cilantro." },
    { "name": "Daisy", "description": "A common flowering plant known for its simple beauty." },
    { "name": "Dahlia", "description": "A flowering plant known for its vibrant blooms." },
    { "name": "Fern", "description": "A non-flowering plant known for its feathery leaves." },
    { "name": "Ficus", "description": "A genus of trees and shrubs, popular as indoor plants." },
    { "name": "Hibiscus", "description": "A flowering plant known for its large, colorful flowers." },
    { "name": "Lavender", "description": "An aromatic herb known for its calming scent." },
    { "name": "Mango", "description": "A tropical fruit tree known for its delicious fruits." },
    { "name": "Mint", "description": "An aromatic herb often used in cooking and teas." },
    { "name": "Neem", "description": "A tree known for its medicinal properties and aromatic leaves." },
    { "name": "Peepal", "description": "A sacred fig tree known for its heart-shaped leaves." },
    { "name": "Pothos", "description": "A popular indoor plant known for its heart-shaped leaves." },
    { "name": "Rubber Plant", "description": "An indoor tree known for its large, glossy leaves." },
    { "name": "Sage", "description": "An aromatic herb known for its culinary uses." },
    { "name": "Succulent", "description": "A group of plants with thick, fleshy tissues that store water." },
    { "name": "Tulsi", "description": "A sacred plant in Hinduism, often regarded as a medicinal herb." },
    { "name": "Zinnia", "description": "A flowering plant known for its bright, colorful blooms." }
  ]
  
];


const Recommendations = () => {
  const [plantType, setPlantType] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [error, setError] = useState('');

  const handleRecommendation = () => {
    setError(''); // Clear previous errors
    const foundPlant = plantData.find(plant => plant.name.toLowerCase() === plantType.toLowerCase());

    if (foundPlant) {
      setRecommendation(foundPlant.description);
    } else {
      setRecommendation(''); // Clear previous recommendations
      setError('No recommendation found for that plant type. Please try another one.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleRecommendation();
    }
  };

  return (
    <section id="recommendations" className="min-h-screen flex flex-col lg:flex-row items-center justify-around bg-green-100 p-12">
      <div className="max-w-md text-center lg:text-left mb-12 lg:mb-0">
        <h2 className="text-5xl font-bold text-green-700 mb-6">Personalized Care Tips</h2>
        <p className="text-lg text-gray-800 mb-6">
          Get the best care recommendations tailored to your plant's needs, based on your environment, sunlight, and watering habits.
        </p>
        <input
          type="text"
          value={plantType}
          onChange={(e) => setPlantType(e.target.value)}
          onKeyPress={handleKeyPress} // Add key press handler
          placeholder="Enter plant type (e.g., Aloe Vera, Basil)"
          className="border-2 border-green-500 rounded-lg p-2 mb-4 w-full"
        />
        <button
          onClick={handleRecommendation}
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Get Recommendations
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message */}
        {recommendation && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-green-600 mb-2">Plant Care Recommendation:</h3>
            <p className="text-gray-700">{recommendation}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex space-x-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaSun size={60} className="text-yellow-500 mb-4" />
            <p className="text-lg font-semibold text-green-600">Sunlight</p>
            <p className="text-gray-700 mt-2">Check how much sunlight your plant needs.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaTint size={60} className="text-blue-500 mb-4" />
            <p className="text-lg font-semibold text-green-600">Watering</p>
            <p className="text-gray-700 mt-2">Get personalized watering tips.</p>
          </div>
        </div>

        <div className="flex space-x-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaLeaf size={60} className="text-green-500 mb-4" />
            <p className="text-lg font-semibold text-green-600">Plant Type</p>
            <p className="text-gray-700 mt-2">Discover care based on plant type.</p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <FaSeedling size={60} className="text-green-700 mb-4" />
            <p className="text-lg font-semibold text-green-600">Growth</p>
            <p className="text-gray-700 mt-2">Find tips for healthy plant growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
