
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
  trailingSlash: true,
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
      http: false,
      https: false,
      zlib: false,
      stream: false,
      crypto: false,
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      'genkit': false,
      '@genkit-ai/core': false,
      '@genkit-ai/google-genai': false,
      '@opentelemetry/api': false,
      '@opentelemetry/sdk-node': false,
      '@opentelemetry/sdk-trace-node': false,
      '@opentelemetry/context-async-hooks': false,
      'async_hooks': false,
    };

    return config;
  },
};

export default nextConfig;
