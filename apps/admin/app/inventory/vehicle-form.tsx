'use client'

import type { ReactNode } from 'react'
import { useState } from 'react'
import { ArrowLeft, Check, Image as ImageIcon, Save, Sparkles } from 'lucide-react'
import Link from 'next/link'

export type VehicleFormValues = { id?: string; make:string; model:string; year:number; price:number; mileage:number; fuelType:string; transmission:string; bodyType:string; color:string; imageUrl:string; galleryUrls:string[]; description:string; features:string[] }

export function VehicleForm({ values, action, submitLabel }: { values: VehicleFormValues; action: (formData: FormData) => void; submitLabel: string }) {
  const [imageUrl, setImageUrl] = useState(values.imageUrl)
  const [saved, setSaved] = useState(false)
  return <form action={async formData => { setSaved(true); await action(formData) }} className="vehicle-editor">
    <div className="editor-toolbar"><div><Link href="/inventory" className="back-link"><ArrowLeft size={15}/> Vehicles</Link><h2>{values.id ? `${values.make} ${values.model}` : 'New vehicle'}</h2><p>{values.id ? 'Edit listing details, media and showroom information.' : 'Create a complete showroom listing.'}</p></div><div className="editor-actions"><Link href="/inventory" className="button secondary">Cancel</Link><button className="button" type="submit" disabled={saved}><Save size={15}/>{saved ? 'Saving…' : submitLabel}</button></div></div>
    <div className="editor-layout"><div className="editor-main">
      <section className="editor-card"><div className="editor-card-header"><div><h3>Vehicle details</h3><p>Core information shown to customers.</p></div><Sparkles size={18}/></div><div className="form-grid">
        <Field label="Make" name="make" defaultValue={values.make} required/><Field label="Model" name="model" defaultValue={values.model} required/><Field label="Year" name="year" type="number" defaultValue={values.year} required/><Field label="Price" name="price" type="number" defaultValue={values.price} required/><Field label="Mileage" name="mileage" type="number" defaultValue={values.mileage} required/><Field label="Fuel type" name="fuelType" defaultValue={values.fuelType}/><Field label="Transmission" name="transmission" defaultValue={values.transmission}/><Field label="Body type" name="bodyType" defaultValue={values.bodyType}/><Field label="Colour" name="color" defaultValue={values.color}/>
      </div></section>
      <section className="editor-card"><div className="editor-card-header"><div><h3>Description</h3><p>Give the sales team a polished vehicle summary.</p></div></div><textarea className="editor-textarea" name="description" defaultValue={values.description} rows={8} placeholder="Describe condition, specification and standout features…"/></section>
      <section className="editor-card"><div className="editor-card-header"><div><h3>Features</h3><p>One feature per line.</p></div></div><textarea className="editor-textarea" name="features" defaultValue={values.features.join('\n')} rows={8} placeholder="M Sport package\nPanoramic roof\nLeather interior"/></section>
      <section className="editor-card"><div className="editor-card-header"><div><h3>Gallery</h3><p>Add image URLs, one per line.</p></div></div><textarea className="editor-textarea" name="galleryUrls" defaultValue={values.galleryUrls.join('\n')} rows={6} placeholder="https://…"/></section>
    </div><aside className="editor-side"><section className="editor-card"><div className="editor-card-header"><div><h3>Cover image</h3><p>Primary showroom image.</p></div></div><div className="image-preview">{imageUrl ? <img src={imageUrl} alt="Vehicle preview"/> : <div><ImageIcon size={30}/><span>No image selected</span></div>}</div><label>Image URL<input name="imageUrl" value={imageUrl} onChange={e=>setImageUrl(e.target.value)} placeholder="https://…"/></label></section><section className="editor-card"><h3>Publishing checklist</h3><div className="checklist"><span><Check size={14}/> Vehicle identity</span><span><Check size={14}/> Pricing</span><span><Check size={14}/> Specifications</span><span><Check size={14}/> Cover image</span></div></section></aside></div>
  </form>
}
function Field({ label, name, defaultValue, type='text', required=false }: { label:string; name:string; defaultValue:string|number; type?:string; required?:boolean }): ReactNode { return <label>{label}<input name={name} type={type} defaultValue={defaultValue} required={required}/></label> }
