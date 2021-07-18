import Link from "next/link";

const NavButton = (props: NavButtonProps) => (
  <Link href={props.path}>
    <span>{props.label}</span>
  </Link>
);

interface NavButtonProps {
  path: string,
  label: string
}

export default NavButton