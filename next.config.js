/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@mui/material",
    "@mui/system",
    "@mui/icons-material",
    "@emotion/react",
    "@emotion/styled",
  ],
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
  },
};

module.exports = nextConfig;
