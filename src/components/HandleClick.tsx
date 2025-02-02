export const handleClick = (appDeepLink: string, webUrl: string) => {
  let appOpened = false;

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      appOpened = true;
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Attempt to open the app
  window.location.href = appDeepLink;

  setTimeout(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    if (!appOpened) {
      window.location.href = webUrl;
    }
  }, 1500); // Adjust timeout as needed
};

// Specialized function for Booking.com
export const handleClickBooking = () => {
  const appDeepLink = 'booking://hotel/id-11822230';
  // const appDeepLink = 'booking://hotel/id-1234567'; // Replace with actual Booking.com hotel ID
  const webUrl = 'https://www.booking.com/hotel/it/appartamento-a-un-passo-dal-lago.it.html';

  handleClick(appDeepLink, webUrl);
};
