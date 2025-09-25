// Tipos para o sistema GoldTrack

export interface User {
  id: string
  name: string
  email: string
  type: 'funeral_home' | 'family'
  phone?: string
  created_at: string
  updated_at: string
}

export interface FuneralService {
  id: string
  deceased_name: string
  death_date: string
  death_time: string
  hospital_name: string
  wake_location: string
  wake_address: string
  wake_date?: string
  wake_time?: string
  current_status: number
  funeral_home_id: string
  family_contact_name: string
  family_contact_phone: string
  family_contact_email?: string
  created_at: string
  updated_at: string
}

export interface ServiceUpdate {
  id: string
  service_id: string
  status_step: number
  status_name: string
  timestamp: string
  responsible: string
  notes?: string
  created_at: string
}

export interface Document {
  id: string
  service_id: string
  document_type: 'contract' | 'cremation_authorization' | 'invoice' | 'other'
  document_name: string
  file_url: string
  uploaded_by: string
  created_at: string
}

export interface Notification {
  id: string
  service_id: string
  recipient_phone: string
  message: string
  status: 'pending' | 'sent' | 'failed'
  sent_at?: string
  created_at: string
}

export interface Feedback {
  id: string
  service_id: string
  rating: number
  comment?: string
  created_at: string
}

// Status steps do serviço funerário
export const SERVICE_STEPS = [
  { id: 0, name: 'Corpo liberado do hospital', icon: 'Building2' },
  { id: 1, name: 'Equipe a caminho', icon: 'Truck' },
  { id: 2, name: 'Preparação concluída', icon: 'Heart' },
  { id: 3, name: 'Velório pronto', icon: 'Flower2' },
  { id: 4, name: 'Cerimônia em andamento', icon: 'Flame' },
  { id: 5, name: 'Serviço finalizado', icon: 'CheckCircle' }
] as const

export type ServiceStep = typeof SERVICE_STEPS[number]