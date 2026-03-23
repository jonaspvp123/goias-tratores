import { motion } from 'motion/react';
import { 
  Tractor, Wrench, Settings, Droplets, ShieldCheck, 
  Clock, Truck, Star, MapPin, Phone, Mail, Instagram, 
  ChevronRight, Menu, X, MessageCircle, ArrowRight,
  Factory, Users, Target, Eye, Heart, Box, BarChart
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "5562999999999"; // Placeholder
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de falar com um especialista sobre peças para tratores.`;

  return (
    <div className="min-h-screen bg-agro-dark text-white font-sans selection:bg-agro-light selection:text-agro-dark">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-agro-light to-agro-green flex items-center justify-center glow-green">
                <Tractor className="text-white w-6 h-6" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Goiás<span className="text-agro-light">Tratores</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#segmentos" className="text-sm font-medium text-gray-300 hover:text-agro-light transition-colors">Segmentos</a>
              <a href="#estrutura" className="text-sm font-medium text-gray-300 hover:text-agro-light transition-colors">Estrutura</a>
              <a href="#diferenciais" className="text-sm font-medium text-gray-300 hover:text-agro-light transition-colors">Diferenciais</a>
              <a href="#sobre" className="text-sm font-medium text-gray-300 hover:text-agro-light transition-colors">Sobre Nós</a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-agro-green/10 border border-agro-green/30 text-agro-light font-medium text-sm hover:bg-agro-green hover:text-white transition-all glow-green-hover flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Fale Conosco
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-agro-dark/95 backdrop-blur-md pt-24 px-4 flex flex-col gap-6 md:hidden">
          <a href="#segmentos" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-300 hover:text-agro-light">Segmentos</a>
          <a href="#estrutura" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-300 hover:text-agro-light">Estrutura</a>
          <a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-300 hover:text-agro-light">Diferenciais</a>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-medium text-gray-300 hover:text-agro-light">Sobre Nós</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-4 px-6 py-3 rounded-full bg-agro-green text-white font-medium text-center glow-green flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Fale Conosco
          </a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1592982537447-6f2a6a0a3023?q=80&w=2070&auto=format&fit=crop" 
            alt="Trator no campo" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-agro-dark/80 via-agro-dark/90 to-agro-dark"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-agro-green/20 to-transparent mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-green/10 border border-agro-green/20 text-agro-light text-xs font-medium uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-agro-light animate-pulse"></span>
              Tecnologia em Peças Agrícolas
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6"
            >
              Peças para Tratores com <span className="text-gradient">Tecnologia</span> e Performance
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
            >
              Qualidade, variedade e entrega rápida em Goiânia. Mantenha sua máquina no campo com a máxima eficiência.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full bg-agro-green text-white font-medium hover:bg-agro-green/90 transition-all glow-green flex items-center justify-center gap-2 group">
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#segmentos" className="px-8 py-4 rounded-full bg-transparent border border-gray-600 text-white font-medium hover:border-agro-light hover:text-agro-light transition-all flex items-center justify-center gap-2">
                Conheça a Empresa
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-agro-green/10 to-transparent blur-3xl rounded-full transform rotate-45"></div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 border-y border-white/5 bg-agro-gray/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 font-medium uppercase tracking-widest mb-8">Trabalhamos com as melhores marcas</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            {['Eaton', 'ZF', 'Massey Ferguson', 'Valtra', 'John Deere'].map((brand, i) => (
              <div key={i} className="text-xl md:text-2xl font-display font-bold text-gray-400 hover:text-agro-light transition-colors cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section id="segmentos" className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-agro-green/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Atendemos toda a <span className="text-agro-light">Cadeia Produtiva</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Fornecemos soluções em peças para diferentes perfis de clientes, garantindo a continuidade das operações no campo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Usinas', icon: Factory, desc: 'Suporte robusto para operações contínuas e de grande escala.' },
              { title: 'Grandes Produtores', icon: Tractor, desc: 'Peças para frotas diversificadas com alta demanda de reposição.' },
              { title: 'Cooperativas', icon: Users, desc: 'Parcerias estratégicas para atender múltiplos cooperados.' },
              { title: 'Oficinas Especializadas', icon: Wrench, desc: 'Fornecimento ágil para quem faz a manutenção acontecer.' },
            ].map((segment, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl p-8 glass-panel border border-white/5 hover:border-agro-green/30 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-agro-dark/80 flex items-center justify-center border border-white/10 group-hover:border-agro-light/50 transition-colors mb-6">
                  <segment.icon className="w-8 h-8 text-agro-light" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-agro-light transition-colors">{segment.title}</h3>
                <p className="text-gray-400 text-sm">{segment.desc}</p>
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-agro-green/50 group-hover:glow-green transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="estrutura" className="py-24 bg-agro-gray/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-agro-green/20 to-transparent blur-3xl rounded-full"></div>
              <div className="glass-panel rounded-2xl p-2 border border-white/10 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Centro de distribuição logístico" 
                  className="rounded-xl w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech UI Overlays */}
                <div className="absolute -bottom-6 -right-6 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-10 h-10 rounded-full bg-agro-green/20 flex items-center justify-center">
                    <Box className="w-5 h-5 text-agro-light" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Gestão de Estoque</p>
                    <p className="text-lg font-bold text-white">Sistema WMS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agro-green/10 border border-agro-green/20 text-agro-light text-xs font-medium uppercase tracking-wider mb-6">
                Logística Inteligente
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Nossa <span className="text-gradient">Estrutura</span> Operacional</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Utilizamos sistemas avançados de gestão para garantir que a peça certa chegue até você no menor tempo possível. Nossa infraestrutura foi desenhada para a máxima eficiência.
              </p>
              
              <ul className="space-y-6">
                {[
                  { title: 'Estoque Integrado', desc: 'Controle rigoroso e rastreamento em tempo real de todas as peças.' },
                  { title: 'Expedição Ágil', desc: 'Processos automatizados para separação e envio imediato.' },
                  { title: 'Centro de Distribuição', desc: 'Localização estratégica em Goiânia para facilitar a logística.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1 w-6 h-6 rounded-full bg-agro-green/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-agro-light"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pilares" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Nossos <span className="text-agro-light">Pilares</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Os princípios que guiam nossa atuação no mercado agrícola.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Missão', icon: Target, desc: 'Fornecer soluções rápidas e eficientes em peças agrícolas, garantindo a produtividade e o sucesso das operações de nossos clientes no campo.' },
              { title: 'Visão', icon: Eye, desc: 'Ser a principal referência tecnológica e logística em distribuição de autopeças para a linha pesada e agrícola no Centro-Oeste.' },
              { title: 'Valores', icon: Heart, desc: 'Agilidade no atendimento, transparência nas negociações, inovação contínua e parceria verdadeira com o produtor rural.' },
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-agro-green/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <pillar.icon className="w-10 h-10 text-agro-light mb-6 relative z-10" />
                <h3 className="text-2xl font-display font-bold mb-4 relative z-10">{pillar.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-24 bg-agro-gray/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Por que escolher a <span className="text-gradient">Goiás Tratores</span>?</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Unimos a força do agronegócio com a precisão da tecnologia. Nosso compromisso é garantir que sua operação nunca pare por falta de peças.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: 'Peças de Qualidade', desc: 'Trabalhamos apenas com procedência garantida.' },
                  { icon: Truck, title: 'Entrega Rápida', desc: 'Logística otimizada para Goiânia e região.' },
                  { icon: Settings, title: 'Grande Estoque', desc: 'Mais de 5.000 itens à pronta entrega.' },
                  { icon: Wrench, title: 'Atendimento Técnico', desc: 'Especialistas prontos para te ajudar.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-agro-dark border border-agro-green/20 flex items-center justify-center text-agro-light shadow-[0_0_15px_rgba(46,204,113,0.15)]">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-agro-green/20 to-transparent blur-3xl rounded-full"></div>
              <div className="glass-panel rounded-2xl p-2 border border-white/10 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tecnologia no campo" 
                  className="rounded-xl w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tech UI Overlays */}
                <div className="absolute -bottom-6 -left-6 glass-panel rounded-xl p-4 border border-white/10 shadow-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 rounded-full bg-agro-green/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-agro-light" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Tempo de Resposta</p>
                    <p className="text-lg font-bold text-white">&lt; 5 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Section */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl border border-white/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium uppercase tracking-wider mb-6 w-fit">
                  Nossa História
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Autoridade no Setor Agrícola</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Com mais de 20 anos de experiência no mercado, a Goiás Tratores se consolidou como referência em peças para maquinário pesado. Nossa infraestrutura tecnológica nos permite localizar e despachar a peça exata que você precisa em tempo recorde.
                </p>
                
                <div className="flex gap-8">
                  <div>
                    <p className="text-4xl font-display font-bold text-agro-light mb-1">+20</p>
                    <p className="text-sm text-gray-400">Anos de Mercado</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-agro-light mb-1">+5k</p>
                    <p className="text-sm text-gray-400">Peças em Estoque</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop" 
                  alt="Oficina mecânica" 
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-agro-gray lg:from-agro-gray/90 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-agro-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">O que dizem nossos <span className="text-agro-light">clientes</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Carlos Mendes', role: 'Produtor Rural', text: 'Sempre encontro as peças para meus tratores Valtra. O atendimento via WhatsApp é muito rápido e a entrega nunca atrasa.' },
              { name: 'Roberto Silva', role: 'Mecânico Agrícola', text: 'A qualidade das peças de reposição é excelente. A equipe técnica entende do assunto e sempre manda a especificação correta.' },
              { name: 'Fazenda Boa Vista', role: 'Empresa Agrícola', text: 'Nossa frota não pode parar. A Goiás Tratores é nossa parceira número um para manter tudo funcionando na época de colheita.' },
            ].map((testimonial, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-agro-light text-agro-light" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-xs text-agro-light">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-agro-green/20 to-agro-dark z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Precisa de peças para seu trator?</h2>
          <p className="text-xl text-gray-300 mb-10">Fale agora com um especialista e receba seu orçamento em minutos.</p>
          
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-agro-green text-white font-bold text-lg hover:bg-agro-green/90 transition-all glow-green hover:scale-105 transform duration-300">
            <MessageCircle className="w-6 h-6" />
            Solicitar Orçamento via WhatsApp
          </a>
        </div>
      </section>

      {/* Location & Footer */}
      <footer className="bg-[#0a0f1d] pt-20 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-md bg-gradient-to-br from-agro-light to-agro-green flex items-center justify-center">
                  <Tractor className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg tracking-tight">
                  Goiás<span className="text-agro-light">Tratores</span>
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-6">
                Sua parceira de confiança em peças e componentes para maquinário agrícola.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-agro-light hover:bg-white/10 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#segmentos" className="text-sm text-gray-400 hover:text-agro-light transition-colors">Segmentos</a></li>
                <li><a href="#estrutura" className="text-sm text-gray-400 hover:text-agro-light transition-colors">Estrutura</a></li>
                <li><a href="#diferenciais" className="text-sm text-gray-400 hover:text-agro-light transition-colors">Diferenciais</a></li>
                <li><a href="#sobre" className="text-sm text-gray-400 hover:text-agro-light transition-colors">Sobre Nós</a></li>
                <li><a href={whatsappLink} className="text-sm text-gray-400 hover:text-agro-light transition-colors">Fale Conosco</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-agro-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">Vendas (WhatsApp)</p>
                    <p className="text-sm font-medium text-white">(62) 9999-9999</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-agro-light flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-400">E-mail</p>
                    <p className="text-sm font-medium text-white">contato@goiastratores.com.br</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Localização</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-agro-light flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-400">
                    Av. Castelo Branco, 1000<br />
                    Setor Campinas<br />
                    Goiânia - GO
                  </p>
                </li>
              </ul>
              {/* Minimal Map Placeholder */}
              <div className="w-full h-24 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <span className="relative z-10 text-xs font-medium text-white bg-agro-dark/80 px-3 py-1 rounded-full backdrop-blur-sm">Ver no Google Maps</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Goiás Tratores. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500">
              Desenvolvido com tecnologia
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 glow-green"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Ping animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      </a>
    </div>
  );
}
