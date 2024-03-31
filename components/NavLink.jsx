import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href} className="block py-5 pl-3 pr-4 text-xl rounded md:p-0 hover:text-red-700 transition-all font-semibold">{title}</Link>
  );
};

export default NavLink;