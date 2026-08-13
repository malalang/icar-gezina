import { getTestimonials } from '@/lib/api';
import Image from 'next/image';

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold italic tracking-tight text-slate-900 uppercase">Customer <span className="text-blue-500">Testimonials</span></h1>
          <p className="mt-4 text-slate-600">See what our satisfied customers have to say about their experience with Icar gezina.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between h-full">
              <div>
                <div className="flex gap-1 mb-6 text-yellow-400">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-slate-600 italic leading-relaxed text-sm mb-8">
                  &quot;{testimonial.content}&quot;
                </p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 relative shrink-0">
                  <Image src={testimonial.avatar} alt={testimonial.author} fill className="object-cover" unoptimized />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-xs text-blue-600 font-bold uppercase tracking-widest mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
