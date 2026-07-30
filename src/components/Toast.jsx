export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-20 right-6 z-[70] bg-[#111827] text-white px-5 py-3 rounded-md shadow-xl text-sm font-medium flex items-center gap-2 animate-bounce">
      <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
      {message}
    </div>
  );
}
