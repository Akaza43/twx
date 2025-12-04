'use client';

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  IoBookOutline,
  IoDocumentTextOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { domainConfigs, navigationLinks } from "@/components/data/links";

const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [komunitasUrl, setKomunitasUrl] = useState("/profile");
  const [komunitasExternal, setKomunitasExternal] = useState(false);

  useEffect(() => {
    const config = domainConfigs.find(
      (d) => d.hostname === window.location.hostname
    );
    setKomunitasUrl(config?.url || "/profile");
    setKomunitasExternal(config?.openInNewTab ?? false);
  }, []);

  const handleKomunitasClick = () => {
    if (komunitasExternal) {
      window.open(komunitasUrl, "_blank");
    } else {
      router.push(komunitasUrl);
    }
  };

  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-gray-900 z-50">
      <nav className="flex justify-around w-full">

        {/* MODUL */}
        <button
          onClick={() => router.push(navigationLinks.home)}
          className={`flex flex-col items-center p-4 flex-1 ${
            isActive(navigationLinks.home)
              ? "text-yellow-500"
              : "text-gray-500 hover:text-yellow-500"
          }`}
        >
          <IoBookOutline className="text-xl mb-1" />
          <span className="text-xs">MODUL</span>
        </button>
        {/* KOMUNITAS */}
        <button
          onClick={handleKomunitasClick}
          className={`flex flex-col items-center p-4 flex-1 ${
            pathname === "/profile"
              ? "text-yellow-500"
              : "text-gray-500 hover:text-yellow-500"
          }`}
        >
          <IoPeopleOutline className="text-xl mb-1" />
          <span className="text-xs">PROFILE</span>
        </button>
      </nav>
    </div>
  );
};

export default Menu;