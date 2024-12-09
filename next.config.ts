import type { NextConfig } from "next";

if (!process.env.NEXT_PUBLIC_SUPABASE_DOMAIN) {
  throw new Error('NEXT_PUBLIC_SUPABASE_DOMAIN is not defined');
}

const nextConfig: NextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_DOMAIN],
  },
};

export default nextConfig;
