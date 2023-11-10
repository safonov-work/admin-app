import Image from 'next/image'
import styles from './page.module.css'
import { Input } from './components/ui/input/Input'

export default function Home() {
  return (
   <>
   <Input type='email' value='hello' size='large' placeholder="Enter your"></Input>
   </>
  )
}
