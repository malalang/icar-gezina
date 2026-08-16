import type { ReactNode } from 'react'
import type { ResourceKey } from './resource-config'
import { resources } from './resource-config'

export function ResourceForm({ resource, action, record, cars = [] }: { resource:ResourceKey; action:(formData:FormData)=>void; record?:any; cars?:any[] }) {
  const config = resources[resource]
  return <form action={action} className="form-grid">
    <input type="hidden" name="resource" value={resource}/>
    {record?.id && <input type="hidden" name="id" value={record.id}/>} 
    {config.fields.map(field => {
      const value = record?.[field.name] ?? ''
      const common:any = { name:field.name, required:field.required, defaultValue: field.type === 'checkbox' ? undefined : value, className:'input' }
      const label = <label className="field-label" htmlFor={field.name}>{field.label}{field.required ? ' *' : ''}</label>
      if (field.type === 'checkbox') return <div className="field" key={field.name}><label className="checkbox"><input type="checkbox" name={field.name} defaultChecked={Boolean(value)}/>{field.label}</label></div>
      if (field.name === 'car_id' && cars.length) return <div className="field" key={field.name}>{label}<select {...common} defaultValue={value || ''}><option value="">Select vehicle</option>{cars.map(car=><option key={car.id} value={car.id}>{car.make} {car.model} ({car.year})</option>)}</select></div>
      if (field.options) return <div className="field" key={field.name}>{label}<select {...common}><option value="">Select...</option>{field.options.map(option=><option key={option} value={option}>{option}</option>)}</select></div>
      if (field.type === 'textarea') return <div className="field field-wide" key={field.name}>{label}<textarea {...common} rows={6}/></div>
      return <div className="field" key={field.name}>{label}<input {...common} type={field.type ?? 'text'} /></div>
    })}
    <div className="form-actions"><button className="button" type="submit">{record ? 'Save changes' : 'Create record'}</button></div>
  </form>
}
