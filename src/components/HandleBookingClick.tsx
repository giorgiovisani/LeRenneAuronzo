export const handleBookingClick = () => {
  // Deep link for the Booking.com app
  const appDeepLink = 'booking://hotel/appartamento-a-un-passo-dal-lago';

  // Web URL as fallback
  const webUrl = 'https://www.booking.com/hotel/it/appartamento-a-un-passo-dal-lago.it.html';

  // Create an invisible iframe to attempt to open the app
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = appDeepLink;
  document.body.appendChild(iframe);

  // Flag to track if the app was opened
  let appOpened = false;

  // Event listener to detect if the app was opened
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') {
      appOpened = true;
    }
  };

  // Listen for visibility change
  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Set a timeout to handle the fallback if the app is not installed
  setTimeout(() => {
    // Remove the iframe
    document.body.removeChild(iframe);

    // Remove the event listener
    document.removeEventListener('visibilitychange', handleVisibilityChange);

    // Redirect to the web URL only if the app was not opened
    if (!appOpened) {
      window.location.href = webUrl;
    }
  }, 500); // Adjust the delay as needed
};