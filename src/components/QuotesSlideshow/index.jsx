import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import quotes from "./quotes.json";
import { motion } from "framer-motion";

const getRandomQuote = () => {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const variants = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hide: {
    opacity: 0,
  },
};

export default function QuoteSlideshow() {
  const [quote, setQuote] = useState(getRandomQuote);

  useEffect(() => {
    let interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 1000 * 14 /* 14 seconds */);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={quote.quote}
      variants={variants}
      animate="show"
      initial="hide"
    >
      <Heading>{quote.quote}</Heading>
      <Text textAlign="right" fontWeight="medium" mt={4} fontSize="lg">
        — {quote.author}
      </Text>
    </motion.div>
  );
}
