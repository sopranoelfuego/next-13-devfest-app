import React from "react";

type propsType = {
  children: React.ReactNode;
};
const layout = ({ children }: propsType) => {
  return <div className="flex items-start justify-center ">{children}</div>;
};

export default layout;
