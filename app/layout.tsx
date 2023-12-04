import "./globals.css";
import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
export const metadata = {
  title: "Next 13,#devfest presentation",
  description: "Simple  next13 app  illustrates the keys features",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col ">
        <Header />
        <div className="flex w-full gap-2 justify-center items-start flex-1 ">
          <SideBar />
          <div className="flex-1 h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
