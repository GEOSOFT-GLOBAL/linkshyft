import { useState } from "react";
import { FileText, Link2, Copy, Check, Trash2, Bold, Italic, List, ListOrdered, Code, Heading1, Heading2 } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/toggle";

const Text = () => {
  const [title, setTitle] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing your content here...",
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose prose-sm dark:prose-invert max-w-none min-h-[200px] p-4 focus:outline-none",
      },
    },
  });

  const handleCreate = () => {
    if (!editor?.getText().trim()) return;
    setShareLink(`https://linkshyft.com/t/${Math.random().toString(36).slice(2, 10)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setTitle("");
    setShareLink("");
    editor?.commands.clearContent();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Share Text</h1>
        <p className="text-muted-foreground">
          Share rich text content, notes, or formatted documents via a link.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Create Text Share
            </CardTitle>
            <CardDescription>
              Use the editor below to create formatted content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title (optional)</Label>
              <Input
                id="title"
                placeholder="Give your text a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Content</Label>
              <div className="border rounded-lg overflow-hidden">
                {/* Toolbar */}
                <div className="flex flex-wrap gap-1 p-2 border-b bg-muted/30">
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("heading", { level: 1 })}
                    onPressedChange={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                  >
                    <Heading1 className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("heading", { level: 2 })}
                    onPressedChange={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                  >
                    <Heading2 className="h-4 w-4" />
                  </Toggle>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("bold")}
                    onPressedChange={() => editor?.chain().focus().toggleBold().run()}
                  >
                    <Bold className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("italic")}
                    onPressedChange={() => editor?.chain().focus().toggleItalic().run()}
                  >
                    <Italic className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("code")}
                    onPressedChange={() => editor?.chain().focus().toggleCode().run()}
                  >
                    <Code className="h-4 w-4" />
                  </Toggle>
                  <div className="w-px h-6 bg-border mx-1" />
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("bulletList")}
                    onPressedChange={() => editor?.chain().focus().toggleBulletList().run()}
                  >
                    <List className="h-4 w-4" />
                  </Toggle>
                  <Toggle
                    size="sm"
                    pressed={editor?.isActive("orderedList")}
                    onPressedChange={() => editor?.chain().focus().toggleOrderedList().run()}
                  >
                    <ListOrdered className="h-4 w-4" />
                  </Toggle>
                </div>

                {/* Editor */}
                <EditorContent editor={editor} className="min-h-[200px]" />
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleCreate} disabled={!editor?.getText().trim()} className="flex-1">
                <Link2 className="h-4 w-4 mr-2" />
                Generate Share Link
              </Button>
              <Button onClick={clearAll} variant="outline">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Share Link */}
        {shareLink && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Link2 className="h-5 w-5" />
                Your Share Link
              </CardTitle>
              <CardDescription>
                Anyone with this link can view your text content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input value={shareLink} readOnly className="font-mono text-sm" />
                <Button onClick={copyLink} variant="outline">
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Text;
