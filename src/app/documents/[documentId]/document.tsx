"use client";

import { Preloaded,usePreloadedQuery } from "convex/react";

import Editor from "./editor";
import { Room } from "./room";
import Toolbar from "./toolbar";
import { Navbar } from "./navbar";

import { api } from "../../../../convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

export const Document = ({ preloadedDocument }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument);
  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfd]">
        <div
          className="flex flex-col px-4 pt-2 
      gp-y-2 fixed top-0 left-0 right-0
       z-10 bg-[#fafbfd] print:hidden"
        >
          <Navbar data={document}/>
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default Document;
