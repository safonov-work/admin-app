import Image from 'next/image'
import styles from './page.module.css'
import { Input } from './components/ui/input/Input'
import { Button } from './components/ui/button/button'
import { AuthForm } from './components/auth-form/auth-from'

export default function Home() {
  return (
   <>
   <AuthForm/>
   </>
  )
}
