import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/anand--shukla/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/anandshuklaweb"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
