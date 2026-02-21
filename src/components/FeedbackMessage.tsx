interface FeedbackMessageProps {
  message: string;
  type: "error" | "success";
}

export default function FeedbackMessage({
  message,
  type,
}: FeedbackMessageProps) {
  const styles =
    type === "error" ? "text-red-500" : "text-green-600 text-center";

  return (
    <p className={`text-sm font-medium animate-fade-in ${styles}`}>{message}</p>
  );
}
