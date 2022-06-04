export default function Navbar() {
  return (
    <nav className="z-10 flex justify-between align items-center px-8 py-4 shadow-md fixed top-0 left-0 right-0 bg-white">
      <h1 className="text-2xl font-bold cursor-pointer text-black">
        📄 Invoicer
      </h1>
      <button className="font-bold px-8 py-2 rounded-sm bg-primary-400 hover:bg-primary-300 text-white">
        Login
      </button>
    </nav>
  );
}
