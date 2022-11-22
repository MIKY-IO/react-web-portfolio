import React from "react";
import { BsLinkedin, BsGithub, BsSkype } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsSkype />
      </div>
    </div>
  );
};

export default SocialMedia;
