import BundleAnalyzer from "@next/bundle-analyzer";
import NextMDX from "@next/mdx";
import { withContentlayer } from "next-contentlayer";

const withBundlerAnalyzier = BundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withMdx = NextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    typedRoutes: true,
  },

  ...BundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  }),
};

export default withBundlerAnalyzier(withMdx(withContentlayer(nextConfig)));
