import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICESI About Us",
    description: "ICESI University",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="flex items-center">About Page</h1>
    </div>
  );
}