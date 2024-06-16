import liff from '@line/liff'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  LIFFContextValue,
  LIFFError,
  UseLIFFContextValueOptions,
} from './types'

export const LIFFContext = createContext<LIFFContextValue | null>(null)

export function useLIFF() {
  const context = useContext(LIFFContext)
  if (!context) {
    throw new Error('useLIFF must be used within a LIFFProvider')
  }
  return context
}

export function useLIFFValue({
  liffId,
}: UseLIFFContextValueOptions): LIFFContextValue {
  const isInit = useRef(false)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState<LIFFError | null>(null)

  const initializeLIFF = useCallback(async () => {
    try {
      await liff.init({ liffId })
      setReady(true)
    } catch (error) {
      setError({
        code: error.code,
        message: error.message,
        cause: error.cause,
      })
    }
  }, [liffId, setReady, setError])

  useEffect(() => {
    if (isInit.current) {
      return
    }

    isInit.current = true

    initializeLIFF()
  }, [])

  return {
    isReady: ready,
    error,
  }
}
