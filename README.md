# Atelie Linha & Lucro - Landing Page

Landing page de venda de curso de crochê com foco em conversão, marketing direto e preservação de parâmetros UTM.

## 🚀 Tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **Supabase** (Database & Storage)
- **CSS Modules** (Styling)
- **pnpm** (Package Manager)

## 🏗️ Decisões Técnicas

### 1. **Next.js App Router**
- Server Components por padrão para melhor performance
- Renderização no servidor reduz bundle do cliente
- Melhor SEO e tempo de carregamento inicial

### 2. **Supabase como Backend**
- Elimina necessidade de API REST customizada
- Row Level Security (RLS) para segurança nativa
- Client-side caching automático
- Storage integrado para imagens

### 3. **Busca Direta de Dados**
- Server Components buscam dados diretamente do Supabase
- Evita chamadas HTTP desnecessárias (`localhost` durante SSR)
- Reduz latência e simplifica arquitetura

### 4. **Preservação de UTM**
- Captura e armazena UTMs no `localStorage` cliente
- Propaga para todas as páginas e CTAs
- Essencial para tracking de campanhas de marketing

### 5. **CSS Modules**
- Scoped styling por componente
- Evita conflitos de classes
- Tree-shaking automático de CSS não usado

### 6. **Estrutura de Pastas**
```
app/
├── api/              # API Routes (fallback/webhooks)
├── checkout/         # Página de checkout
├── thanks/           # Página de agradecimento
├── components/       # Componentes reutilizáveis
│   ├── sections/     # Seções da landing page
│   ├── Header/
│   ├── Footer/
│   └── ...
├── lib/              # Utilitários e clients
│   ├── supabase.js   # Cliente Supabase
│   ├── api.js        # Funções de fetch
│   ├── utm.js        # Lógica de UTM
│   └── data.js       # Mock data (desenvolvimento)
└── globals.css       # Estilos globais
```

## 📋 Pré-requisitos

- **Node.js** 18+ 
- **pnpm** (ou npm/yarn)

## 🛠️ Instalação

```bash
# Clonar o repositório
git clone <repo-url>
cd teste-six

# Instalar dependências
pnpm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas credenciais
```

## ⚙️ Configuração do Supabase

### 1. Criar projeto no Supabase
Acesse https://supabase.com e crie um projeto.

### 2. Configurar `.env.local`
```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon-aqui
```

## 🎯 Rodando o Projeto

### Desenvolvimento
```bash
pnpm dev
```
Acesse: http://localhost:3000

### Build de Produção
```bash
pnpm build
pnpm start
```

### Lint
```bash
pnpm lint
```

## 📄 Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page principal |
| `/checkout` | Página de checkout |
| `/thanks` | Página de agradecimento pós-compra |

## 🔌 API Routes

| Endpoint | Descrição |
|----------|-----------|
| `/api/modules` | Lista de módulos do curso |
| `/api/testimonials` | Depoimentos de alunos |
| `/api/metrics` | Métricas e dados gerais |
| `/api/checkout` | Informações do checkout |

> **Nota**: As páginas buscam dados diretamente do Supabase. As API Routes servem como fallback ou para integrações externas.

## 🎨 Componentes Principais

- **HeroSection** - Seção principal com CTA
- **DeliverablesSection** - Módulos do curso
- **StepsSection** - Passos para o sucesso
- **ResultsSection** - Resultados/métricas
- **AudienceSection** - Para quem é o curso
- **TestimonialsSection** - Depoimentos
- **CtaBlockSection** - CTA final
- **UtmCapture** - Captura UTMs na entrada
- **UtmLink** - Link com UTMs preservados

## 🌐 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
pnpm i -g vercel

# Deploy
vercel
```

**Não esqueça de configurar as variáveis de ambiente no painel da Vercel:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Outras plataformas
O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🔒 Segurança

- ✅ Variáveis sensíveis em `.env.local` (não versionado)
- ✅ Row Level Security (RLS) no Supabase
- ✅ Apenas chave pública (`anon key`) no frontend
- ✅ CORS configurado para domínios específicos

## 📊 Tracking

UTM parameters são capturados e preservados em:
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

Todos os links e CTAs propagam esses parâmetros automaticamente.
