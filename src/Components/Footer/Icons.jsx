import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
const Icons = ({ twitterUrl, githubUrl, linkedinUrl }) => {
  return (
    <div className="IconBox">
      {twitterUrl && (
        <Link to={twitterUrl}>
          <FaTwitter />
        </Link>
      )}

      {githubUrl && (
        <Link to={githubUrl}>
          <FaGithub />
        </Link>
      )}

      {linkedinUrl && (
        <Link to={linkedinUrl}>
          <FaLinkedin />
        </Link>
      )}
    </div>
  );
};

export default Icons;