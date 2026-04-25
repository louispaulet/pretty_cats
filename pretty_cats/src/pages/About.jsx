// src/pages/About.jsx
function About() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_34%),linear-gradient(180deg,_#fffaf2_0%,_#ffffff_30%,_#f8fafc_100%)] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] shadow-sm border border-white/50">
          <header className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700 mb-3">Project details</p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-950">
              About Pretty Cats
            </h1>
          </header>
          
          <div className="space-y-16">
            <section className="relative">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mr-4">01</span>
                <h2 className="text-2xl font-bold text-slate-900">The Methodology</h2>
              </div>
              <div className="pl-12">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  This project harnesses the <strong>CLIP (Contrastive Language–Image Pretraining)</strong> neural network from Hugging Face to evaluate feline aesthetics through the lens of artificial intelligence.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Instead of manual votes, we calculate the <strong>cosine similarity</strong> between each image and two contrasting semantic anchors:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/50 p-6 rounded-3xl border border-amber-100/50 shadow-sm flex items-start">
                    <span className="text-2xl mr-4">✨</span>
                    <div>
                      <p className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-1">Positive</p>
                      <p className="text-slate-600 italic">"this is a pretty cat"</p>
                    </div>
                  </div>
                  <div className="bg-white/50 p-6 rounded-3xl border border-slate-100/50 shadow-sm flex items-start">
                    <span className="text-2xl mr-4">😿</span>
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Negative</p>
                      <p className="text-slate-600 italic">"this is an ugly cat"</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-slate-900 rounded-3xl text-white shadow-lg shadow-slate-200/50">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2 font-semibold">The Formula</p>
                  <p className="text-xl font-medium">
                    Final Score = <span className="text-amber-400">Positive Similarity</span> − <span className="text-slate-400">Negative Similarity</span>
                  </p>
                </div>
              </div>
            </section>

            <section className="relative">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mr-4">02</span>
                <h2 className="text-2xl font-bold text-slate-900">The Theory</h2>
              </div>
              <div className="pl-12">
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Our core hypothesis is that this ranking captures <strong>"photographic conventionality."</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group p-8 bg-white/50 rounded-[2rem] border border-amber-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-amber-900 mb-3 text-xl">The Top Tier</h3>
                    <p className="text-slate-600 leading-relaxed text-[17px]">
                      High-resolution, well-composed cats in traditional poses that match the AI's training data for "prettiness."
                    </p>
                  </div>
                  <div className="group p-8 bg-white/50 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="font-bold text-slate-900 mb-3 text-xl">The Bottom Tier</h3>
                    <p className="text-slate-600 leading-relaxed text-[17px]">
                      Cats caught in motion, blurry frames, strange angles, or candid moments that challenge the AI's standard prototypes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative pt-12 border-t border-slate-100">
              <div className="flex items-center mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mr-4">03</span>
                <h2 className="text-2xl font-bold text-slate-900">Why CLIP?</h2>
              </div>
              <div className="pl-12">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Developed by OpenAI, CLIP is trained on billions of image-text pairs. It doesn't just see pixels; it understands concepts. This makes it an ideal tool for exploring how human language and subjective values are encoded in modern machine learning models.
                </p>
              </div>
            </section>
          </div>
        </div>
        
        <footer className="text-center mt-12 text-slate-400 font-medium tracking-wide">
          Built with Curiosity & CLIP
        </footer>
      </div>
    </div>
  );
}

export default About;
