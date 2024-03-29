import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const scrollToSection = (sectionId) => {
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth",
    });
  }
};

const Links = ({ setOpen }) => {
  const items = ["Home", "About", "Projects", "Contact"];

  const handleClick = (item) => {
    scrollToSection(item);
    setOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick(item)}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
