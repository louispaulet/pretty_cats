function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_34%),linear-gradient(180deg,_#fffaf2_0%,_#ffffff_30%,_#f8fafc_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2.5rem] border border-white/60 bg-white/75 p-8 shadow-sm backdrop-blur-md sm:p-12">
          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">Project details</p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">About Pretty Cats</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              This project uses a CLIP-based scoring script to rank cat images by how closely they match a
              "pretty cat" concept relative to an "ugly cat" concept. The app then serves the ordered leaderboard
              as a CSV and JSON export.
            </p>
          </header>

          <div className="space-y-16">
            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  01
                </span>
                <h2 className="text-2xl font-bold text-slate-900">The scoring script</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  The ranking is produced by <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">score_pretty_cats.py</code>.
                  It loads the OpenAI CLIP model <strong>openai/clip-vit-base-patch32</strong> through
                  <strong> transformers</strong>, downloads each image from the Google Cloud Storage bucket, and scores
                  every cat against two fixed prompts.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-amber-100 bg-white/60 p-6 shadow-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-800">Pretty prompt</p>
                    <p className="text-slate-700 italic">"this is a pretty cat"</p>
                  </div>
                  <div className="rounded-3xl border border-slate-100 bg-white/60 p-6 shadow-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">Ugly prompt</p>
                    <p className="text-slate-700 italic">"this is an ugly cat"</p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white shadow-lg">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Core score</p>
                  <p className="text-lg leading-8">
                    <span className="font-semibold text-amber-400">global_score</span> ={' '}
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
                <h2 className="text-2xl font-bold text-slate-900">What gets computed</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  For each image, the script stores the raw CLIP similarities, the scaled logits produced by the model,
                  and a two-class softmax probability over the pretty and ugly prompts. The leaderboard is sorted by the
                  global score, then by pretty similarity, then by image number for deterministic ties.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-[2rem] border border-amber-100 bg-white/60 p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-bold text-amber-900">Per-image fields</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• <code>pretty_similarity</code></li>
                      <li>• <code>ugly_similarity</code></li>
                      <li>• <code>global_score</code></li>
                      <li>• <code>pretty_logit</code></li>
                      <li>• <code>ugly_logit</code></li>
                      <li>• <code>pretty_probability</code></li>
                      <li>• <code>ugly_probability</code></li>
                    </ul>
                  </article>
                  <article className="rounded-[2rem] border border-slate-100 bg-white/60 p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-bold text-slate-900">Leaderboard ordering</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Highest <code>global_score</code> first</li>
                      <li>• Then higher <code>pretty_similarity</code></li>
                      <li>• Then lower <code>image_number</code> for ties</li>
                      <li>• A <code>leaderboard_position</code> column is inserted after sorting</li>
                    </ul>
                  </article>
                </div>
              </div>
            </section>

            <section>
              <div className="mb-6 flex items-center">
                <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">
                  03
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Image handling and batching</h2>
              </div>
              <div className="pl-12">
                <p className="mb-6 text-lg leading-relaxed text-slate-600">
                  Images are fetched from <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">https://storage.googleapis.com/pretty_cats/image_{'{'}image_number{'}'}.jpg</code>
                  using a retrying HTTP session. Downloads are cached locally so reruns do not re-fetch the same files.
                  The script processes cats in batches, defaulting to 32 images per batch, to keep model inference
                  efficient.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Batch size</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">32</p>
                  </div>
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">HTTP retries</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">4</p>
                  </div>
                  <div className="rounded-3xl border border-white bg-white/70 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500">Device</p>
                    <p className="mt-2 text-3xl font-black text-slate-950">MPS / CUDA / CPU</p>
                  </div>
                </div>
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
                      those images instead, which is how the final 9,935-row export was produced after one 404.
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
