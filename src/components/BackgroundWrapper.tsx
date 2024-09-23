// src/components/BackgroundWrapper.tsx

const BackgroundWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('./home_background.jpg')` }}
    >
      {/* Overlay for darkening the background slightly */}
      <div className="absolute inset-0 bg-black bg-opacity-40">
        {/* Render the actual page content */}
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
