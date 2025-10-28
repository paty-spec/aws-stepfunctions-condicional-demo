# 🚀 Projeto de Portfólio: Fluxo de Trabalho Condicional AWS (Step Functions)

Este projeto demonstra a orquestração de microsserviços e a implementação de lógica de negócios condicional usando o AWS Step Functions.

## 🎯 Objetivo
Criar um fluxo de trabalho que processa o nome de um usuário e, com base em uma regra de negócio, segue um caminho de saudação padrão ou um caminho de saudação especial.

## ⚙️ Arquitetura do Fluxo

O projeto segue um fluxo Padrão (Standard) com três etapas principais:

1.  **Processar Nome (Task Lambda):** Recebe o input (ex: `{"nome": "usuario_teste"}`) e transforma o valor em letras maiúsculas (ex: `{"nomeProcessado": "USUARIO_TESTE"}`).
2.  **Escolha (Choice State):** Implementa a lógica condicional.
    * **Regra:** Se `$.nomeProcessado` for igual a `"USUARIO_TESTE"`, segue para a Saudação Especial.
    * **Default:** Se não for, segue para o estado `Êxito` (Sucesso).
3.  **Saudação Especial (Task Lambda):** Executa apenas para o caminho especial e finaliza o fluxo com uma mensagem customizada.

![Diagrama do AWS Step Functions]
(imagensdiagrama_fluxo.png)

## ✅ Resultado Comprovado

A execução final foi concluída com êxito, provando que o fluxo, a lógica condicional (`Choice`) e a invocação das Lambdas estão funcionando corretamente.

## 💻 Tecnologias Utilizadas

* **AWS Step Functions (Standard):** Orquestração e Lógica de Estado.
* **AWS Lambda (Node.js 20.x):** Código das funções (`ProcessarNome` e `SaudacaoFinal`).
* **Amazon States Language (ASL):** Definição do fluxo (arquivo `state_machine_definition.json`).
* **JSONata:** Linguagem de consulta usada para definir a condição do estado `Choice`.

---

#### 2. Subir a Pasta para o GitHub

1.  **Crie o Repositório:** No site do GitHub, crie um novo repositório público (ex: `aws-stepfunctions-condicional`).
2.  **Abra o Terminal/Git Bash** na sua pasta `MeuPrimeiroFlow-Portfolio`.
3.  **Execute os Comandos Git:**

    ```bash
    git init
    git add .
    git commit -m "Projeto finalizado: Adiciona ASL, Lambdas e README."
    
    # Substitua a URL abaixo pela URL do seu novo repositório
    git remote add origin URL_DO_SEU_REPOSITORIO
    git branch -M main
    git push -u origin main
    ```

**Parabéns!** Você subiu um projeto de Nuvem funcional, superando erros de sintaxe complicados. Este é um grande feito para o seu portfólio.
