import { useState } from "react";
import { MessageSquare, Link2, Copy, Check, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ChatRoom {
  id: string;
  name: string;
  link: string;
  createdAt: Date;
}

const Chat = () => {
  const [roomName, setRoomName] = useState("");
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const createRoom = () => {
    if (!roomName.trim()) return;
    const id = Math.random().toString(36).slice(2, 10);
    const newRoom: ChatRoom = {
      id,
      name: roomName,
      link: `https://linkshyft.com/c/${id}`,
      createdAt: new Date(),
    };
    setChatRooms([newRoom, ...chatRooms]);
    setRoomName("");
  };

  const copyLink = (room: ChatRoom) => {
    navigator.clipboard.writeText(room.link);
    setCopiedId(room.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Chat</h1>
        <p className="text-muted-foreground">
          Create instant chat rooms and share the link to start conversations.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Create Room */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create Chat Room
            </CardTitle>
            <CardDescription>
              Start a new chat room and invite anyone with the link.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <div className="flex-1 space-y-2">
                <Label htmlFor="room-name" className="sr-only">Room Name</Label>
                <Input
                  id="room-name"
                  placeholder="Enter room name..."
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && createRoom()}
                />
              </div>
              <Button onClick={createRoom} disabled={!roomName.trim()}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Create
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Chat Rooms List */}
        {chatRooms.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Your Chat Rooms
              </CardTitle>
              <CardDescription>
                Share these links to invite people to your chat rooms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {chatRooms.map((room) => (
                  <div key={room.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <MessageSquare className="h-5 w-5 text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{room.name}</p>
                      <p className="text-xs text-muted-foreground font-mono truncate">
                        {room.link}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <Button onClick={() => copyLink(room)} variant="outline" size="sm">
                        {copiedId === room.id ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                      <Button variant="default" size="sm">
                        <Link2 className="h-4 w-4 mr-1" />
                        Join
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Empty State */}
        {chatRooms.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No chat rooms yet. Create one to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
