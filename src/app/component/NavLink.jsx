import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-900 sm:text-lg rounded md:p-0 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      {title}
    </Link>
  );
};

export default NavLink;
