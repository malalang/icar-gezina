'use client'

import { useTransition } from 'react'
import { Trash2 } from 'lucide-react'
import { deleteVehicle } from './actions'

export function DeleteVehicleButton({ id, name }: { id: string; name: string }) {
  const [pending, startTransition] = useTransition()
  return <button className="button secondary" style={{padding:8}} type="button" disabled={pending} aria-label={`Delete ${name}`} onClick={() => {
    if (!window.confirm(`Delete ${name}? This cannot be undone.`)) return
    const formData = new FormData(); formData.set('id', id)
    startTransition(() => { void deleteVehicle(formData) })
  }}><Trash2 size={15}/></button>
}
