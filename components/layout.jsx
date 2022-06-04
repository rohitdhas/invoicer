import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mt-10">{children}</main>
    </>
  );
}
