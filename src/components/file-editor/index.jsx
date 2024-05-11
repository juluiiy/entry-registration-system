import React from "react";
import { Editor } from "@tinymce/tinymce-react";

import { fileEditorConfig } from "../../constants/file-editor";

const FileEditor = ({ editorValue, handleEditorChange }) => {
  return (
    <div>
      <Editor
        apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
        data-testid="editor"
        init={{
          height: 400,
          menubar: true,
          placeholder: "Введіть текст...",
          plugins: fileEditorConfig.plugins.join(" "),
          toolbar: fileEditorConfig.toolbar.join(" | "),
          content_style:
            '@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;800&display=swap"); body { font-family:Rubik; font-size:14px }',
          font_family_formats: Object.entries(fileEditorConfig.fonts)
            .map((entry) => entry.join("="))
            .join("; "),
        }}
        onEditorChange={handleEditorChange}
        value={editorValue}
      />
      <div dangerouslySetInnerHTML={{ __html: editorValue }} />
    </div>
  );
};

export default FileEditor;
