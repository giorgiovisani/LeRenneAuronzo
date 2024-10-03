import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';
import '../App.css'; // Import the App.css file

interface Prices {
  [key: string]: number;
}

const AvailabilityPage: React.FC = () => {
  const { t } = useTranslation();
  const [prices, setPrices] = useState<Prices>({});
  const PUBLIC_URL = import.meta.env.BASE_URL;

  useEffect(() => {
    fetch(`${PUBLIC_URL}data/prices.json`)
      .then(response => response.json())
      .then(data => setPrices(data))
      .catch(error => console.error('Error fetching prices:', error));
  }, []);

  const tileContent = ({ date }: { date: Date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const price = prices[formattedDate];
    return price ? <div>${price}</div> : null;
  };

  return (
    <div className="availability-page">
      <h1 className="availability-title">{t('availability.title')}</h1>
      <Calendar className="availability-calendar" tileContent={tileContent} />
    </div>
  );
};

export default AvailabilityPage;
