'use client'

import { APIProvider } from '@vis.gl/react-google-maps'
import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: Readonly<ProvidersProps>) {
  return <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>{children}</APIProvider>
}
