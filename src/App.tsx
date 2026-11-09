import { profile } from './data'

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{profile.name}</h1>
      <p className="text-xl text-brand">{profile.title}</p>
      <p className="max-w-xl text-slate-400">{profile.tagline}</p>
    </main>
  )
}

export default App
