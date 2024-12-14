interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return <div className="documents-layout">{children}</div>;
};
export default DocumentsLayout;
