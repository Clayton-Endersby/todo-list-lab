import {initializeApp} from '@firebase/app'
import {getFirestore} from '@firebase/firebase'
import {getAuth} from '@firebase/auth'
import firebaseConfig from './firebaseConfig'

const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()