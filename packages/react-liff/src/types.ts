import { Liff } from '@line/liff'
import { ReactNode } from 'react'

export type LIFFContextValue = {
  isReady: boolean
  error: LIFFError | null
}

export type UseLIFFContextValueOptions = {
  liffId: string
}

export type LIFFProviderProps = {
  children: ReactNode
  liffId: string
}

export type LIFFError = {
  code: string
  message?: string
  cause?: unknown
}

export type Profile = Awaited<ReturnType<Liff['getProfile']>>
