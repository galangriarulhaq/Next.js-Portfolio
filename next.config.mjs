/** @type {import('next').NextConfig} */
const nextConfig = {
  //   async headers() {
  //     return [
  //       {
  //         source: "/:path*",
  //         headers: [
  //           {
  //             key: "Content-Security-Policy",
  //             value: "default-src 'self'; img-src 'self' https://awesome-github-stats.azurewebsites.net; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  //           },
  //         ],
  //       },
  //     ];
  //   },
  images: {
    remotePatterns: [
      {
        hostname: "awesome-github-stats.azurewebsites.net",
      },
    ],
  },
};

export default nextConfig;
