import { type Profile, useLIFF } from '@iamprompt/react-liff'
import liff from '@line/liff'
import { useCallback, useEffect, useState } from 'react'

function App() {
  const { isReady, error } = useLIFF()
  const [profile, setProfile] = useState<Profile | null>(null)

  const getProfile = useCallback(async () => {
    if (!liff.isLoggedIn()) {
      setProfile(null)
      return
    }

    const profile = await liff.getProfile()
    setProfile(profile)
  }, [setProfile])

  useEffect(() => {
    if (!isReady) {
      return
    }

    getProfile()
  }, [isReady])

  return (
    <div className="flex flex-col items-center px-4 py-6">
      <h1 className="font-bold text-4xl mb-10">LIFF Example</h1>
      {error ? (
        <>
          <p className="text-red-500">Code: {error.code}</p>
          <p className="text-red-500">Error: {error.message}</p>
        </>
      ) : (
        <>
          <div className="overflow-hidden rounded-full">
            <img
              src={profile?.pictureUrl}
              alt={profile?.displayName}
              className="size-40"
            />
          </div>
          <p className="mt-4 text-xl">{profile?.displayName}</p>
          <p className="mt-1 text-gray-500">{profile?.statusMessage}</p>
          <p className="mt-1 text-gray-500">{profile?.userId}</p>
        </>
      )}
    </div>
  )
}

export default App
