// src/components/CatCard.jsx
function CatCard({ prettyPosition, imageNumber, prettyScore, url }) {
  return (
    <div className="bg-white shadow-md squared-lg overflow-hidden mb-4 p-4">
      <div className="flex flex-col items-center mb-4">
        <img className="w-40 h-40 object-cover squared-full mb-4" src={url} alt={`Cat ${imageNumber}`} />
        <div className="text-center">
          <h2 className="text-xl font-bold">Position: {prettyPosition}</h2>
          <p>Image Number: {imageNumber}</p>
          <p>Pretty Score: {prettyScore}</p>
        </div>
      </div>
    </div>
  );
}

export default CatCard;
