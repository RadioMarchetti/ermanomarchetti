import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
// import { getFirestore } from 'firebase/firestore'
import { getDatabase } from 'firebase/database'
// import { getStorage } from 'firebase/storage'

export function initialize () {
  const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

  if (typeof window === 'undefined') {
    return
  } else if (getApps() < 1) {
    const app = initializeApp(firebaseConfig)

    return app
  }

  return getApp()
}

export default initialize()
export const analytics = typeof window !== 'undefined' && isSupported() ? getAnalytics(initialize()) : () => {}
// export const firestore = getFirestore(initialize())
export const database = typeof window !== 'undefined' ? getDatabase(initialize()) : () => {}
// export const storage = getStorage(initialize())
