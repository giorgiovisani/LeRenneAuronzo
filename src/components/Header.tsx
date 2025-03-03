import React from "react";

interface HeaderProps {
    title: string;
    backgroundImage?: string; // Optional background image
    transparent?: boolean; // New prop to allow transparency
}

export const Header: React.FC<HeaderProps> = ({title, backgroundImage, transparent}) => {
    return (
        <header
            className={`relative w-full h-40 sm:h-50 flex items-center justify-center ${
                transparent
                    ? "bg-transparent" // Inherits page background
                    : backgroundImage
                        ? "bg-cover bg-center"
                        : "bg-white"
            }`}
            style={backgroundImage ? {backgroundImage: `url('${backgroundImage}')`} : {}}
        >
            {/* Dark overlay only if there is a background image */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Title */}
            <h1 className={`relative font-bold z-10 text-center text-3xl sm:text-4xl text-white`}>
                {title}
            </h1>
        </header>
    );
};

// export default Header;


interface FeatureSectionProps {
    image: string;
    title: string;
    items: string[];
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({image, title, items}) => {
    return (
        <div className="container max-w-5xl mx-auto mt-4 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex flex-col sm:flex-col bg-white rounded-lg overflow-hidden mt-8 mx-0">
                {/* Image Section */}
                <div className="w-full sm:w-1/3">
                    <img src={image} alt={title} className="w-full h-full object-cover"/>
                </div>

                {/* Content Section */}
                <div className="w-full sm:w-2/3 mt-4 flex flex-col justify-left">
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        {items.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};