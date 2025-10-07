import Home from "./components/Home";

const App = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 overflow-hidden">
      {/* Blurred background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full filter blur-3xl animate-blob"></div>
<div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
<div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-200 opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-2xl p-8 bg-white/20 backdrop-blur-md rounded-3xl shadow-xl text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Image Enhancer With AI
        </h1>
        <p className="text-lg text-white/80 mb-8">
          Upload your image and let AI enhance it in seconds!
        </p>

        <Home />

        <div className="text-sm text-black/70 mt-6">
          Powered By @AnchalPrasad
        </div>
      </div>
    </div>
  );
};

export default App;
