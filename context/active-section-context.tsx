"use client";
import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";

type activeSectionContextProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  seTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: activeSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, seTimeOfLastClick] = useState(0); 
  // disable the observer temporarily when user clicks a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        seTimeOfLastClick, 
      }}
    >
      {children}{" "}
    </ActiveSectionContext.Provider>
  );
}

// CUSTOM HOOK

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}
