"use client";
import { useState, useEffect, SetStateAction} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Servicerequest = () => {
  const [messages, setMessages] = useState([]);
  const [isEmailModalOpen, setEmailModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<{ email: string; id: string } | null>(null);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [completedRows, setCompletedRows] = useState<string[]>([]); // Track completed rows

  useEffect(() => {
    fetch("/api/messages")
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages:", error));
  }, []);

  const handleCall = (mobile: any) => {
    const phoneLink = `tel:${mobile}`;
    window.location.href = phoneLink;
  };

  const handleEmailClick = (message: { email: string; id: string; [key: string]: any }) => {
    setSelectedMessage(message);
    setEmailModalOpen(true);
  };

  const handleSendEmail = async () => {
    if (selectedMessage?.email && subject && content) {
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipientEmail: selectedMessage.email,
            subject,
            content,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          toast.success("Email sent successfully!", { position: "top-right" });
          setEmailModalOpen(false);
          setSubject("");
          setContent("");

          // Mark the row as completed
          setCompletedRows((prev) => [...prev, selectedMessage.id]);
        } else {
          console.error("Server error:", data.error || data.message);
          toast.error(
            data.message || "Failed to send email. Please try again.",
            { position: "top-right" }
          );
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error(
          "An error occurred while sending the email. Please check your connection and try again.",
          { position: "top-right" }
        );
      }
    } else {
      toast.error(
        "Please fill out the subject, content fields, and ensure a recipient is selected.",
        { position: "top-right" }
      );
    }
  };

  return (
    <div className="p-6">
     
      <div className="overflow-x-auto rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <table className="w-full table-auto border-collapse border border-gray-300 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-900">
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                ID
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
             Service Requested
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Full Name
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Email
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Mobile
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Message
              </th>
              <th className="border border-gray-300 px-6 py-3 text-left text-sm font-medium text-gray-900 dark:text-gray-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(messages) && messages.length > 0 ? (
    messages.map((message: { id: string; email: string; name?: string; [key: string]: any }) => (
      <tr
        key={message.id}
        className={`transition duration-300 ${
          completedRows.includes(message.id)
            ? "bg-green-100 dark:bg-green-700"
            : "hover:bg-gray-50 dark:hover:bg-gray-700"
        }`}
      >
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          {message.id}
        </td>
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          {message.service}
        </td>
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          {message.name}
        </td>
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          {message.email}
        </td>
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          {message.mobile}
        </td>
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          {message.message}
        </td>
        <td className="border border-gray-300 px-6 py-3 text-sm text-gray-700 dark:text-gray-200">
          <button
            onClick={() => handleCall(message.mobile)}
            className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
          >
            Call
          </button>
          <button
            onClick={() => handleEmailClick({ ...message, email: message.email || "" })}
            className="rounded-md bg-green-500 px-4 py-2 text-white transition duration-300 hover:bg-green-600"
          >
            Email
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={7} className="text-center text-gray-500 dark:text-gray-400">
        No requests available.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>

      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50 p-4">
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Send Email to {typeof selectedMessage === "object" && selectedMessage !== null && "name" in selectedMessage
                ? (selectedMessage.name || selectedMessage.email || "Recipient") as React.ReactNode
                : "Recipient"}
            </h2>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Enter subject"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Enter message"
                rows={4}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleSendEmail}
                className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 hover:bg-blue-600"
              >
                Send
              </button>
              <button
                onClick={() => setEmailModalOpen(false)}
                className="rounded-md bg-gray-300 px-4 py-2 text-gray-800 transition duration-300 hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Servicerequest;
