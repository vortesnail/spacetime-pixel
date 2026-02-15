import { Button } from '@/components/ui/button'

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="rounded-xl border bg-white p-10 text-center shadow-sm">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900">Hello World</h1>
        <p className="mb-6 text-slate-600">Vite + Tailwind CSS + shadcn/ui + TypeScript 已就绪。</p>
        <Button>Hello from Zakiya</Button>
      </div>
    </main>
  )
}

export default App
