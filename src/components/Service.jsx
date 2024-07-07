import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  { id: 1, title: 'Giving of Soft Loan (Lending)', icon: '💸', description: 'We provide accessible and flexible lending options to meet your financial needs.' },
  { id: 2, title: 'General Contractor of Electrical works', icon: '🔌', description: 'Specializing in the distribution and supply of top-quality electrical products and contracting services.' },
  { id: 3, title: 'Construction & Renovation of Building, Sales of Building Materials ', icon: '🏗️', description: 'Expert services in construction, renovation, and sales of premium building materials.' },
  { id: 4, title: 'Estate Management', icon: '🏢', description: 'Comprehensive estate management services for residential and commercial properties.' },
  { id: 5, title: 'Import & Export of goods', icon: '🚢', description: 'Efficient import and export services to facilitate global trade.' },
  { id: 6, title: 'Quarry & Sawmilling', icon: '🪓', description: 'Providing high-quality quarry and sawmilling services for various projects.' },
  { id: 7, title: 'Interior & Exterior Decoration & Accommodation Services', icon: '🏡', description: 'Professional decoration services to enhance the aesthetic appeal of your space.' },
  { id: 8, title: 'Produce Merchant, Poultry, Piggery, Fishery & their Feeds', icon: '🌾', description: 'Engaging in diverse agricultural activities including produce, poultry, piggery, and fishery.' },
  { id: 9, title: 'Cassava & Oil Palm Plantation', icon: '🌴', description: 'Specializing in the cultivation of cassava and oil palm for various uses.' },
  { id: 10, title: 'Oil & Gas', icon: '⛽', description: 'Comprehensive services in the oil and gas sector to meet energy needs.' },
];



const Service = () => {
 

  return (
    <section className="bg-white py-8 px-4 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-nunito">Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(service => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-2xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 font-nunito">{service.title}</h3>
              <p className="text-gray-600 text-base font-montserrat">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
