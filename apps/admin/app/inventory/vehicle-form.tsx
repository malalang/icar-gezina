'use client'

import type { ReactNode } from 'react'

export type VehicleFormValues = { id?: string; make:string; model:string; year:number; price:number; mileage:number; fuelType:string; transmission:string; bodyType:string; color:string; imageUrl:string; galleryUrls:string[]; description:string; features:string[] }

export function VehicleForm({ values, action, submitLabel }: { values: VehicleFormValues; action: (formData: FormData) => void; submitLabel: string }) {
  return <form action={action} className="vehicle-form">
    {values.id && <input type="hidden" name="id" value={values.id}/>}<div className="form-grid">
      <Field label="Make" name="make" defaultValue={values.make}/><Field label="Model" name="model" defaultValue={values.model}/><Field label="Year" name="year" type="number" defaultValue={values.year}/><Field label="Price" name="price" type="number" defaultValue={values.price}/><Field label="Mileage" name="mileage" type="number" defaultValue={values.mileage}/><Field label="Fuel type" name="fuelType" defaultValue={values.fuelType}/><Field label="Transmission" name="transmission" defaultValue={values.transmission}/><Field label="Body type" name="bodyType" defaultValue={values.bodyType}/><Field label="Colour" name="color" defaultValue={values.color}/><Field label="Main image URL" name="imageUrl" defaultValue={values.imageUrl}/>
    </div><label>Description<textarea name="description" defaultValue={values.description} rows={6}/></label><label>Features <span className="form-hint">One per line</span><textarea name="features" defaultValue={values.features.join('\n')} rows={6}/></label><label>Gallery image URLs <span className="form-hint">One per line</span><textarea name="galleryUrls" defaultValue={values.galleryUrls.join('\n')} rows={5}/></label><button className="button" type="submit">{submitLabel}</button>
  </form>
}
function Field({ label, name, defaultValue, type='text' }: { label:string; name:string; defaultValue:string|number; type?:string }): ReactNode { return <label>{label}<input name={name} type={type} defaultValue={defaultValue}/></label> }
