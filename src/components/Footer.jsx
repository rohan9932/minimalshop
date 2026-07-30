export default function Footer() {
  return (
    <footer className="w-full bg-[#f3f4f5] border-t border-[#c7c4d8] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto py-8 px-6 md:px-10 text-xs text-[#575e70]">
        <div className="mb-4 md:mb-0">
          © 2026 MinimalShop. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#3525cd] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#3525cd] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#3525cd] transition-colors">
            Shipping Info
          </a>
        </div>
      </div>
    </footer>
  );
}
