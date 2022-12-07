import Header from "../Header";
import { ChildrenProps } from "./Layout.types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }: ChildrenProps) {
  const router = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [search, setSearch] = useState(false);

  function handleRouteChange() {
    setDropdown(false);
    setSearch(false);
  }

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="container">
      <Header
        dropdown={dropdown}
        setDropdown={setDropdown}
        search={search}
        setSearch={setSearch}
      />
      {children}
    </div>
  );
}
