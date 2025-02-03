import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import SidePanel from '@/Components/Admin/SidePanel'

import NavBar from '@/Components/Admin/NavBar'
export default function Dashboard() {
  return (
    <div className='flex flex-row'>
      <SidePanel></SidePanel>
      <div className='w-full flex flex-col'>

        <NavBar></NavBar>
      </div>
    </div>

  )
}

