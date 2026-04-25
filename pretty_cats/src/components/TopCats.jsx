import { useEffect, useMemo, useState } from 'react';
import CatCard from './CatCard';

function CompactCatTile({ cat, tone }) {
  const toneStyles =
    tone === 'worst'
      ? {
          badge: 'bg-rose-100 text-rose-800',
          border: 'ring-rose-200',
        }
      : {
          badge: 'bg-amber-100 text-amber-900',
          border: 'ring-amber-200',
        };

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ${toneStyles.border}`}>
      <img
        className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        src={cat.url}
        alt={`Cat ${cat.image_number}`}
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-2 pb-2 pt-8">
        <div className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${toneStyles.badge}`}>
          #{cat.rank}
        </div>
      </div>
    </div>
  );
}

function CompactCatGrid({ cats, tone, title, subtitle }) {
  return (
    <section>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-950">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
        </div>
        <span
          className={`hidden rounded-full px-3 py-1 text-sm font-semibold sm:inline-flex ${
            tone === 'worst'
              ? 'bg-rose-100 text-rose-900'
              : 'bg-amber-100 text-amber-900'
          }`}
        >
          10 x 10 mosaic
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10 sm:gap-3">
        {cats.map((cat) => (
          <CompactCatTile key={cat.image_number} cat={cat} tone={tone} />
        ))}
      </div>
    </section>
  );
}

function TopCats() {
  const [rankedCats, setRankedCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [viewMode, setViewMode] = useState('standard');

  useEffect(() => {
    const loadCats = async () => {
      try {
        const response = await fetch('/cats_ordered_by_prettiest.json');

        if (!response.ok) {
          throw new Error(`Failed to load ranked cats (${response.status})`);
        }

        const data = await response.json();
        setRankedCats(Array.isArray(data) ? data : []);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : 'Failed to load ranked cats');
      } finally {
        setLoading(false);
      }
    };

    loadCats();
  }, []);

  const topCats = useMemo(
    () =>
      rankedCats.slice(0, 10).map((cat, index) => ({
        ...cat,
        rank: index + 1,
      })),
    [rankedCats],
  );

  const topHundred = useMemo(
    () =>
      rankedCats.slice(0, 100).map((cat, index) => ({
        ...cat,
        rank: index + 1,
      })),
    [rankedCats],
  );

  const worstCats = useMemo(
    () => {
      const startRank = Math.max(rankedCats.length - 9, 1);

      return rankedCats.slice(-10).map((cat, index) => ({
        ...cat,
        rank: startRank + index,
      }));
    },
    [rankedCats],
  );

  const worstHundred = useMemo(() => {
    const slice = rankedCats.slice(-100);
    const startRank = Math.max(rankedCats.length - slice.length + 1, 1);

    return slice.map((cat, index) => ({
      ...cat,
      rank: startRank + index,
    }));
  }, [rankedCats]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Pretty Cats leaderboard</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Top 10 Cats and Worst 10 Cats
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          The leaderboard is sorted by the CLIP-based prettiness score, so the highest-ranked cats appear first and the
          least-pretty cats appear at the bottom.
        </p>
        <div className="mt-6 inline-flex rounded-full bg-white p-1 shadow-sm ring-1 ring-black/5">
          <button
            type="button"
            onClick={() => setViewMode('standard')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              viewMode === 'standard'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            10 best / 10 worst
          </button>
          <button
            type="button"
            onClick={() => setViewMode('compact')}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              viewMode === 'compact'
                ? 'bg-slate-950 text-white'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            100 compact mosaic
          </button>
        </div>
      </div>

      {loading ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-slate-600 shadow-sm">
          Loading ranked cats...
        </div>
      ) : error ? (
        <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-800 shadow-sm">
          {error}
        </div>
      ) : (
        <div className="space-y-12">
          {viewMode === 'standard' ? (
            <>
              <section>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950">Top 10 Cats</h2>
                    <p className="mt-1 text-sm text-slate-500">The prettiest cats on the leaderboard.</p>
                  </div>
                  <span className="hidden rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-900 sm:inline-flex">
                    Best of the best
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {topCats.map((cat) => (
                    <CatCard
                      key={cat.image_number}
                      rank={cat.rank}
                      imageNumber={cat.image_number}
                      prettyScore={cat.pretty_score}
                      url={cat.url}
                      tone="top"
                    />
                  ))}
                </div>
              </section>

              <section>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-950">Worst 10 Cats</h2>
                    <p className="mt-1 text-sm text-slate-500">The cats at the bottom of the ranking.</p>
                  </div>
                  <span className="hidden rounded-full bg-rose-100 px-3 py-1 text-sm font-semibold text-rose-900 sm:inline-flex">
                    Bottom of the chart
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                  {worstCats.map((cat) => (
                    <CatCard
                      key={cat.image_number}
                      rank={cat.rank}
                      imageNumber={cat.image_number}
                      prettyScore={cat.pretty_score}
                      url={cat.url}
                      tone="worst"
                    />
                  ))}
                </div>
              </section>
            </>
          ) : (
            <>
              <CompactCatGrid
                cats={topHundred}
                tone="top"
                title="Top 100 Cats"
                subtitle="A 10x10 mosaic of the prettiest cats."
              />
              <CompactCatGrid
                cats={worstHundred}
                tone="worst"
                title="Worst 100 Cats"
                subtitle="A 10x10 mosaic of the least-pretty cats."
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default TopCats;
