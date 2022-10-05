# Ceeozim

## Descrição

Essa biblioteca foi criada como método para aplicar os fundamentos da linguagem javascript assim como seu superset Typescript.

## Features

 * Consulta diretamente a plataforma ViaCEP
 * Sem limite de utilização.
 * Possui alguns testes - sempre que possível novos casos de testes serão incluídos.

## Como Utilizar

### Instalação

Instale via npm ou yarn diretamente - no diretório da aplicação - no bash com o comando:

```bash
npm i ceeozim
```

```bash
yarn add ceeozim 
```
### Utilização

```javascript

import { ViaCEP } from "./services/ViaCEP";

async function getCEP(cep: string){
   const viacep = new ViaCEP();
   console.log(await viacep.findByCEP(cep));
}

async function get_On_Street(uf: string, city: string, street: string){
    const viacep = new ViaCEP();
    console.log(await viacep.findByStreet(uf, city, street));
}

get_On_Street('MG','Belo Horizonte', 'Rio Branco')
getCEP('36030600')

```
