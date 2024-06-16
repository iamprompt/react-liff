import { LIFFContext, useLIFFValue } from './context'
import { LIFFProviderProps } from './types'

export function LIFFProvider({ children, liffId }: LIFFProviderProps) {
  const value = useLIFFValue({ liffId })

  return <LIFFContext.Provider value={value}>{children}</LIFFContext.Provider>
}
