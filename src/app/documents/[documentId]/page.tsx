import Editor from "./editor";
import { Navbar } from "./navbar";
import Toolbar from "./toolbar";

interface Props {
  params: {
    documentId: string;
  };
}

const DocumentIdPage = async ({ params }: Props) => {
  const { documentId } = await params;
  // const { documentId } = React.use(params); // use client
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="flex flex-col px-4 pt-2 
      gp-y-2 fixed top-0 left-0 right-0
       z-10 bg-[#fafbfd] print:hidden">
        <Navbar />
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentIdPage;
