"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import blockIImage from "../../public/images/block-I-primary.png";
import Image from "next/image";

// Avoid naming the component Navbar to avoid confusion with flowbite-react's <Navbar /> component
export default function NavbarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image src={blockIImage} className="w-4 mr-3" alt="Block I Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Grading Tool
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
