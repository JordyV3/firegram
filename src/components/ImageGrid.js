import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="container">
      <div className="wrapper">
        {docs && docs.map(doc => (
          <motion.div className="img__area" key={doc.id}
            layout
            whileHover={{ opacity: 1 }} s
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img className="img__area1" src={doc.url} alt=" "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>

  )
}

export default ImageGrid;