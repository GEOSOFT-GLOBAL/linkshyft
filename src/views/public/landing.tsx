import { Link } from "react-router-dom";
import {
  FileText,
  Zap,
  Link2,
  ArrowRight,
  MessageSquare,
  FileArchive,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Zap className="h-4 w-4" />
          100% Free — No sign-up required
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Share Files, Text & <span className="text-primary">Chat</span>{" "}
          Instantly
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-10">
          Send any file type — audio, documents, apps, and more. Share text
          snippets or start a chat session. All through a simple link, no
          contacts needed.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link to="/send">
              Start Sharing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4">
            Share Anything, Anytime
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Whether it's files, text, or a quick chat — LinkShyft makes sharing
            effortless and completely free.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-background border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <FileArchive className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Send Files</h3>
              <p className="text-sm text-muted-foreground">
                Share any file type — documents, audio, videos, apps, and more.
                No size limits, no hassle.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Share Text</h3>
              <p className="text-sm text-muted-foreground">
                Quickly share code snippets, notes, or any text content via a
                simple shareable link.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Instant Chat</h3>
              <p className="text-sm text-muted-foreground">
                Start a chat session with anyone. No accounts needed — just
                share the link and start talking.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-background border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Link2 className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Link-Based Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Everything works through links. No contact exchange, no sign-ups
                — just share and go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-medium mb-2">Choose What to Share</h3>
              <p className="text-sm text-muted-foreground">
                Select files, paste text, or start a chat session.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-medium mb-2">Get Your Link</h3>
              <p className="text-sm text-muted-foreground">
                We generate a unique link for your content instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-medium mb-2">Share with Anyone</h3>
              <p className="text-sm text-muted-foreground">
                Send the link — recipients access your content directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Ready to share without limits?
          </h2>
          <p className="mb-8 opacity-90">
            Join thousands of users sharing files, text, and chatting — all for
            free.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/send">
              Start Sharing Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
