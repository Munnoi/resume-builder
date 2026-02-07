"use client"

import { usePathname } from "next/navigation";

const ParseResumePage = () => {
  const path = usePathname();
  return (
    <div>
      path {path}
    </div>
  )
}

export default ParseResumePage
