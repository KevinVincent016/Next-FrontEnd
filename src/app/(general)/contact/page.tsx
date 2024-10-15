
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICESI Contact Us",
    description: "ICESI University",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="flex items-center">Contact Page</h1>
    </div>
  );
}