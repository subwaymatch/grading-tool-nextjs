"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import blockIImage from "../../public/images/block-I-primary.png";
import Image from "next/image";

// don't name the component as Navbar to avoid confusion with flowbite-react's <Navbar /> component
export default function NavbarComponent() {
  return (
    <>
      <Navbar
        className="fixed top-0 z-50 rounded-none w-full bg-illini-cloud"
        fluid
        rounded
      >
        <Navbar.Brand as={Link} href="/tool">
          <Image src={blockIImage} className="w-4 mr-3" alt="Block I Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            GradingTool
          </span>
        </Navbar.Brand>

        <div className="flex items-center md:order-2">
          <Link href="/help" className="flex mr-4">
            Help?
          </Link>
          <Button className="flex bg-primary mr-4">Admin</Button>
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={Link} href="/help">
            Help?
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
