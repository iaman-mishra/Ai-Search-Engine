import { Home, Search, Folder, MessageCircle, User, Snail } from "lucide-react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className={`h-screen w-full bg-gray-300 text-black flex flex-col items-center p-4 transition-all duration-300`}
    >
      <div className="mb-6 flex items-center gap-2">
        <Snail className="text-blue-500" />
        <span className="text-xl font-bold hidden md:block">Search Ai</span>
      </div>
      <nav className="flex flex-col gap-6">
        <Link to="/" className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md w-full">
          <Home />
          <span className="hidden md:block">Home</span>
        </Link>
        <Link to="/search" className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md w-full">
          <Search />
          <span className="hidden md:block">Discover</span>
        </Link>
        <Link to="" className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md w-full">
          <Folder />
          <span className="hidden md:block">Files</span>
        </Link>
        <Link to="" className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md w-full">
          <MessageCircle />
          <span className="hidden md:block">Messages</span>
        </Link>
      </nav>
      <div className="mt-auto">
        <Link to="" className="flex items-center gap-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md w-full">
          <User />
          <span className="hidden md:block">Profile</span>
        </Link>
      </div>
    </div>
  );
};


export default Sidebar;

