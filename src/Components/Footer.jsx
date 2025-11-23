export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10 py-6 px-4 text-center">
      <p>© {new Date().getFullYear()} NextMart. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="#" className="hover:text-white">Facebook</a>
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">Instagram</a>
      </div>
    </footer>
  )
}