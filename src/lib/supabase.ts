import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Função para criar as tabelas necessárias
export async function createTables() {
  // Tabela de usuários
  await supabase.rpc('create_users_table', {})
  
  // Tabela de serviços funerários
  await supabase.rpc('create_funeral_services_table', {})
  
  // Tabela de atualizações de status
  await supabase.rpc('create_service_updates_table', {})
  
  // Tabela de documentos
  await supabase.rpc('create_documents_table', {})
  
  // Tabela de notificações
  await supabase.rpc('create_notifications_table', {})
  
  // Tabela de feedback
  await supabase.rpc('create_feedback_table', {})
}