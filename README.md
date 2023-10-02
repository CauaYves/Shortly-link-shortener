
# Projeto #17 - Shortly API

### Este é o projeto "Shortly: Links that fit in your pocket!", um encurtador de URLs que permite aos usuários converter URLs longas em URLs curtas e compartilhá-las de forma mais conveniente.

## Tecnologias

![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

# Preview
![ezgif com-gif-maker](https://github.com/CauaYves/projeto17-shortly-front/assets/108950428/007f306e-0b01-449e-9161-60950fb29386)
# Funcionalidades
  Os usuários podem se cadastrar e fazer login na plataforma.
  Os usuários autenticados podem encurtar URLs longas, gerando URLs curtas exclusivas.
  Os usuários podem compartilhar as URLs curtas geradas com outras pessoas.
  As URLs curtas redirecionam automaticamente para as URLs longas correspondentes.
  Os usuários podem visualizar estatísticas sobre as URLs curtas, como o número de cliques.
# Tecnologias Utilizadas
  Node.js
  Express.js
  PostgreSQL
  JWT (JSON Web Tokens) para autenticação
  Bcrypt para criptografia de senhas
  Sequelize como ORM (Object-Relational Mapping)
# Configuração do Ambiente
  Clone este repositório.
  Instale as dependências usando o comando npm install.
  Crie um arquivo .env na raiz do projeto e defina as seguintes variáveis de ambiente:
```
DATABASE_URL=postgres://username:password@localhost:5432/database
JWT_SECRET=your_secret_key
```
#### Certifique-se de ter o PostgreSQL instalado e executando.

#### Execute as migrações do banco de dados usando o comando
```
npx sequelize-cli db:migrate.
```
Inicie o servidor usando o comando 
```
npm start.
```

# Rotas da API
#### Autenticação
  POST /api/auth/register: Cria um novo usuário.  
  
  POST /api/auth/login: Faz o login de um usuário e retorna um token de autenticação.
#### URLs
  POST /api/urls: Cria uma nova URL curta.  
  
  GET /api/urls/:shortCode: Redireciona para a URL longa correspondente ao código curto fornecido.  
  
  GET /api/urls/:shortCode/stats: Retorna as estatísticas da URL curta.  
  
# Contribuição
As contribuições para este projeto são bem-vindas. Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença
Este projeto está licenciado sob a licença MIT.
Yves 
