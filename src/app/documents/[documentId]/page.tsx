import Editor from "./editor";

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
      
      <Editor></Editor>
    </div>
  );
};

export default DocumentIdPage;
