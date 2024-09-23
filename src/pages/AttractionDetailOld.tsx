// // AttractionDetail.tsx
// import { useParams } from 'react-router-dom';
//
// const AttractionDetail: React.FC = () => {
//   const { attractionId } = useParams(); // Assuming the attraction's id or slug is passed in the URL
//
//   // Fetch data for the specific attraction based on the id or slug
//   // This could be done through props, context, or API calls depending on your setup.
//   const attractionDetails = {
//     title: 'Lago di Auronzo',
//     image: './auronzo_lago_2.jpeg',
//     description: 'Lago di Auronzo offers a peaceful atmosphere, ideal for boating, swimming, or simply walking around its scenic shores. The lake is known for its crystal clear waters and breathtaking mountain views.',
//   };
//
//   return (
//     <div className="p-8">
//       <h1 className="text-4xl font-bold mb-6">{attractionDetails.title}</h1>
//
//       <div className="flex flex-col md:flex-row">
//         {/* Image */}
//         <div className="w-full md:w-1/2">
//           <img src={attractionDetails.image} alt={attractionDetails.title} className="rounded-lg shadow-lg" />
//         </div>
//
//         {/* Description */}
//         <div className="mt-6 md:mt-0 md:ml-8 w-full md:w-1/2">
//           <p className="text-lg">{attractionDetails.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default AttractionDetail;
