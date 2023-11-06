"use client";

import { Sidebar } from "flowbite-react";
import { BiSolidHome } from "react-icons/bi";
import { AiFillPieChart } from "react-icons/ai";
import { PiBookFill } from "react-icons/pi";
import { GoUpload } from "react-icons/go";
import { MdHistory } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";

export default function SidebarComponent() {
  return (
    <>
      <Sidebar
        className="bg-red-50 fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0"
        aria-label="Grading tool sidebar"
      >
        <Sidebar.Items className="bg-red-100">
          <Sidebar.ItemGroup className="bg-red-200">
            <Sidebar.Item as={Link} href="/tool" icon={BiSolidHome}>
              Home
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={AiFillPieChart}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={PiBookFill}>
              Grading
            </Sidebar.Item>
            <Sidebar.Collapse icon={GoUpload} label="Upload">
              <Sidebar.Item href="#">Rubric</Sidebar.Item>
              <Sidebar.Item href="#">Student List</Sidebar.Item>
              <Sidebar.Item href="#">Assignments</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={MdHistory}>
              History
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={RiLogoutBoxRLine}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
