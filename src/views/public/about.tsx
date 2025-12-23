import { FileArchive, MessageSquare, FileText, Link2, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About LinkShyft</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A free, instant sharing platform for files, text, and chat — no sign-ups, 
          no contacts needed. Just share a link.
        </p>
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          LinkShyft was built to make sharing effortless. We believe you shouldn't need 
          to exchange phone numbers, create accounts, or install apps just to send a file 
          or have a quick conversation. Our platform lets you share anything — files, text, 
          or start a chat — through a simple link that works for everyone.
        </p>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex gap-4 p-4 rounded-lg border bg-card">
            <div className="shrink-0">
              <FileArchive className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Send Any File</h3>
              <p className="text-sm text-muted-foreground">
                Share documents, audio, videos, apps, and any file type instantly via a link.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-lg border bg-card">
            <div className="shrink-0">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Share Text</h3>
              <p className="text-sm text-muted-foreground">
                Quickly share code snippets, notes, or any text content with a shareable link.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-lg border bg-card">
            <div className="shrink-0">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Instant Chat</h3>
              <p className="text-sm text-muted-foreground">
                Start a chat session with anyone — no accounts needed, just share the link.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 rounded-lg border bg-card">
            <div className="shrink-0">
              <Link2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Link-Based Sharing</h3>
              <p className="text-sm text-muted-foreground">
                Everything works through simple links. No contact exchange required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          Why It's Free
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          We believe sharing should be accessible to everyone. LinkShyft is completely free 
          to use — no hidden fees, no premium tiers, no limits. Our goal is to remove barriers 
          and make sharing as simple as possible for everyone.
        </p>
      </section>

      {/* Contact */}
      <section className="text-center p-8 rounded-lg bg-muted/30">
        <h2 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          Have Questions?
        </h2>
        <p className="text-muted-foreground">
          We'd love to hear from you. Reach out anytime.
        </p>
      </section>
    </div>
  );
};

export default About;
