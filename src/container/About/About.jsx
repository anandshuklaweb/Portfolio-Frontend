import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>Creativity</span> is nothing but
        <br /> the way to solve new <span>Problems</span>
      </h2>

      <div className="app__profiles ">
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <p className="p-about-text p-text">
            Hi there! I am Anand Shukla! I'm a software engineer specializing in
            building exceptional digital experiences. I specialize in creating
            software for clients ranging from individuals and small businesses
            all the way to large enterprise corporations. I'm currently working
            on Node.js and React.js as a MERN Stack Developer.
          </p>
        </motion.div>
        <a href="/Anand-Shukla-Resume.pdf" target="_blank">
          <button type="button">Download Resume</button>
        </a>
      </div>
    </>
  );
};

export default AppWrap(About, "about", "app__whitebg");
