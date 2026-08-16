export type ResourceKey = 'leads' | 'reviews' | 'testimonials' | 'car-parts' | 'articles'

type Field = { name:string; label:string; type?:'text'|'email'|'number'|'date'|'textarea'|'checkbox'|'select'; required?:boolean; options?:string[] }

export const resources: Record<ResourceKey,{table:string; label:string; description:string; columns:string[]; fields:Field[]}> = {
  leads: { table:'leads', label:'Leads', description:'Vehicle enquiries and finance/contact leads.', columns:['name','type','email','phone','status','created_at'], fields:[
    {name:'type',label:'Lead type',required:true},{name:'name',label:'Name',required:true},{name:'email',label:'Email',type:'email',required:true},{name:'phone',label:'Phone',required:true},{name:'car_id',label:'Vehicle ID'},{name:'preferred_date',label:'Preferred date'},{name:'status',label:'Status',options:['New','Contacted','Qualified','Closed','Lost']},{name:'message',label:'Message',type:'textarea'}]},
  reviews: { table:'car_reviews', label:'Reviews', description:'Customer reviews attached to vehicles.', columns:['author','rating','comment','date'], fields:[
    {name:'car_id',label:'Vehicle ID',required:true},{name:'author',label:'Author',required:true},{name:'rating',label:'Rating',type:'number',required:true},{name:'comment',label:'Comment',type:'textarea',required:true},{name:'date',label:'Date',type:'date'}]},
  testimonials: { table:'testimonials', label:'Testimonials', description:'Customer testimonials shown on the public website.', columns:['author','role','content','created_at'], fields:[
    {name:'author',label:'Author',required:true},{name:'role',label:'Role',required:true},{name:'avatar',label:'Avatar URL'},{name:'content',label:'Content',type:'textarea',required:true}]},
  'car-parts': { table:'car_parts', label:'Car Parts', description:'Inspection and vehicle condition records.', columns:['name','condition','description','created_at'], fields:[
    {name:'car_id',label:'Vehicle ID',required:true},{name:'name',label:'Part name',required:true},{name:'condition',label:'Condition',options:['Excellent','Good','Fair','Needs Replacement','Not Inspected'],required:true},{name:'description',label:'Description',type:'textarea',required:true}]},
  articles: { table:'articles', label:'Articles', description:'Editorial content managed in Supabase.', columns:['title','category','published','published_at','created_at'], fields:[
    {name:'title',label:'Title',required:true},{name:'slug',label:'Slug',required:true},{name:'category',label:'Category'},{name:'excerpt',label:'Excerpt',type:'textarea'},{name:'content',label:'Content',type:'textarea',required:true},{name:'cover_image_url',label:'Cover image URL'},{name:'published',label:'Published',type:'checkbox'},{name:'published_at',label:'Published at',type:'datetime-local'}]}
}

export function getResource(value:string) { return (resources as Record<string,typeof resources[ResourceKey]>)[value] }
