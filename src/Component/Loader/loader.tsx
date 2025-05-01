import { Loader2 } from "lucide-react"

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  )
}
