export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed';

export type AdminRole = 'admin';

export interface CarFilters {
  make?: string;
  model?: string;
  year?: number;
  bodyType?: string;
  maxPrice?: number;
  page?: number;
  pageSize?: number;
}

export interface LeadInput {
  carId?: string;
  type: string;
  name: string;
  email?: string;
  phone?: string;
  preferredDate?: string;
  message?: string;
}
