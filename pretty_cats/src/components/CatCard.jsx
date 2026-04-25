function CatCard({ rank, imageNumber, prettyScore, url, tone = 'top' }) {
  const toneStyles =
    tone === 'worst'
      ? {
          badge: 'bg-rose-100 text-rose-800 ring-1 ring-rose-200',
          frame: 'from-rose-50 via-white to-white',
        }
      : {
          badge: 'bg-amber-100 text-amber-900 ring-1 ring-amber-200',
          frame: 'from-amber-50 via-white to-white',
        };

  return (
    <div className={`overflow-hidden rounded-3xl bg-gradient-to-b ${toneStyles.frame} shadow-lg ring-1 ring-black/5`}>
      <div className="p-4">
        <div className="overflow-hidden rounded-2xl">
          <img
            className="aspect-square w-full object-cover"
            src={url}
            alt={`Cat ${imageNumber}`}
            loading="lazy"
          />
        </div>
        <div className="mt-4 text-center">
          <div className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${toneStyles.badge}`}>
            Rank #{rank}
          </div>
          <h2 className="mt-3 text-lg font-bold text-slate-900">Image {imageNumber}</h2>
          <p className="mt-1 text-sm text-slate-600">Pretty score {prettyScore.toFixed(6)}</p>
        </div>
      </div>
    </div>
  );
}

export default CatCard;
