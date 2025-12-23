import Send from "@/views/app/send";
import Text from "@/views/app/text";
import Chat from "@/views/app/chat";
import History from "@/views/app/history";
import Setting from "@/views/app/settings";

export const appRoutes = [
  {
    index: true,
    element: <Send />,
  },
  {
    path: "send",
    element: <Send />,
  },
  {
    path: "text",
    element: <Text />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "history",
    element: <History />,
  },
  {
    path: "settings",
    element: <Setting />,
  },
];
