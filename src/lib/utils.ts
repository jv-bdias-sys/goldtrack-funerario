import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formatação de data e hora para o contexto brasileiro
export function formatDate(date: string | Date): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('pt-BR')
}

export function formatTime(time: string): string {
  return time.substring(0, 5) // Remove segundos se houver
}

export function formatDateTime(datetime: string | Date): string {
  const dateObj = typeof datetime === 'string' ? new Date(datetime) : datetime
  return dateObj.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Função para gerar ID único para serviços
export function generateServiceId(): string {
  const year = new Date().getFullYear()
  const randomNum = Math.floor(Math.random() * 9999).toString().padStart(4, '0')
  return `GT-${year}-${randomNum}`
}

// Função para validar telefone brasileiro
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/
  return phoneRegex.test(phone)
}

// Função para formatar telefone
export function formatPhone(phone: string): string {
  const numbers = phone.replace(/\D/g, '')
  if (numbers.length === 11) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
  } else if (numbers.length === 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
  }
  return phone
}

// Função para validar email
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Função para gerar mensagem de WhatsApp
export function generateWhatsAppMessage(
  deceasedName: string,
  statusName: string,
  serviceId: string,
  trackingUrl: string
): string {
  return `Olá, informamos que ${statusName.toLowerCase()} para ${deceasedName}. Você pode acompanhar o atendimento em tempo real neste link: ${trackingUrl}

Atenciosamente,
Equipe GoldTrack`
}

// Função para calcular tempo médio entre etapas
export function calculateAverageTime(updates: Array<{ timestamp: string }>): number {
  if (updates.length < 2) return 0
  
  const times = updates.map(update => new Date(update.timestamp).getTime())
  const intervals = []
  
  for (let i = 1; i < times.length; i++) {
    intervals.push(times[i] - times[i - 1])
  }
  
  const averageMs = intervals.reduce((sum, interval) => sum + interval, 0) / intervals.length
  return Math.round(averageMs / (1000 * 60 * 60)) // Retorna em horas
}