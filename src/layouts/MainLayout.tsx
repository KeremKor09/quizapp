import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <main
      className={`h-screen bg-appBackground flex items-center justify-center`}
    >
      {children}
    </main>
  );
};

export default MainLayout;
