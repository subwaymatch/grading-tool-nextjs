"use client";

import FlowbiteContext from "../context/FlowbiteContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <FlowbiteContext>{children}</FlowbiteContext>;
}
