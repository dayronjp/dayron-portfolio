import React from "react";
import clsx from "clsx";

export default function Button({ children, className, ...props }: any) {
  return (
    <button
      {...props}
      className={clsx("px-4 py-2 rounded-md bg-brand text-white hover:opacity-95", className)}
    >
      {children}
    </button>
  );
}
