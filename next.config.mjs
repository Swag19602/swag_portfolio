import withImages from "next-images";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      loader: "file-loader",
      options: {
        outputPath: "public/sounds",
        publicPath: "/_next/",
        name: "[name].[ext]",
      },
    });

    return config;
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
};

export default withImages(nextConfig);
