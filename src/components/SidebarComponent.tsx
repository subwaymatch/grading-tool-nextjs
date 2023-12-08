"use client";

import classNames from "classnames";
import { Sidebar } from "flowbite-react";
import { useEffect, useRef } from "react";
import useUiStore from "@/store/useUiStore";

function SidebarComponent({ children }: { children: React.ReactNode }) {
  const isSidebarOpen = useUiStore((state) => state.isSidebarOpen);
  const setIsSidebarOpen = useUiStore((state) => state.setIsSidebarOpen);
  const sidebar = useRef<>(null);

  const location = isBrowser() ? window.location.pathname : "/";

  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!isSidebarOpen || key !== "Escape") return;
      setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, []);

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
        "bg-slate-700	 fixed overflow-auto top-0 h-screen z-10 lg:sticky lg:!block"
      )}
    >
      <Sidebar>{children}</Sidebar>
    </div>
  ) : (
    <></>
  );
}

export default Object.assign(SidebarComponent, { ...Sidebar });
