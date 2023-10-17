import Link from "./Link.js";
import Image from "./Image.js";
import logo from "../img/logo.jpg";

export default function Logo() {
  return (
    <Link href="#">
      <Image src={logo} alt="logo" />
    </Link>
  );
}
