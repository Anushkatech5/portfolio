// Import the withSentryConfig if needed
import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Add your image domains here
  },
};

const sentryOptions = {
  silent: true,
  org: "anushkagupta",
  project: "javascript-nextjs",
};

const additionalSentryOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Export the configuration with Sentry integration if needed
export default withSentryConfig(nextConfig, sentryOptions, additionalSentryOptions);
