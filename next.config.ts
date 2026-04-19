
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
  webpack: (config) => {
    // Provide fallbacks for Node.js modules in all environments
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

    // Completely block Genkit and OpenTelemetry from being bundled
    config.resolve.alias = {
      ...config.resolve.alias,
      'genkit': false,
      '@genkit-ai/core': false,
      '@genkit-ai/google-genai': false,
      '@opentelemetry/api': false,
      '@opentelemetry/sdk-node': false,
      '@opentelemetry/sdk-trace-node': false,
      '@opentelemetry/context-async-hooks': false,
    };

    return config;
  },
};

export default nextConfig;
