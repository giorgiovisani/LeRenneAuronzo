import { useEffect } from 'react';

interface AvailabilityPageProps {
  handleBookingClick: () => void;
}

export default function AvailabilityPage({ handleBookingClick }: AvailabilityPageProps) {
  useEffect(() => {
    handleBookingClick(); // Trigger the booking action when the component mounts
  }, [handleBookingClick]);

  return null; // No need to render anything
}