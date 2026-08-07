/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Required for SharedArrayBuffer (Godot WebAssembly, web workers)
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          // "credentialless" (vs "require-corp") lets cross-origin iframes like
          // itch.io load without needing to opt-in via CORP headers themselves.
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "credentialless",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
