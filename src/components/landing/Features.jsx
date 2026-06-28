import {
  Users,
  CreditCard,
  Car,
  ShieldCheck,
  Bell,
  FileText,
  Wrench,
  BarChart3,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: Users,
      title: "Member Management",
      description: "Manage owners, tenants and family members with ease.",
    },
    {
      icon: CreditCard,
      title: "Maintenance Billing",
      description: "Generate monthly maintenance bills and payment records.",
    },
    {
      icon: Car,
      title: "Parking Management",
      description: "Allocate and monitor vehicle parking efficiently.",
    },
    {
      icon: ShieldCheck,
      title: "Visitor Security",
      description: "Track visitor entry and exit securely.",
    },
    {
      icon: Bell,
      title: "Notice Board",
      description: "Share announcements and emergency notices instantly.",
    },
    {
      icon: FileText,
      title: "Complaint System",
      description: "Residents can raise complaints and track progress.",
    },
    {
      icon: Wrench,
      title: "Facility Management",
      description: "Manage maintenance work and society facilities.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Monitor income, expenses and society performance.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            NestSphere provides every essential feature required
            to manage modern residential societies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;