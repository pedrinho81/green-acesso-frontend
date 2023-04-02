
# Green Acesso
## Teste de front-end

O projeto está em funciomento em; https://green-acesso.netlify.app

Ou
#### Rodando localmente
### Clone o projeto
Clone o projeto

```bash
  $ git clone git@github.com:pedrinho81/green-acesso-frontend.git
```


### Vá até o diretório onde o projeto se encontra e utilize os seguintes comandos

```bash
  $ npm install ou $ yarn install =>  Instalar dependências
  $ npm dev ou $ yarn dev =>  Rodar o projeto em um servidor local no seu navegador (localhost:3000)
```
## Introdução
Este documento descreve a documentação do projeto de teste técnico de frontend React, que tem como objetivo consumir a API do "Rick and Morty". O projeto foi desenvolvido com base nas especificações fornecidas pela Green Acesso.

## Descrição do Projeto:
A aplicação desenvolvida tem a seguinte estrutura:

   - Página inicial: exibe os personagens principais da série. Cada personagem é representado por uma imagem, seu nome e sua última localização, ao clicar no botão de 'Detalhes' será redirecionado para uma página com informações do personagem, como nome, espécie, origem, localização, entre outras, ao clicar no ícone de estrela no canto superior direito adicionará ou removerá o personagem a uma lista de personagens favoritos.
   - Página de Favoritos: exibe uma lista com os personagens definidos anteriormente como favoritos.
   - Página de detalhes: exibe o card de personagem e uma tabela com mais informações sobre o mesmo, onde é possível copiar os dados da mesma para seu clipboard ao clicar em seu respectivo campo.
## Funcionalidades
- Paginação;
- Busca por nome do personagem
- Opção para favoritar o personagem na página de listagem e detalhes;
- Página com filtro de personagens favoritos;
- Copiar texto dos dados do personagens na sua página de detalhes;
- Responsividade;

## Tecnologias usadas
- Next.js 
- React-query
- Styled-components
- Typescript
- React-toastify

### Considerações Finais:
O projeto foi desenvolvido com sucesso, atingindo todos os objetivos principais propostos pelo cliente. A aplicação é responsiva, adaptando-se a diferentes tamanhos de tela, e possui uma interface atraente e intuitiva. As informações obtidas da API do "Rick and Morty" são exibidas de forma clara e organizada, permitindo que o usuário tenha uma experiência agradável ao utilizar a aplicação.
