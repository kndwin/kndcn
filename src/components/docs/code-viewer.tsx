import { codeToHtml } from "shiki";

export const CodeViewer = async ({ code }: { code: string }) => {
  const html = await codeToHtml(code, {
    lang: "tsx",
    theme: "vitesse-black",
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
