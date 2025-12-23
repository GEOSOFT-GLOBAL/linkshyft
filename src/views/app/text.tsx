import { useState } from "react";
import { FileText, Link2, Copy, Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Text = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCreate = () => {
    if (!text.trim()) return;
    // TODO: Implement text sharing
    setShareLink(`https://linkshyft.com/t/${Math.random().toString(36).slice(2, 10)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearAll = () => {
    setText("");
    setTitle("");
    setShareLink("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Share Text</h1>
        <p className="text-muted-foreground">
          Share code snippets, notes, or any text content via a link.
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
              Paste or type your content below. It will be accessible via a unique link.
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
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Paste or type your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleCreate} disabled={!text.trim()} className="flex-1">
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
