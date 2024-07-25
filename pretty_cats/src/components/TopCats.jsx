import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import CatCard from './CatCard';

function TopCats() {
  const [topCats, setTopCats] = useState([]);
  const [worstCats, setWorstCats] = useState([]);

  useEffect(() => {
    fetch('/9k_cats_multi_scores.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: function (results) {
            let sortedCats = results.data;
            // Sort the cats by total_score in descending order
            sortedCats = sortedCats.sort((a, b) => b.total_score - a.total_score);
            setTopCats(sortedCats.slice(0, 10));
            setWorstCats(sortedCats.slice(-10));
          },
        });
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Top 10 Cats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {topCats.map((cat, index) => (
          <CatCard
            key={index}
            prettyPosition={index+1}
            imageNumber={cat.image_index}
            prettyScore={cat.total_score}
            url={cat.image_url}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-8">Worst 10 Cats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {worstCats.map((cat, index) => (
          <CatCard
            key={index}
            prettyPosition={index+1}
            imageNumber={cat.image_index}
            prettyScore={cat.total_score}
            url={cat.image_url}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCats;
