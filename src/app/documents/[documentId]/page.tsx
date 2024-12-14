import Editor from "./editor";
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
    <div>
      <Toolbar></Toolbar>
      <Editor></Editor>
    </div>
  );
};

export default DocumentIdPage;
