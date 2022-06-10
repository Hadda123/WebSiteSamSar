import React from "react";

const Loading = () => {
  return (
    <div className=" font-black fixed top-0 left-0 right-0 bottom-0 bg-[#3f2b7c] z-[10000] flex items-center justify-center">
      <div className="rounded-full border-4 border-[#ea4888] border-l-[#3f2b7c] animate-spin h-16 w-16"></div>
    </div>
  );
};

export default Loading;
