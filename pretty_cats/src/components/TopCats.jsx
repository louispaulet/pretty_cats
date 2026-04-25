import { useEffect, useMemo, useState } from 'react';
import CatCard from './CatCard';

function TopCats() {
  const [rankedCats, setRankedCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
        </div>
      )}
    </div>
  );
}

export default TopCats;
