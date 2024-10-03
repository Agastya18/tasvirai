/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
        {
          protocol: 'https',
          hostname: 'tasvirai-storages.blr1.cdn.digitaloceanspaces.com',
        },
        {
          protocol: 'https',
          hostname: 'picsum.photos',
        }
       
        
      ],
    },
};

export default nextConfig;
