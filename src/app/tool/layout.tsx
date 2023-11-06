import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponentOld";
import SidebarComponent from "@/components/SidebarComponentOld";

const inter = Inter({ subsets: ["latin"] });

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      <SidebarComponent />
      <div>{children}</div>
    </>
  );
}
