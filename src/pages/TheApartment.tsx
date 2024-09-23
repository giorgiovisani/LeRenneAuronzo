import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import 'tailwindcss/tailwind.css'; // Tailwind CSS for utility classes

const TheApartment: React.FC = () => {
  return (
    <>

      {/* Header */}
      <header className="bg-cover bg-center h-64" style={{ backgroundImage: `url('/apartment_header.jpg')` }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to Le Renne Apartment</h1>
        </div>
      </header>

      {/* Apartment Sections */}
      <main className="container mt-5">
        {/* Living Room Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/images/favicon.ico"
                alt="Living Room"
                className="w-full h-auto rounded shadow-2xl"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Living Room</h2>
              <p className="text-lg leading-relaxed">
                A spacious and cozy living room with comfortable seating, a flat-screen TV, and large windows that let in natural light. The perfect place to relax after a day of exploring the local attractions.
              </p>
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src="./kitchen1.jpeg"
                alt="Kitchen"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 order-md-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Fully Equipped Kitchen</h2>
              <p className="text-lg leading-relaxed">
                Our modern kitchen is fully equipped with all the necessary appliances, including a fridge, oven, microwave, and dishwasher, to make you feel at home during your stay.
              </p>
            </div>
          </div>
        </section>

        {/* Bedroom Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6">
              <img
                src="./bedroom1.jpeg"
                alt="Bedroom"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Master Bedroom</h2>
              <p className="text-lg leading-relaxed">
                The master bedroom offers a king-sized bed with premium linens and a serene atmosphere for a restful night’s sleep. Wake up to beautiful views of the surrounding nature.
              </p>
            </div>
          </div>
        </section>

        {/* Bathroom Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src="/images/bathroom1.jpg"
                alt="Bathroom"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 order-md-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Luxury Bathroom</h2>
              <p className="text-lg leading-relaxed">
                The apartment features a spacious, modern bathroom complete with a walk-in shower, high-quality toiletries, and fluffy towels for your convenience.
              </p>
            </div>
          </div>
        </section>

        {/* Balcony Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/images/home_background.jpg"
                alt="Balcony"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">Private Balcony</h2>
              <p className="text-lg leading-relaxed">
                Enjoy your morning coffee or a glass of wine in the evening on our private balcony, offering stunning views of the local surroundings and a peaceful escape.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-5">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 Le Renne Apartment. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default TheApartment;
