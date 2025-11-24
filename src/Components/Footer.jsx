import React from "react";


export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800  border-t">
      <div className="max-w-6xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        <aside>
          
          <img src="/assets/nextmart.png" alt="NextMart logo" className="w-12 h-12 mb-3" />

          <p className="max-w-xs">
            <span className="text-2xl font-bold text-emerald-600">
              Next<span className="text-gray-800">Mart</span>
            </span>
            <br />
            {/* Your one‑stop destination for quality digital products, premium gadgets, and unbeatable deals. */}
          </p>
        </aside>


        <nav>
          <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
          <a href="/About" className="block hover:text-emerald-600">About Us</a>
          <a href="/Products" className="block hover:text-emerald-600">Products</a>
          <a href="/login" className="block hover:text-emerald-600">Login</a>
          <a href="/AddProduct" className="block hover:text-emerald-600">Add Product</a>
        </nav>

        {/* LEGAL */}
        <nav>
          <h4 className="font-semibold text-gray-900 mb-2">Legal</h4>
          <a href="#" className="block hover:text-emerald-600">Terms of Use</a>
          <a href="#" className="block hover:text-emerald-600">Privacy Policy</a>
          <a href="#" className="block hover:text-emerald-600">Cookie Policy</a>
        </nav>

        {/* SOCIALS */}
        <nav>
          <h4 className="font-semibold text-gray-900 mb-2">Follow Us</h4>
          <div className="flex items-center gap-4 mt-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkdin.png" alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/insts.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:support@nextmart.com">
              <img src="/assets/gmail.svg" alt="Email" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
          </div>
        </nav>
      </div>

      <p className="text-center text-sm mt-8 pb-5 text-gray-500">
        © {new Date().getFullYear()} NextMart. All rights reserved.
      </p>
    </footer>
  );
}