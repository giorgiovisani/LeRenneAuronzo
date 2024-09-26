import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for styling
import 'tailwindcss/tailwind.css';
import {useTranslation} from 'react-i18next';

const TheApartment: React.FC = () => {

  const PUBLIC_URL = import.meta.env.BASE_URL;
  const {t} = useTranslation();

  return (
    <>

      {/* Header */}
      <header className="bg-cover bg-center h-64"
              style={{backgroundImage: `url('${PUBLIC_URL}images/apartment_header2.jpg')`}}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            {t('apartment.title')}
          </h1>
        </div>
      </header>

      {/* Apartment Sections */}
      <main className="container mt-5">
        {/* Living Room Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`${PUBLIC_URL}images/favicon.ico`}
                alt="Living Room"
                className="w-full h-auto rounded shadow-2xl"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">
                {t('apartment.soggiorno_title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('apartment.soggiorno_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Kitchen Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src={`${PUBLIC_URL}images/kitchen1.jpeg`}
                alt="Kitchen"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">
                {t('apartment.cucina_title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('apartment.cucina_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Bedroom Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`${PUBLIC_URL}images/bedroom1.jpeg`}
                alt="Bedroom"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">
                {t('apartment.camera_title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('apartment.camera_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Bathroom Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src={`${PUBLIC_URL}images/bathroom1.jpg`}
                alt="Bathroom"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">
                {t('apartment.bagno_title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('apartment.bagno_description')}
              </p>
            </div>
          </div>
        </section>

        {/* Balcony Section */}
        <section className="mb-12">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`${PUBLIC_URL}images/home_background.jpg`}
                alt="Balcony"
                className="w-full h-auto rounded shadow-lg"
              />
            </div>
            <div className="col-md-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-3">
                {t('apartment.balcone_title')}
              </h2>
              <p className="text-lg leading-relaxed">
                {t('apartment.balcone_description')}
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
