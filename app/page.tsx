import { MoodSelector } from "@/components/MoodSelector";

const highlights = [
  {
    title: "Commencer la journée",
    description:
      "Accueille ton équipe avec une touche de soleil. Partage une intention et invite chacun à dire « salut »."
  },
  {
    title: "Créer du lien",
    description:
      "Un simple salut peut ouvrir une conversation, une collaboration ou même une amitié durable."
  },
  {
    title: "Célébrer l'instant",
    description:
      "Savourer l’instant présent, reconnaître les petites victoires et sourire aux personnes autour de toi."
  }
];

const playlists = [
  {
    title: "Vibes Lo-Fi",
    description: "Des beats doux pour accompagner un message ou une pause café inspirée.",
    url: "https://open.spotify.com/playlist/37i9dQZF1DXdxcBWuJkbcy"
  },
  {
    title: "French Touch",
    description: "Le groove électro made in France pour viser l'élégance parisienne.",
    url: "https://open.spotify.com/playlist/37i9dQZF1DWY4xHQp97fN6"
  },
  {
    title: "Morning Acoustic",
    description: "Des notes chaleureuses pour saluer le matin avec douceur.",
    url: "https://open.spotify.com/playlist/37i9dQZF1DX0UrRvztWcAU"
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 pb-24 pt-20 lg:px-12">
      <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-10 shadow-2xl shadow-sky-500/20 backdrop-blur-xl">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-indigo-500 blur-3xl opacity-30" />
        <div className="absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-gradient-to-br from-emerald-300 via-sky-300 to-purple-300 blur-3xl opacity-40" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr,0.8fr] lg:items-center">
          <div className="space-y-5 text-slate-900">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-100/80 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Toujours là pour dire salut
            </span>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Salut&nbsp;! Ravie de te voir ici.
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-700">
              Offre une salve d’ondes positives, partage un sourire numérique et découvre des idées
              pétillantes pour ensoleiller ton quotidien. Cette mini-app est une bulle de lumière
              pour inspirer ton prochain salut.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#idees"
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                Explorer les idées
              </a>
              <a
                href="#playlists"
                className="rounded-full border border-sky-500 px-6 py-3 text-sm font-semibold text-sky-600 transition hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-500"
              >
                Ambiance musicale
              </a>
            </div>
          </div>
          <MoodSelector />
        </div>
      </section>

      <section id="idees" className="space-y-8">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold text-slate-900">Trois moments pour dire « salut »</h2>
          <p className="max-w-2xl text-base text-slate-600">
            Une collection d’idées rapide pour insuffler un peu de magie à ton prochain message ou
            à ta prochaine rencontre.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map(({ title, description }) => (
            <article
              key={title}
              className="h-full rounded-2xl border border-slate-200/60 bg-white/80 p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="playlists"
        className="rounded-3xl border border-indigo-200/50 bg-gradient-to-br from-indigo-50 via-white to-sky-100 p-10 shadow-xl shadow-indigo-200/50"
      >
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold text-slate-900">
            Une bande-son pour accompagner ton salut
          </h2>
          <p className="max-w-3xl text-base text-slate-600">
            Que tu écrives un message, que tu invites des ami·es à passer, ou que tu cherches
            l’énergie parfaite pour prononcer ce salut, ces playlists t’accompagnent.
          </p>
        </header>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {playlists.map(({ title, description, url }) => (
            <article
              key={title}
              className="flex h-full flex-col justify-between rounded-2xl border border-indigo-200 bg-white/70 p-6 shadow-lg shadow-indigo-200/60 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-indigo-700">{description}</p>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-400/40 transition hover:bg-indigo-400"
              >
                Écouter sur Spotify
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="rounded-2xl border border-white/60 bg-white/70 p-6 text-center text-sm text-slate-500 shadow-md">
        <p>
          Créé avec ☀️ pour illuminer tes salutations. Partage ce lien et répands la bonne humeur.
        </p>
      </footer>
    </main>
  );
}
