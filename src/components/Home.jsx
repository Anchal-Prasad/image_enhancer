import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";
import { useState } from "react";
import { enhancedImageAPI } from "../utils/enhanceImageApi";

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setEnhancedImage(null);
    setLoading(true);

    try {
      const enhancedURL = await enhancedImageAPI(file);
      setEnhancedImage(enhancedURL);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Error while enhancing the image. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      {/* Upload Section */}
      <div className="w-full max-w-2xl p-6 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center drop-shadow-md">
          Upload Your Image
        </h2>
        <ImageUpload UploadImageHandler={UploadImageHandler} />
      </div>

      {/* Preview Section */}
      <div className="w-full max-w-4xl p-6 bg-white/20 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-black mb-6 text-center drop-shadow-md">
          Image Preview
        </h2>
        <ImagePreview
          uploaded={uploadImage}
          enhanced={enhancedImage?.image}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Home;
