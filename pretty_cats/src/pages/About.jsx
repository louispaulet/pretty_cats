// src/pages/About.jsx
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/20">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              About Pretty Cats
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
          </header>
          
          <div className="grid gap-12">
            <section className="relative group">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold mr-4">1</span>
                <h2 className="text-2xl font-bold text-gray-800">The Methodology</h2>
              </div>
              <div className="pl-14">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  This project harnesses the <strong>CLIP (Contrastive Language–Image Pretraining)</strong> neural network from Hugging Face to evaluate feline aesthetics through the lens of artificial intelligence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  We calculate the <strong>cosine similarity</strong> between each image and two contrasting semantic anchors:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
                  <div className="flex items-center text-green-600 italic">
                    <span className="text-2xl mr-3">✨</span>
                    <span className="text-lg">"this is a pretty cat" (Positive)</span>
                  </div>
                  <div className="flex items-center text-red-400 italic">
                    <span className="text-2xl mr-3">😿</span>
                    <span className="text-lg">"this is an ugly cat" (Negative)</span>
                  </div>
                </div>
                <p className="mt-4 text-lg font-medium text-indigo-600">
                  Final Score = Positive Similarity − Negative Similarity
                </p>
              </div>
            </section>

            <section className="relative group">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 font-bold mr-4">2</span>
                <h2 className="text-2xl font-bold text-gray-800">The Theory</h2>
              </div>
              <div className="pl-14">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Our core hypothesis is that this ranking captures <strong>"photographic conventionality."</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
                    <h3 className="font-bold text-indigo-900 mb-2">The Top Tier</h3>
                    <p className="text-gray-600">High-resolution, well-composed cats in traditional poses that match the AI's training data for "prettiness."</p>
                  </div>
                  <div className="p-5 bg-white rounded-2xl border border-purple-100 shadow-sm">
                    <h3 className="font-bold text-purple-900 mb-2">The Bottom Tier</h3>
                    <p className="text-gray-600">Cats caught in motion, blurry frames, strange angles, or candid moments that challenge the AI's standard prototypes.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative group border-t border-gray-100 pt-10">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-600 font-bold mr-4">3</span>
                <h2 className="text-2xl font-bold text-gray-800">Why CLIP?</h2>
              </div>
              <div className="pl-14 text-lg text-gray-600 leading-relaxed">
                <p>
                  Developed by OpenAI, CLIP is trained on billions of image-text pairs. It doesn't just see pixels; it understands concepts. This makes it an ideal tool for exploring how human language and subjective values are encoded in modern machine learning models.
                </p>
              </div>
            </section>
          </div>
        </div>
        
        <footer className="text-center mt-12 text-gray-400 font-medium">
          Built with Curiosity & CLIP
        </footer>
      </div>
    </div>
  );
}

export default About;
