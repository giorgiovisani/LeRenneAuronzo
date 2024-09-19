import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import '../styles/animations.css'
const Home: React.FC = () => {
  return (
    <>
      {/* Navbar */}

      {/* Full-size background section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('./home_background.jpg')` }}
      >
        {/* Overlay for darkening the background slightly */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          
          {/* Apartment Name - Large and centered */}
          <h1 className="text-white text-6xl font-bold tracking-wide mb-4 animate-fadeIn">
            Appartamento Le Renne
          </h1>

          {/* Poetic Sentence - Gradual appearance */}
          <p className="text-white text-xl text-center w-3/4 md:w-1/2 leading-relaxed animate-fadeInSlow">
            "Beauty and calm are the true companions of a restful mind." – <em>Anonymous</em>
          </p>
        </div>
      </div>

      {/* Additional content can be added here */}
    </>
  );
};

export default Home;
