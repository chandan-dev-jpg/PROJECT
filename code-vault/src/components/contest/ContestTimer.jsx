import { useEffect, useState } from 'react'
import { Timer } from 'lucide-react'

export default function ContestTimer({ initial = '00:42:18' }) {
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const [h, m, s] = initial.split(':').map(Number)
    return h * 3600 + m * 60 + s
  })

  useEffect(() => {
    const id = setInterval(() => setSecondsLeft(s => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const h = String(Math.floor(secondsLeft / 3600)).padStart(2, '0')
  const m = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, '0')
  const s = String(secondsLeft % 60).padStart(2, '0')

  return (
    <div className="flex items-center gap-1.5 font-mono-num text-sm font-semibold text-vault-rose">
      <Timer className="h-4 w-4" /> {h}:{m}:{s}
    </div>
  )
}
