import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  icon: ReactNode;
  path: string;
}

const NavItem = ({ icon, path }: NavItemProps) => {
  const pathName= usePathname();
  return (
    <Link href={path} className="w-full flex justify-center">
     <span className={pathName == path ? "bg-orange-500 w-full flex justify-center rounded-md trasition-colors py-2" : "w-10/12 py-2"}>{icon}</span>
      {icon}
    </Link>
  );
}

export default NavItem;

