import classNames from "classnames";
import { Sidebar } from "flowbite-react";
import { useEffect } from "react";
import useUiStore from "@/store/useUiStore";

function SidebarComponent({ children }: { children: React.ReactNode }) {
  const isSidebarOpen = useUiStore((state) => state.isSidebarOpen);
  const setIsSidebarOpen = useUiStore((state) => state.setIsSidebarOpen);

  const location = isBrowser() ? window.location.pathname : "/";

  // close sidebar on page change on mobile
  useEffect(() => {
    console.log(`SidebarComponent.useEffect([location]), location=${location}`);
    setIsSidebarOpen(false);
  }, [location]);

  // close sidebar on mobile tap inside main content

  function isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  return isSidebarOpen ? (
    <div
      className={classNames(
        "fixed overflow-auto top-0 h-screen z-10 lg:sticky lg:!block"
      )}
    >
      <Sidebar>{children}</Sidebar>
    </div>
  ) : (
    <></>
  );
}

export default Object.assign(SidebarComponent, { ...Sidebar });
