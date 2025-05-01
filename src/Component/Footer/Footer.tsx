import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
  <div className="flex justify-center space-x-6 mb-4">
    <Link to='/' target="_blank" className="hover:text-blue-500">
      Twitter
    </Link>
    <Link to='/' target="_blank" className="hover:text-blue-500">
      GitHub
    </Link>
    <Link to='/' target="_blank" className="hover:text-blue-500">
      Discord
    </Link>
  </div>
  <p className="text-sm">
    &copy; {new Date().getFullYear()} LandPolygonNFT. All rights reserved.
  </p>
</footer>

  )
}

export default Footer