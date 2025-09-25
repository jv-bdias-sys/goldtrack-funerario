"use client"

import { useState } from 'react'
import { Heart, Clock, MapPin, FileText, Phone, Mail, CheckCircle, Truck, Building2, Flower2, Flame, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function GoldTrackHome() {
  const [activeView, setActiveView] = useState<'family' | 'funeral'>('family')

  // Dados de exemplo para demonstração
  const serviceExample = {
    id: "GT-2024-001",
    deceased: "Maria Silva Santos",
    deathDate: "2024-01-15",
    deathTime: "08:30",
    hospital: "Hospital São Lucas",
    wakeLocation: "Capela São José - Rua das Flores, 123",
    familyContact: "João Santos - (11) 99999-9999",
    currentStatus: 3,
    updates: [
      { id: 1, status: "Corpo liberado do hospital", time: "09:15", date: "15/01/2024", responsible: "Dr. Carlos Mendes", completed: true },
      { id: 2, status: "Equipe a caminho", time: "09:45", date: "15/01/2024", responsible: "Equipe GoldTrack", completed: true },
      { id: 3, status: "Preparação concluída", time: "12:30", date: "15/01/2024", responsible: "Tanatopraxia Especializada", completed: true },
      { id: 4, status: "Velório pronto", time: "14:00", date: "15/01/2024", responsible: "Equipe de Cerimônias", completed: false },
      { id: 5, status: "Cerimônia em andamento", time: "", date: "", responsible: "", completed: false },
      { id: 6, status: "Serviço finalizado", time: "", date: "", responsible: "", completed: false }
    ]
  }

  const statusIcons = [
    Building2, // Hospital
    Truck,     // Equipe a caminho
    Heart,     // Preparação
    Flower2,   // Velório
    Flame,     // Cerimônia
    CheckCircle // Finalizado
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">GoldTrack</h1>
                <p className="text-sm text-gray-600">Cuidado e transparência em cada etapa</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant={activeView === 'family' ? 'default' : 'outline'}
                onClick={() => setActiveView('family')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Users className="w-4 h-4 mr-2" />
                Área da Família
              </Button>
              <Button 
                variant={activeView === 'funeral' ? 'default' : 'outline'}
                onClick={() => setActiveView('funeral')}
                className="bg-amber-600 hover:bg-amber-700"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Painel Funerária
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeView === 'family' ? (
          // Área da Família
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Acompanhamento do Serviço</h2>
              <p className="text-gray-600 text-lg">Informações atualizadas em tempo real com carinho e transparência</p>
            </div>

            {/* Informações do Serviço */}
            <Card className="mb-8 border-blue-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-amber-50">
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-blue-600" />
                  {serviceExample.deceased}
                </CardTitle>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {serviceExample.deathDate} às {serviceExample.deathTime}
                  </div>
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 mr-2" />
                    {serviceExample.hospital}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {serviceExample.wakeLocation}
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Linha do Tempo */}
            <Card className="mb-8 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Acompanhamento das Etapas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {serviceExample.updates.map((update, index) => {
                    const Icon = statusIcons[index]
                    const isCompleted = update.completed
                    const isCurrent = index === serviceExample.currentStatus
                    
                    return (
                      <div key={update.id} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          isCompleted 
                            ? 'bg-green-100 text-green-600' 
                            : isCurrent 
                              ? 'bg-blue-100 text-blue-600 ring-4 ring-blue-200' 
                              : 'bg-gray-100 text-gray-400'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className={`text-lg font-medium ${
                              isCompleted ? 'text-green-800' : isCurrent ? 'text-blue-800' : 'text-gray-500'
                            }`}>
                              {update.status}
                            </h3>
                            {isCompleted && (
                              <Badge className="bg-green-100 text-green-800">
                                Concluído
                              </Badge>
                            )}
                            {isCurrent && (
                              <Badge className="bg-blue-100 text-blue-800">
                                Em andamento
                              </Badge>
                            )}
                          </div>
                          {update.time && (
                            <div className="mt-2 text-sm text-gray-600">
                              <p>{update.date} às {update.time}</p>
                              <p>Responsável: {update.responsible}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Ações Rápidas */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-semibold mb-2">Contato WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Fale conosco a qualquer momento</p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">Localização</h3>
                  <p className="text-gray-600 mb-4">Ver local do velório no mapa</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Abrir Mapa
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-amber-600" />
                  <h3 className="text-lg font-semibold mb-2">Documentos</h3>
                  <p className="text-gray-600 mb-4">Contratos e autorizações</p>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Ver Documentos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          // Painel da Funerária
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Painel Administrativo</h2>
              <p className="text-gray-600 text-lg">Gerencie todos os serviços com eficiência e cuidado</p>
            </div>

            <Tabs defaultValue="dashboard" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="services">Serviços Ativos</TabsTrigger>
                <TabsTrigger value="new-service">Novo Serviço</TabsTrigger>
                <TabsTrigger value="reports">Relatórios</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                {/* Métricas Rápidas */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                      <div className="text-sm text-gray-600">Serviços Ativos</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">8</div>
                      <div className="text-sm text-gray-600">Finalizados Hoje</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">4.8</div>
                      <div className="text-sm text-gray-600">Avaliação Média</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
                      <div className="text-sm text-gray-600">Tempo Médio</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Serviços Recentes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Serviços Recentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold">Maria Silva Santos</h4>
                            <p className="text-sm text-gray-600">GT-2024-00{item} • Velório pronto</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Ver Detalhes</Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Atualizar Status</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <Card>
                  <CardHeader>
                    <CardTitle>Serviços Ativos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Lista de serviços ativos aparecerá aqui</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="new-service">
                <Card>
                  <CardHeader>
                    <CardTitle>Cadastrar Novo Serviço</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Formulário de cadastro será implementado aqui</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios e Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-gray-500">
                      <Heart className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Relatórios detalhados serão exibidos aqui</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-800">GoldTrack</span>
            </div>
            <p className="text-gray-600 mb-4">
              Transformando momentos delicados em experiências de confiança e cuidado
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Suporte</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}