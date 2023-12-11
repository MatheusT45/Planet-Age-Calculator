# Planet Age Calculator

Gostaria primeiramente de desculpar pela demora na entrega do desafio, eu tive que subir um ambiente de desenvolvimento na minha máquina pessoal durante o período de avaliação, mas no final deu tudo certo!

------

## Um pouco sobre mim...

> 1) Como você começou no mundo da programação? Quais foram suas motivações? O que chamou sua atenção?

Eu sempre gostei muito de jogos então foi meio que por abstração xD. 
Desde o colégio eu adorava exercícios de lógica e no final do ensino médio, 
consegui a oportunidade de fazer o curso de Sistemas de Informação com bolsa de 100% pelo Prouni.
Desde esse dia nunca mais parei de estudar.

> 2) Você tem algum projeto pessoal que tem trabalhado recentemente? Se sim,
poderia nos contar um pouco sobre o projeto e quais tem sido seus principais
desafios?

Recentemente eu estava trabalhando na Descomplica, e tive pouco tempo para projetos pessoais, mas o meu último projeto foi esse: [crypto-exch-challenge](https://github.com/MatheusT45/crypto-exch-challenge)
um front-end focado em troca de criptomoedas. Nas horas vagas, por diversão também desenvolvi esse joguinho com um amigo meu: [project-galaxy](https://github.com/MatheusT45/project-galaxy) que da pra ser jogado aqui: https://project-galaxy.vercel.app/

Sobre desafios, eu sempre tento ao máximo sair da minha zona de conforto, por mais que esse desafio tenha sido em Javascript (uma linguagem que eu ja estou bem acostumado), implementar a containerização com o Docker e fazer os testes unitários foi um desafio muito interessante pra mim, e agraceço pela oportunidade de realizá-lo!

> 3) Para você, qual é a forma mais efetiva de aprender algo novo relacionado à
programação?

Pra mim é por a mão na massa, ir desenvolvendo com a documentação (e o stackoverflow) ao lado para consultas é a melhor forma de aprender.

Ler matérias em sites como https://dev.to/, https://medium.com/ e realizar testes no https://www.hackerrank.com/ e https://leetcode.com/ também fazem parte do meu aprendizado e considero que ajudam bastante.

> 4) Defina, na sua percepção, quais características uma pessoa deve ter para ser
considerada boa desenvolvedora?

Eu considero comunicação um ponto fortíssimo para um desenvolvedor, saber ouvir, trazer suas ideias para o time, de forma pouco defensiva, é uma das características que eu mais admiro em pessoas desenvolvedoras, e procuro sempre seguir esse caminho.

Mais uma vez, gostaria de agradecer a oportunidade de realizar esse desafio! Segue a Doc da API:


## Endpoints

```
HTTP POST /age-on-planet
Arguments:
{
  seconds: integer,
  type: string (
    'mercury',
    'venus',
    'earth',
    'mars',
    'jupiter',
    'saturn',
    'uranus',
    'neptune'
   )
}
```

cURL:


## Running tests
```
npm run test
```

## Running locally

Theres 2 option to run locally, both of them will be hosted on `localhost:3000`

### - Using NPM

```
npm run dev
```

### - Using Docker

```
docker-compose up
```
