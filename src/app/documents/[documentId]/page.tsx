import { Editor } from "./editor";
import { Toolbar } from "./toolbar";

interface DocumentIdpageProps {
params: Promise<{ documentId: string }>;
};



const DocumentIdpage = async ({ params }: DocumentIdpageProps) => {

    const {documentId} = await params;

    return (
    <div className= "min-h-screen bg-[#FAFBFD]">
    <Toolbar />
    <Editor />
    </div>
);
}

export default DocumentIdpage;