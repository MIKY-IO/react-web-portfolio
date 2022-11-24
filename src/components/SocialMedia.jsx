import React from "react";
import { BsLinkedin, BsGithub, BsSkype } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/mikulasrichter/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/MIKY-IO">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://join.skype.com/invite/E1hTw20KaKQE">
          <BsSkype />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
