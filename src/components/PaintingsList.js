import { motion } from 'framer-motion';

const PaintingsList = () => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
            <h1>Paintings</h1>
        </motion.div>
    );
}

export default PaintingsList;