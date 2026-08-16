'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Image as ImageIcon, Save, Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import { GalleryManager } from './components/gallery-manager'
import { FeatureManager } from './components/feature-manager'

export type VehicleFormValues = { id?: string; make: string; model: string; year: number; price: number; mileage: number; fuelType: string; transmission: string; bodyType: string; color: string; imageUrl: string; galleryUrls: string[]; description: string; features: string[] }
type VehicleFormProps = { values: VehicleFormValues; action: (formData: FormData) => Promise<void>; submitLabel: string }
const bodyTypes = ['SUV', 'Bakkie', 'Hatchback', 'Sedan', 'Coupe', 'Convertible', 'MPV', 'Station Wagon', 'Other']
const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Plug-in Hybrid', 'Electric', 'Other']
const transmissions = ['Automatic', 'Manual', 'CVT', 'DCT', 'Other']

function isNextRedirect(error: unknown) {
  if (!error || typeof error !== 'object') return false
  const digest = 'digest' in error ? (error as { digest?: unknown }).digest : undefined
  return typeof digest === 'string' && digest.startsWith('NEXT_REDIRECT')
}

function validImageUrl(url: string) {
  return /^https?:\/\/[^\s]+$/i.test(url.trim())
}

export function VehicleForm({ values, action, submitLabel }: VehicleFormProps) {
  const [imageUrl, setImageUrl] = useState(values.imageUrl)
  const [gallery, setGallery] = useState(values.galleryUrls)
  const [features, setFeatures] = useState(values.features)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const checklist = [['Vehicle identity', Boolean(values.id)], ['Pricing', Number(values.price) > 0], ['Specifications', Boolean(values.year && values.make && values.model)], ['Cover image', validImageUrl(imageUrl)], ['Gallery', gallery.length > 0]] as const

  async function submit(formData: FormData) {
    setSaving(true); setSaved(false); setError('')
    formData.set('galleryUrls', gallery.join('\n'))
    formData.set('features', features.join('\n'))
    try {
      await action(formData)
      setSaved(true)
    } catch (err) {
      if (isNextRedirect(err)) throw err
      setError(err instanceof Error ? err.message : 'Unable to save vehicle.')
    } finally {
      setSaving(false)
    }
  }

  return <form action={submit} className="vehicle-editor editor-automotive">
    {values.id && <input type="hidden" name="id" value={values.id} />}
    <div className="editor-toolbar"><div><span className="editor-kicker">Inventory / Vehicle editor</span><Link href={values.id ? `/inventory/${values.id}` : '/inventory'} className="back-link"><ArrowLeft size={15} /> {values.id ? 'Vehicle details' : 'Vehicles'}</Link><h2>{values.id ? `${values.make} ${values.model}` : 'New vehicle'}</h2><p>Maintain the customer-facing listing from one place.</p></div><div className="editor-actions"><Link href={values.id ? `/inventory/${values.id}` : '/inventory'} className="button secondary">Cancel</Link><button className="button" type="submit" disabled={saving}><Save size={15} /> {saving ? 'Saving…' : saved ? 'Saved' : submitLabel}</button></div></div>
    {error && <div className="form-error" role="alert">{error}</div>}
    <div className="editor-layout"><div className="editor-main">
      <section className="editor-card"><div className="editor-card-header"><div><h3>Vehicle details</h3><p>Core information shown to customers.</p></div><Sparkles size={18} /></div><div className="form-grid"><Field label="Make" name="make" defaultValue={values.make} required placeholder="e.g. BMW" /><Field label="Model" name="model" defaultValue={values.model} required placeholder="e.g. X3 xDrive20d" /><Field label="Year" name="year" type="number" min="1900" max="2100" defaultValue={values.year} required /><Field label="Price" name="price" type="number" min="0" step="1" defaultValue={values.price} required prefix="R" /><Field label="Mileage" name="mileage" type="number" min="0" step="1" defaultValue={values.mileage} required suffix="km" /><SelectField label="Fuel type" name="fuelType" defaultValue={values.fuelType} options={fuelTypes} /><SelectField label="Transmission" name="transmission" defaultValue={values.transmission} options={transmissions} /><SelectField label="Body type" name="bodyType" defaultValue={values.bodyType} options={bodyTypes} /><Field label="Colour" name="color" defaultValue={values.color} placeholder="e.g. Alpine White" /></div></section>
      <section className="editor-card"><div className="editor-card-header"><div><h3>Description</h3><p>Give the sales team a polished vehicle summary.</p></div></div><label className="field field-wide"><span className="field-label">Vehicle description</span><textarea className="input field-textarea" name="description" defaultValue={values.description} rows={9} placeholder="Describe condition, specification, service history and standout features…" /></label></section>
      <section className="editor-card"><div className="editor-card-header"><div><h3>Features & extras</h3><p>Add individual equipment items. They are saved one feature per line.</p></div><span className="gallery-count">{features.length} {features.length === 1 ? 'FEATURE' : 'FEATURES'}</span></div><FeatureManager value={features} onChange={setFeatures} /></section>
      <section className="editor-card gallery-editor"><div className="editor-card-header"><div><h3>Gallery image URLs</h3><p>Add, preview, remove and reorder the customer-facing vehicle gallery. The first image is the gallery lead.</p></div><span className="gallery-count">{gallery.length} {gallery.length === 1 ? 'IMAGE' : 'IMAGES'}</span></div><GalleryManager value={gallery} onChange={setGallery} /></section>
    </div><aside className="editor-side">
      <section className="editor-card"><div className="editor-card-header"><div><h3>Cover image</h3><p>Primary image used across the showroom.</p></div></div><div className="image-preview large">{imageUrl && validImageUrl(imageUrl) ? <img src={imageUrl} alt={`${values.make} ${values.model} cover preview`} onError={e => { e.currentTarget.style.display = 'none' }} /> : <div><ImageIcon size={30}/><span>{imageUrl ? 'Enter a valid image URL' : 'No cover image'}</span></div>}</div><label className="field"><span className="field-label">Image URL</span><input className="input" name="imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://…" /></label>{imageUrl && <button type="button" className="image-clear" onClick={() => setImageUrl('')}><X size={13} /> Remove cover image</button>}</section>
      <section className="editor-card"><div className="editor-card-header"><div><h3>Publishing checklist</h3><p>Quick quality check before saving.</p></div></div><div className="checklist">{checklist.map(([label, ok]) => <span className={ok ? 'check-ok' : 'check-missing'} key={label}>{ok ? <Check size={14}/> : <span className="check-dot"/>}{label}</span>)}</div></section>
      <section className="editor-card help-card"><h3>Save safely</h3><p>Changes are written directly to the dealership inventory. Use the vehicle detail page to verify the final customer-facing listing.</p><Link href={values.id ? `/inventory/${values.id}` : '/inventory'} className="text-link">View vehicle →</Link></section>
    </aside></div>
  </form>
}

function Field({ label, name, defaultValue, type = 'text', required = false, placeholder, min, max, step, prefix, suffix }: { label: string; name: string; defaultValue: string | number; type?: string; required?: boolean; placeholder?: string; min?: string; max?: string; step?: string; prefix?: string; suffix?: string }) {
  return <label className="field"><span className="field-label">{label}</span><div className="input-wrap">{prefix && <span className="input-affix">{prefix}</span>}<input className="input" name={name} type={type} defaultValue={defaultValue} required={required} placeholder={placeholder} min={min} max={max} step={step} />{suffix && <span className="input-affix">{suffix}</span>}</div></label>
}

function SelectField({ label, name, defaultValue, options }: { label: string; name: string; defaultValue: string; options: string[] }) {
  return <label className="field"><span className="field-label">{label}</span><select className="input" name={name} defaultValue={defaultValue}><option value="">Select {label.toLowerCase()}</option>{options.map(option => <option value={option} key={option}>{option}</option>)}</select></label>
}
