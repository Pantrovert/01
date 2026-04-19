
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // Force webpack to ignore Node.js modules that Genkit/OpenTelemetry might pull in
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      async_hooks: false,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      os: false,
      path: false,
    };
    return config;
  },
};

export default nextConfig;
