// src/pages/About.jsx
function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">About This Project</h1>
        <p className="text-lg text-gray-700 mb-4">
          This project leverages the power of the OpenAI CLIP (Contrastive Language–Image Pretraining) model to rank images of cats from prettiest to ugliest. The CLIP model is a state-of-the-art neural network that understands images and text, allowing it to compare and rank images based on textual descriptions.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          To rank the cats, we use two reference sentences: "picture of an ugly cat" and "picture of a pretty cat". The CLIP model processes each cat image in our dataset and calculates the similarity scores for both sentences. We then apply a softmax function to these scores to determine the prettiness score of each cat.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          CLIP is an advanced model developed by OpenAI that combines the capabilities of both image and text processing. It has been trained on a diverse range of internet data, allowing it to understand and generate predictions for various image-text pairings. The general interest of this side project lies in exploring the capabilities of CLIP in a fun and engaging way. By ranking cat images, we demonstrate the practical application of AI in understanding and categorizing visual content based on subjective criteria.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This project not only showcases the potential of AI in handling complex tasks involving both visual and textual data but also provides an amusing and insightful way to engage with AI technologies. Whether you are a cat lover, an AI enthusiast, or simply curious about the latest advancements in machine learning, this project offers a unique blend of technology and entertainment.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          We hope you enjoy browsing through the ranked cat images and gain an appreciation for the sophisticated technology behind it. The OpenAI CLIP model represents a significant step forward in the field of AI, and this project serves as a small yet meaningful demonstration of its capabilities.
        </p>
      </div>
    </div>
  );
}

export default About;
