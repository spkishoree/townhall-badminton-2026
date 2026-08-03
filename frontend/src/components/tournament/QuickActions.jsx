import { Link } from "react-router-dom";

const actions = [
  {
    title: "Register",
    description: "Register for Singles or Doubles",
    color: "bg-orange-600 hover:bg-orange-700",
    link: "/register",
    icon: "📝",
  },
  {
    title: "Participants",
    description: "View Registered Players",
    color: "bg-green-600 hover:bg-green-700",
    link: "/participants",
    icon: "👥",
  },
];

export default function QuickActions() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-10">
      <div className="grid md:grid-cols-2 gap-6">
        {actions.map((action) => (
          <Link
            key={action.title}
            to={action.link}
            className={`${action.color} text-white rounded-2xl p-8 shadow-xl transition-transform hover:scale-105`}
          >
            <div className="text-5xl">{action.icon}</div>

            <h2 className="text-2xl font-bold mt-5">
              {action.title}
            </h2>

            <p className="mt-3 opacity-90">
              {action.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}