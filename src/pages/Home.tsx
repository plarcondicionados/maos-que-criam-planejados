import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { AntesDepois } from '@/components/sections/AntesDepois'
import { Ambientes } from '@/components/sections/Ambientes'
import { Contato } from '@/components/sections/Contato'
import { Depoimentos } from '@/components/sections/Depoimentos'
import { Diferenciais } from '@/components/sections/Diferenciais'
import { Faq } from '@/components/sections/Faq'
import { Hero } from '@/components/sections/Hero'
import { Manutencao } from '@/components/sections/Manutencao'
import { Processo } from '@/components/sections/Processo'
import { Projetos } from '@/components/sections/Projetos'
import { Sobre } from '@/components/sections/Sobre'
import { Videos } from '@/components/sections/Videos'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Diferenciais />
      <Sobre />
      <Ambientes />
      <Manutencao />
      <Projetos />
      <AntesDepois />
      <Videos />
      <Processo />
      <Depoimentos />
      <Faq />
      <Contato />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
)
