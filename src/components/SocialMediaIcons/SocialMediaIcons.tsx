import React from "react";
import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";

// Custom X (Twitter) icon component
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ color: "#A08957", fontSize: 24 }}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialMediaIcons = () => {
  const iconStyle = {
    color: "#A08957",
    fontSize: 24,
  };

  const buttonStyle = {
    "&:hover": {
      backgroundColor: "transparent",
    },
    padding: "12px",
  };

  return (
    <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <IconButton
        sx={buttonStyle}
        href="https://twitter.com"
        target="_blank"
        aria-label="X (Twitter)"
      >
        <XIcon />
      </IconButton>
      <IconButton
        sx={buttonStyle}
        href="https://facebook.com"
        target="_blank"
        aria-label="Facebook"
      >
        <FacebookIcon sx={iconStyle} />
      </IconButton>
      <IconButton
        sx={buttonStyle}
        href="https://youtube.com"
        target="_blank"
        aria-label="YouTube"
      >
        <YouTubeIcon sx={iconStyle} />
      </IconButton>
      <IconButton
        sx={buttonStyle}
        href="mailto:contact@example.com"
        aria-label="Email"
      >
        <EmailIcon sx={iconStyle} />
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
