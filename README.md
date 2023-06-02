#

#

# KONTATINHOS - Todos os seus kontatinhos em um só lugar

## Descrição

Backend da aplicação Kontatinhos.

Uma aplicação para cadastro de usuários e seus kontatos.

Um usuário só pode pesquisar seu próprio usuário, editar os próprios dados e deletar seu usuário.

Um usuário só pode pesquisar os seus próprios kontatos, pesquisar seus kontatos, editar os dados dos seus kontatos e deletar os seus kontatos.

Não será possível criar um usuário caso o e-mail já esteja sendo usado por outro usuário.

#

#

#

## Instalação das dependências

```bash
$ npm install
```

## Rodando as migrações

```bash
$ npm run typeorm migration:run -- -d ./src/data-source.ts
```

#

#

#

# URL Base: http://localhost:3000

#

#

# Users

## Criar um usuário

### Endpoint: /users - POST

```bash
{
	"name": "user",
	"email": "user@mail.com",
	"password": "12345678",
	"phoneNumber": "5541987654321"
}
```

## Retorno em caso de sucesso

### STATUS: 201 - CREATED

```bash
{
    "id": "8e6283f8-5589-417c-9a51-3dfbe6a6f3f1",
	"name": "user",
	"email": "user@mail.com",
	"phoneNumber": "5541987654321",
	"userImage": null,
    "createdAt": "2023-05-30"
}
```

#

## Recuperar os dados do próprio usuário (Necessário estar logado - enviar token válido)

### Endpoint: /users - GET

```bash
# sem corpo na requisição
```

## Retorno em caso de sucesso

### STATUS: 200 - OK

```bash
{
    "id": "8e6283f8-5589-417c-9a51-3dfbe6a6f3f1",
	"name": "user",
	"email": "user@mail.com",
	"phoneNumber": "5541987654321",
	"userImage": null,
    "createdAt": "2023-05-30"
}
```

#

## Editar os dados do próprio usuário (Necessário estar logado - enviar token válido)

### Endpoint: /users - PATCH

```bash
{
	"name": "new name",
	"password": "87654321",
	"userImage": "url_da_imagem",
}
```

## Retorno em caso de sucesso

### STATUS: 200 - OK

```bash
{
    "id": "8e6283f8-5589-417c-9a51-3dfbe6a6f3f1",
	"name": "new name",
	"email": "user@mail.com",
	"phoneNumber": "5541987654321",
	"userImage": "url_da_imagem",
    "createdAt": "2023-05-30"
}
```

#

## Deletar o próprio usuário (Necessário estar logado - enviar token válido)

### Endpoint: /users - DELETE

```bash
# sem corpo na requisição
```

## Retorno em caso de sucesso

### STATUS: 204 - NO CONTENT

```bash
# sem retorno na requisição
```

#

#

#

# Kontacts

## Criar um kontatinho (Necessário estar logado - enviar token válido)

### Endpoint: /kontacts - POST

```bash
{
	"name": "kontact",
	"email": "kontact@mail.com",
	"phoneNumber": "5541987654321"
}
```

## Retorno em caso de sucesso

### STATUS: 201 - CREATED

```bash
{
	"id": "c12dde02-8bde-44d7-af8f-ccd97169b3e9",
	"name": "kontact",
	"email": "kontact@mail.com",
	"phoneNumber": "5541987654321"
    "kontactImage": null,
	"createdAt": "2023-05-30"
}
```

#

## Listar todos os kontatinhos (Necessário estar logado - enviar token válido)

### Endpoint: /kontacts - GET

```bash
# sem corpo na requisição
```

## Retorno em caso de sucesso

### STATUS: 200 - OK

```bash
[
    {
        "id": "f6a299a1-8fd9-458f-9723-bc474c5786d3",
        "name": "kontact",
        "email": "kontact@mail.com",
        "phoneNumber": "5541987654321",
        "kontactImage": null,
        "createdAt": "2023-05-30"
    },
    {
        "id": "c12dde02-8bde-44d7-af8f-ccd97169b3e9",
        "name": "new kontact",
        "email": "new_kontact@mail.com",
        "phoneNumber": "5541123456789",
        "kontactImage": null,
        "createdAt": "2023-05-30"
    },

]
```

#

## Recuperar os dados de um kontatinho (Necessário estar logado - enviar token válido)

### Endpoint: /kontacts/id - GET

```bash
# sem corpo na requisição
```

## Retorno em caso de sucesso

### STATUS: 200 - OK

```bash
{
	"id": "c12dde02-8bde-44d7-af8f-ccd97169b3e9",
	"name": "kontact",
	"email": "kontact@mail.com",
	"phoneNumber": "5541987654321"
    "kontactImage": null,
	"createdAt": "2023-05-30"
}
```

#

## Editar os dados de um kontatinho (Necessário estar logado - enviar token válido)

### Endpoint: /kontacts/id - PATCH

```bash
{
    "name": "new kontact",
    "kontactImage": "url_da_imagem"

}
```

## Retorno em caso de sucesso

### STATUS: 200 - OK

```bash
{
    "id": "c12dde02-8bde-44d7-af8f-ccd97169b3e9",
    "name": "new kontact",
    "email": "kontact@mail.com",
    "phoneNumber": "5541987654321",
    "kontactImage": "url_da_imagem"
    "createdAt": "2023-05-30"
}
```

#

## Deletar um kontatinho (Necessário estar logado - enviar token válido)

### Endpoint: /kontacts/id - DELETE

```bash
# sem corpo na requisição
```

## Retorno em caso de sucesso

### STATUS: 204 - NO CONTENT

```bash
# sem retorno na requisição
```

#

#

#

# Login

## Realizando login

### Endpoint: /login - POST

```bash
{
	"email": "user@mail.com",
	"password": "12345678"
}
```

## Retorno em caso de sucesso

### STATUS: 200 - OK

```bash
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZhbGRlY2lyIiwiaWF0IjoxNjg1NDgwMzY3LCJleHAiOjE2ODU1NjY3NjcsInN1YiI6IjhlNjI4M2Y4LTU1ODktNDE3Yy05YTUxLTNkZmJlNmE2ZjNmMSJ9.WLcNpemQyZGodnybGNeTETOrdyNGHsxGc3KdmNgzHVk"
}
```
