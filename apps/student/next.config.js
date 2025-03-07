/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/student",
    async redirects() {
    return [
      {
        source: "/",
        destination: "http://localhost:3000/sign-in?loginType=student", // teacher-app URL
        permanent: false, // 이건 true로 설정해야 함 
      },
    ];
  },
};

export default nextConfig;
