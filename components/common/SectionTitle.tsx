import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h4 className={`text-[16px] dark:text-white font-medium py-2 px-4`}>{title}</h4>
  );
};

export default SectionTitle;
