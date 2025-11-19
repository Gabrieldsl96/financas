# Guia de Configuração - Firebase Firestore

## 1. Criar a Coleção "items" no Firestore

### Passo a Passo:

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Selecione seu projeto "Finanças"
3. No menu lateral, clique em **Firestore Database**
4. Clique em **Create Database**
5. Escolha o modo: **Start in test mode** (para desenvolvimento)
6. Selecione a localização mais próxima
7. Clique em **Create Database**

Pronto! Seu Firestore está criado. Agora vamos criar a coleção:

### Criar a Coleção "items":

1. No Firestore Database, clique em **+ Create collection**
2. Digite o nome: `items`
3. Clique em **Create collection**
4. O Firestore pedirá para criar um documento. Clique em **Auto ID**
5. Adicione os seguintes campos:

```
Field Name: date
Type: timestamp
Value: (clique em set server timestamp)

Field Name: category
Type: string
Value: food

Field Name: title
Type: string
Value: Exemplo de Item

Field Name: value
Type: number
Value: 10.50
```

6. Clique em **Save**

Pronto! Você agora pode deletar este documento de teste (opcional).

## 2. Configurar Variáveis de Ambiente

1. No Firebase Console, vá para **Project Settings** (engrenagem no canto superior esquerdo)
2. Desça até "Your apps" e procure por seu app Web
3. Copie a configuração JSON que aparece
4. Crie um arquivo `.env.local` na raiz do seu projeto (ou renomeie `.env.local.example`)
5. Preencha com os valores:

```env
NEXT_PUBLIC_API_KEY=sua_api_key
NEXT_PUBLIC_AUTH_DOMAIN=seu_projeto.firebaseapp.com
NEXT_PUBLIC_PROJECT_ID=seu_project_id
NEXT_PUBLIC_STORAGE_BUCKET=seu_bucket.appspot.com
NEXT_PUBLIC_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_APP_ID=seu_app_id
```

## 3. Regras de Segurança (Opcional para Desenvolvimento)

Se quiser que qualquer um possa ler e escrever dados (apenas para DEV):

1. No Firestore, vá para aba **Rules**
2. Substitua o conteúdo por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /items/{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

3. Clique em **Publish**

**⚠️ IMPORTANTE:** Para produção, implemente autenticação adequada!

## 4. Estrutura de Dados no Firestore

Cada documento em `items` deve ter:

```
{
  date: Timestamp,      // Data do item
  category: string,     // "food", "rent", "salary", etc
  title: string,        // Descrição do item
  value: number        // Valor (pode ser negativo para despesas)
}
```

## 5. Testar a Integração

1. Inicie o servidor: `pnpm dev`
2. Abra http://localhost:3000
3. O aplicativo deve carregar os dados do Firebase
4. Teste adicionar um novo item usando o formulário
5. Verifique se o item aparece no Firestore

## Pronto! ✅

Seu aplicativo agora está conectado ao Firebase Firestore!
