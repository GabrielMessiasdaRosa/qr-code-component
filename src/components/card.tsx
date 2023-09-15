import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Card({
  children,
  size = "md",
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={`bg-white p-4  rounded-2xl flex flex-col items-center shadow-md ${className} ${cardSize[size]}`}
      {...props}
    >
      {children}
    </div>
  );
}

const cardSize = {
  sm: "sm:!w-64 !min-h-72",
  md: "sm:!w-72 !min-h-80",
  lg: "sm:!w-80 !min-h-96",
  xl: "sm:!w-96 !min-h-96",
};
