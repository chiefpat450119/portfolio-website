import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-blue-950 bg-gray-950 mt-8 py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-200 text-sm">
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