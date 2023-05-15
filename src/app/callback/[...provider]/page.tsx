'use client'

import { useSearchParams } from "next/navigation"

export default function CallbackPage({}) {

  const searchParams = useSearchParams()

  const data = searchParams.toString()

  return <div>{JSON.stringify(data)}</div>
}
