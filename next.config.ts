
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
  webpack: (config, { isServer }) => {
    // If we're building for the browser, we need to ignore Node-specific modules
    if (!isServer) {
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

      // Force ignore OpenTelemetry and Genkit core modules that use Node-only APIs
      config.resolve.alias = {
        ...config.resolve.alias,
        '@opentelemetry/context-async-hooks': false,
        '@opentelemetry/sdk-trace-node': false,
        '@opentelemetry/sdk-node': false,
        'genkit': false,
        '@genkit-ai/core': false,
        '@genkit-ai/google-genai': false,
      };
    }
    return config;
  },
};

export default nextConfig;
