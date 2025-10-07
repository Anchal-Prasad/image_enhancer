import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  // Function to download image
  const downloadImage = () => {
    if (!enhanced) return;
    const link = document.createElement("a");
    link.href = enhanced;
    link.download = "enhanced-image.png"; // You can change the default name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="relative p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-center text-black drop-shadow-md mb-2">
          Original Image
        </h2>
        {uploaded ? (
          <img
            src={uploaded}
            alt="Original"
            className="w-full h-80 object-cover rounded-xl border border-white/30 shadow-inner"
          />
        ) : (
          <div className="flex items-center justify-center h-80 bg-white/30 rounded-xl border border-white/20 text-black/70 text-lg">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="relative p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-center text-black drop-shadow-md mb-2">
          Enhanced Image
        </h2>

        {loading ? (
          <div className="flex items-center justify-center h-80">
            <Loading />
          </div>
        ) : enhanced ? (
          <>
            <img
              src={enhanced}
              alt="Enhanced"
              className="w-full h-80 object-cover rounded-xl border border-white/30 shadow-inner"
            />
            <button
              onClick={downloadImage}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold py-2 rounded-lg transition-colors"
            >
              Download Enhanced Image
            </button>
          </>
        ) : (
          <div className="flex items-center justify-center h-80 bg-white/30 rounded-xl border border-white/20 text-black/70 text-lg">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
