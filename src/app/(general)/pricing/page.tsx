
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ICESI Pricing",
    description: "ICESI University",
};

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="flex items-center">Pricing Page</h1>
    </div>
  );
}