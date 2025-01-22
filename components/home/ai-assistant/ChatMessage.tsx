interface ChatMessageProps {
  content: string;
  type: "user" | "bot";
}

export default function ChatMessage({ content, type }: ChatMessageProps) {
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          type === "user"
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {content}
      </div>
    </div>
  );
}