/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/student",
  
  async redirects() {
    return [
      {
        source: "/",
        destination: process.env.TEACHER_URL + "/sign-in?loginType=student", // teacher-app URL
        permanent: false, // 이건 true로 설정해야 함
        basePath:false
      },
    ];
  },
};

export default nextConfig;
