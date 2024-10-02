import Link from "next/link";

export default function Header() {
    return (
      <ol className="container flex">
     <li><Link href="/">Home</Link></li>
     
     <li><Link href="/about">About Me</Link></li>
     <li><Link href="/contact">Contact Us</Link></li>
     </ol>
    );
  }
  