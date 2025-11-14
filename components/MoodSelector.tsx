"use client";

import { useMemo, useState } from "react";

type Mood = "inspire" | "relax" | "explore";

const moodCopy: Record<Mood, { title: string; description: string }> = {
  inspire: {
    title: "Tu es prêt·e à accomplir de grandes choses.",
    description:
      "Respire, aligne tes idées, puis lance-toi. Chaque grande aventure commence par un salut."
  },
  relax: {
    title: "Prends un instant pour toi.",
    description:
      "Un moment de calme, une tasse de café, et un ciel pastel. Parfois, cela suffit pour recharger les batteries."
  },
  explore: {
    title: "Le monde t'attend.",
    description:
      "Pars à la découverte d'une nouvelle idée, d'une saveur inconnue ou d'une conversation inattendue."
  }
};

const moods: { key: Mood; label: string }[] = [
  { key: "inspire", label: "Inspiration" },
  { key: "relax", label: "Détente" },
  { key: "explore", label: "Exploration" }
];

export function MoodSelector() {
  const [mood, setMood] = useState<Mood>("inspire");

  const activeCopy = useMemo(() => moodCopy[mood], [mood]);

  return (
    <section className="rounded-2xl border border-sky-200/40 bg-white/70 p-6 shadow-lg shadow-sky-500/10 backdrop-blur">
      <div className="flex flex-wrap items-center gap-3">
        {moods.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setMood(key)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 ${
              key === mood
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "bg-sky-50 text-sky-600 hover:bg-sky-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-5 space-y-2 text-sky-900">
        <h3 className="text-lg font-semibold">{activeCopy.title}</h3>
        <p className="text-sm leading-relaxed text-sky-700">{activeCopy.description}</p>
      </div>
    </section>
  );
}
