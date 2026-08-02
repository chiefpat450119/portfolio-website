import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#3d2b6b] mt-8 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#8b82a8] text-sm">
          © 2025 Patrick Zhou. Built with Next.js.
        </p>
        <div className="flex gap-3 text-lg" aria-hidden="true">
          <span title="Game Dev">🎮</span>
          <span title="Space">🚀</span>
          <span title="Tennis">🎾</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;