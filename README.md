# 💰 Sistema Financeiro

Um aplicativo web moderno e responsivo para controle de finanças pessoais. Registre suas receitas e despesas, acompanhe por categoria e visualize seu balanço financeiro em tempo real.

🔗 **[Acesse o site aqui](https://financas.gbcmtecnologia.com.br/)**

## ✨ Características

- 📱 **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- 💾 **Firebase Firestore** - Sincronização em tempo real dos seus dados
- 📊 **Resumo Financeiro** - Visualize receitas, despesas e balanço total
- 🏷️ **Categorização** - Organize suas transações por categoria
- 🗑️ **Gerenciamento Fácil** - Adicione e delete transações com confirmação
- 📅 **Filtro por Mês** - Navegue entre meses para análise histórica
- ⚠️ **Alertas SweetAlert2** - Confirmações e validações amigáveis

## 🚀 Tecnologias Utilizadas

- **React 19.2.0** - Framework frontend
- **Next.js 16.0.3** - Framework React com SSR/SSG
- **TypeScript 5** - Tipagem estática
- **Tailwind CSS 4** - Estilização responsiva
- **Firebase 12.6.0** - Backend e banco de dados (Firestore)
- **SweetAlert2 11.26.3** - Modais elegantes
- **Lucide React** - Ícones modernos
- **pnpm** - Gerenciador de pacotes

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- pnpm ou npm instalado

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/Gabrieldsl96/financas.git
cd financas
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id
```

4. **Execute o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

5. **Abra no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── firebaseConfig.tsx      # Configuração Firebase
│   ├── page.tsx                 # Página principal
│   ├── layout.tsx              # Layout da aplicação
│   └── globals.css             # Estilos globais
├── components/
│   ├── InputArea/               # Formulário de entrada
│   ├── TableArea/               # Tabela de transações
│   ├── TableItem/               # Linha da tabela
│   ├── InfoArea/                # Resumo financeiro
│   ├── ResumeItem/              # Item do resumo
│   └── ui/                      # Componentes UI
├── data/
│   ├── categories.ts            # Categorias disponíveis
│   └── items.ts                 # Dados iniciais
├── helpers/
│   └── dateFilter.ts            # Funções de filtro de data
├── types/
│   ├── Item.ts                  # Tipo Item
│   └── category.ts              # Tipo Category
└── lib/
    └── utils.ts                 # Utilitários
```

## 🎯 Como Usar

### Adicionar uma Transação

1. Preencha a data
2. Selecione uma categoria
3. Digite um título
4. Insira o valor
5. Clique no ícone Send (avião)

### Deletar uma Transação

1. Clique no ícone de lixeira na tabela
2. Confirme a deleção no modal SweetAlert

### Navegar por Mês

Use as setas (← →) no resumo financeiro para navegar entre meses

## 🔧 Configuração Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Ative o Firestore Database
3. Copie as credenciais para o arquivo `.env.local`
4. Crie uma coleção chamada `items` no Firestore
5. Defina as regras de segurança (se necessário)

## 📱 Responsividade

A aplicação utiliza Tailwind CSS com breakpoints:
- **Mobile**: Padrão (até 640px)
- **Tablet**: `sm:` (640px+) e `md:` (768px+)
- **Desktop**: `md:` (768px+)

## 🚢 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Adicione as variáveis de ambiente no painel do Vercel
4. Deploy automático ao fazer push

```bash
git push origin main
```

## 📝 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

Gabriel Lemos - [@Gabrieldsl96](https://github.com/Gabrieldsl96)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se livre para abrir uma issue ou pull request.
