import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="http://">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="http://">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a href="http://">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="http://">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
