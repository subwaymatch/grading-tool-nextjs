import classNames from "classnames";
import { Sidebar } from "flowbite-react";
// import { useSidebarContext } from "../context/SidebarContext";
import useUiStore from "@/store/useUiStore";

function SidebarComponent({ children }: { children: React.ReactNode }) {
  // const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
  //   useSidebarContext();
  const isOpenOnSmallScreens = useUiStore(
    (state) => state.isOpenOnSmallScreens
  );
  const isPageWithSidebar = useUiStore((state) => state.isPageWithSidebar);
  const setOpenOnSmallScreens = useUiStore(
    (state) => state.setOpenOnSmallScreens
  );

  return (
    <div
      className={classNames(
        "fixed overflow-auto top-0 h-screen z-10 lg:sticky lg:!block",
        {
          hidden: !isOpenOnSmallScreens,
        }
      )}
    >
      <Sidebar>{children}</Sidebar>
    </div>
  );
}

export default Object.assign(SidebarComponent, { ...Sidebar });
