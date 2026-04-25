function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_34%),linear-gradient(180deg,_#fffaf2_0%,_#ffffff_30%,_#f8fafc_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2.5rem] border border-white/60 bg-white/75 p-8 shadow-sm backdrop-blur-md sm:p-12">
          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Project details</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">About Pretty Cats</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              This project uses OpenAI’s CLIP model to rank a massive collection of 9,936 cat images.
              By comparing every photo against "pretty" and "ugly" text prompts, we’ve created a data-driven
              leaderboard of the world’s most (and least) aesthetically pleasing felines.
            </p>
          </header>

          <div className="space-y-16">
            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  01
                </span>
                <h2 className="text-2xl font-bold text-slate-900">The CLIP Model</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  CLIP (Contrastive Language-Image Pre-training) is a neural network trained on a wide variety of
                  (image, text) pairs. Unlike traditional vision models that only recognize specific labels, CLIP
                  understands natural language concepts and can "see" how well an image matches a text description.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  The ranking is produced by <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">score_pretty_cats.py</code>.
                  It loads <strong>openai/clip-vit-base-patch32</strong> and scores every cat against two reference prompts:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-amber-100 bg-white/60 p-6 shadow-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-800">Pretty prompt</p>
                    <p className="text-slate-700 italic">"picture of a pretty cat"</p>
                  </div>
                  <div className="rounded-3xl border border-slate-100 bg-white/60 p-6 shadow-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Ugly prompt</p>
                    <p className="text-slate-700 italic">"picture of an ugly cat"</p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white shadow-lg">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">The Prettiness Score</p>
                  <p className="text-lg leading-8">
                    We calculate the cosine similarity between the image embedding and the text embeddings.
                    The <span className="font-semibold text-amber-400">global_score</span> is the difference:
                    <br />
                    <span className="text-slate-200">pretty_similarity</span> −{' '}
                    <span className="text-slate-400">ugly_similarity</span>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  02
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Multi-Prompt Experiment</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  While the main leaderboard uses a simple pretty/ugly binary, we also conducted a larger experiment
                  scoring cats against a wider range of 20+ descriptive adjectives to see how CLIP's perception shifts.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Beautiful', 'Cute', 'Lovely', 'Charming', 'Adorable', 'Elegant', 'Graceful', 'Handsome', 'Gorgeous', 'Photogenic', 'Stunning', 'Majestic'].map((adj) => (
                    <span key={adj} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 ring-1 ring-slate-200">
                      {adj}
                    </span>
                  ))}
                  <span className="px-2 py-1 text-sm text-slate-400 italic">and more...</span>
                </div>
                
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  The results of this multi-prompt evaluation are stored in the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">9k_cats_multi_scores.csv</code> export,
                  capturing the nuance between a "cute" cat and a "majestic" one.
                </p>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  03
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Dataset and Processing</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  The full dataset consists of <strong>9,936 images</strong> hosted on Google Cloud Storage.
                  Processing this volume required a robust batching and caching system.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Total cats</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">9,936</p>
                  </div>
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Batch size</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">32</p>
                  </div>
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Inference</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">GPU</p>
                  </div>
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Retries</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">4</p>
                  </div>
                </div>

                <p className="mt-8 text-lg leading-relaxed text-slate-600">
                  Images are fetched via a retrying HTTP session to handle transient network issues. 
                  In the rare event of a missing or corrupt image, the <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">--skip-missing</code> flag 
                  ensures the pipeline continues, resulting in our final verified leaderboard.
                </p>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  04
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Implementation notes</h2>
              </div>
              <div className="pl-12">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-[2rem] border border-amber-100 bg-white/60 p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-bold text-amber-900">Vector math</h3>
                    <p className="text-slate-600 leading-relaxed">
                      The model outputs are normalized to unit length before the dot product. That makes the raw
                      similarity scores easier to interpret as cosine similarities, while the model logits are still
                      preserved for parity with Hugging Face’s zero-shot CLIP path.
                    </p>
                  </div>
                  <div className="rounded-[2rem] border border-slate-100 bg-white/60 p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-bold text-slate-900">Failure handling</h3>
                    <p className="text-slate-600 leading-relaxed">
                      If an image cannot be downloaded or decoded, the default behavior is to stop immediately. The
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">--skip-missing</code> flag skips
                      those images instead, which is how the final 9,936-row export was produced.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  05
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Exports and app usage</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  The app reads the ranked leaderboard from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">public/cats_ordered_by_prettiest.json</code>,
                  which mirrors the CSV export. The top 10 / worst 10 view is the default, and the compact mode shows the
                  top 100 and bottom 100 as 10x10 mosaics.
                </p>

                <div className="rounded-[2rem] border border-slate-100 bg-slate-950 p-6 text-slate-100 shadow-lg">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Files</p>
                  <ul className="space-y-2 text-slate-200">
                    <li>• <code>public/cats_ordered_by_prettiest.csv</code></li>
                    <li>• <code>public/cats_ordered_by_prettiest.json</code></li>
                    <li>• <code>public/9k_cats_multi_scores.csv</code> for the older multi-prompt leaderboard</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-12 text-center font-medium tracking-wide text-slate-400">Built with curiosity and CLIP</footer>
      </div>
    </div>
  );
}

export default About;
