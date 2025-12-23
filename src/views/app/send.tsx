import { useState } from "react";
import { Upload, FileArchive, Music, Video, FileText, AppWindow, Link2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Send = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleUpload = () => {
    // TODO: Implement file upload
    setShareLink(`https://linkshyft.com/f/${Math.random().toString(36).slice(2, 10)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("audio/")) return Music;
    if (type.startsWith("video/")) return Video;
    if (type.startsWith("application/")) return AppWindow;
    return FileText;
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Send Files</h1>
        <p className="text-muted-foreground">
          Upload any file type and get a shareable link instantly.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Upload Area */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Upload Files
            </CardTitle>
            <CardDescription>
              Drag and drop files or click to browse. Supports all file types.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
            >
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <Label htmlFor="file-upload" className="cursor-pointer">
                <FileArchive className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-medium mb-1">Drop files here</p>
                <p className="text-sm text-muted-foreground">
                  or click to browse from your device
                </p>
              </Label>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => {
                  const Icon = getFileIcon(file.type);
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  );
                })}
                <Button onClick={handleUpload} className="w-full mt-4">
                  <Link2 className="h-4 w-4 mr-2" />
                  Generate Share Link
                </Button>
              </div>
            )}
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
                Share this link with anyone to give them access to your files.
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

export default Send;
