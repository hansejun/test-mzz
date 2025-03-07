/** @type {import('next').NextConfig} */
const nextConfig = {
      rewrites: async () => [
    {
      source: "/student/:path*",
      destination: process.env.STUDENT_URL + "/student/:path*", // student로 요청 리다이렉트
    },
  ],
};

export default nextConfig;
