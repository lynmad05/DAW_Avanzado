import { Spinner } from "@/components/ui/spinner"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <Spinner className="h-10 w-10" />
    </div>
  )
}