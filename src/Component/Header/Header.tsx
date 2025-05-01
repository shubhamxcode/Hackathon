import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <Link to='/' className="text-3xl font-bold">Gamify</Link>
    </div>
    <div className="flex items-center space-x-4">
      <Link to='/map' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Go to Map
      </Link>
      <Link  to='/login' className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
        Login
      </Link>
    </div>
  </header>
  
  
  )
}

export default Header