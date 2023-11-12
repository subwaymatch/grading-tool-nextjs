import NavbarComponent from "@/components/NavbarComponentOld";
import SidebarComponent from "@/components/SidebarComponentOld";

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
