import React from "react";
import { AuthenticationSubsection } from "./sections/AuthenticationSubsection/AuthenticationSubsection";
import { HomeMobileSubsection } from "./sections/HomeMobileSubsection/HomeMobileSubsection";
import { ItemMobileSubsection } from "./sections/ItemMobileSubsection/ItemMobileSubsection";
import { ItemViewMobileSubsection } from "./sections/ItemViewMobileSubsection/ItemViewMobileSubsection";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex flex-col">
        <AuthenticationSubsection />
        <HomeMobileSubsection />
        <ItemMobileSubsection />
        <ItemViewMobileSubsection />
      </div>
    </div>
  );
};
