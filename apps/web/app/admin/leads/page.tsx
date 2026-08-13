import { getLeads } from '@/lib/api';
import { updateLeadStatus, deleteLead } from './actions';

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Leads & Enquiries</h1>
          <p className="text-slate-500 text-sm">Manage test drives, general contacts, and vehicle enquiries.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-500">
            <tr>
              <th className="px-6 py-4">Lead Status</th>
              <th className="px-6 py-4">Customer Details</th>
              <th className="px-6 py-4">Enquiry Type</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 whitespace-normal">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50 transition">
                 <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-700' : 
                      lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {lead.status}
                    </span>
                 </td>
                 <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{lead.name}</div>
                    <div className="text-xs text-slate-500">{lead.email} • {lead.phone}</div>
                    {lead.message && (
                      <p className="text-xs mt-2 italic text-slate-600 line-clamp-2 max-w-xs">&quot;{lead.message}&quot;</p>
                    )}
                 </td>
                 <td className="px-6 py-4">
                    <div className="font-bold text-slate-700">{lead.type}</div>
                    {lead.car && <div className="text-xs text-blue-600">{lead.car.make} {lead.car.model}</div>}
                    {lead.preferred_date && <div className="text-[10px] font-bold text-slate-400 mt-1 uppercase">Date: {lead.preferred_date}</div>}
                 </td>
                 <td className="px-6 py-4 text-slate-600">
                    {new Date(lead.created_at).toLocaleDateString()}
                 </td>
                 <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3 flex-wrap max-w-[150px]">
                      {lead.status !== 'Contacted' && (
                        <form action={updateLeadStatus}>
                          <input type="hidden" name="id" value={lead.id} />
                          <input type="hidden" name="status" value="Contacted" />
                          <button type="submit" className="text-[10px] font-bold uppercase text-yellow-600 hover:text-yellow-800">Mark Contacted</button>
                        </form>
                      )}
                      {lead.status !== 'Resolved' && (
                        <form action={updateLeadStatus}>
                          <input type="hidden" name="id" value={lead.id} />
                          <input type="hidden" name="status" value="Resolved" />
                          <button type="submit" className="text-[10px] font-bold uppercase text-green-600 hover:text-green-800">Mark Resolved</button>
                        </form>
                      )}
                      <form action={deleteLead}>
                        <input type="hidden" name="id" value={lead.id} />
                        <button type="submit" className="text-[10px] font-bold uppercase text-red-500 hover:text-red-700 ml-2">Delete</button>
                      </form>
                    </div>
                 </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                  No leads or enquiries yet. Let your customers know you&apos;re open for business!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
