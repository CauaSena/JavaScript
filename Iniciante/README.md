## 1. O Cartão de Visitas

O que fazer: Declare três variáveis separadas. Uma para o seu primeiro nome, uma para sua idade e uma terceira que guarde um valor booleano (`true ou false`) indicando se você está empregado ou não.

Critério Sênior: Escolha as palavras-chaves corretas (`const ou let`) e garanta que os tipos (`String, Number, Boolean`) estão corretos.
## 2. O Erro do Estagiário (`const` vs `let`)

**Contexto:** O trecho de código abaixo apresenta uma violação de atribuição que resulta em um erro de sintaxe em tempo de execução (`TypeError`), interrompendo o fluxo do sistema. 

**Proposta:** Realize a refatoração do código utilizando a palavra-chave adequada para permitir a reatribuição de valor à variável.

```javascript
const faturamentoFixo = 5000;
faturamentoFixo = 6000; 
console.log(faturamentoFixo);
```

## 3. Concatenação Moderna (*Template Literals*)

**Contexto:** A manipulação de strings em JavaScript evoluiu para permitir a interpolação de variáveis sem a necessidade de fragmentação de código ou uso excessivo de operadores aritméticos de adição (`+`).

**Proposta:** Utilize a sintaxe de *Template Strings* (delimitada por crases ``` `` 
``` e expressões ```${}```) para realizar a interpolação das variáveis fornecidas, gerando como saída a string exata: `"O produto Notebook custa R$ 3500"`.

```javascript
const produto = "Notebook";
const preco = 3500;
```

## 4. Operação de Média Aritmética

**Contexto:** O cálculo de médias exige a correta aplicação das regras de precedência dos operadores aritméticos na linguagem, garantindo que as operações de adição precedam a operação de divisão.

**Proposta:** Declare as variáveis para armazenar as três notas fornecidas (`8.5`, `7.2` e `9.0`) e implemente uma expressão que calcule a média aritmética simples entre elas, armazenando o resultado em uma nova variável.

* **Requisito Técnico:** Certifique-se de utilizar os parênteses para isolar a soma das notas antes de dividi-las pela quantidade total de elementos.
## 5. Inspeção de Tipos Dinâmicos (`typeof`)

**Contexto:** JavaScript é uma linguagem de tipagem dinâmica, onde o tipo de uma variável é determinado pelo valor atribuído a ela. Dados delimitados por aspas são interpretados como cadeias de caracteres, independentemente do seu conteúdo numérico.

**Proposta:** Declare uma variável inicializada com o valor literal `"42"`. Utilize o operador unário `typeof` para inspecionar o tipo primitivo do dado em tempo de execução e direcione o resultado para o console do sistema.

---

# Parte 2: Exercícios de Fixação (Lógica de Programação e Fluxo de Controle)

Foco em estruturas condicionais, manipulação de coleções indexadas, escopo de funções e laços de repetição.

### 6. Validação de Acesso Condicional (`if/else`)

**Contexto:** O desvio de fluxo condicional permite a execução segregada de blocos de código baseada em uma expressão booleana (verdadeira ou falsa).

**Proposta:** Aloque uma variável para armazenar o valor estático de uma idade. Implemente uma estrutura de controle `if/else` que avalie a maioridade civil (maior ou igual a 18 anos). O sistema deve imprimir a string `"Acesso liberado"` caso a condição seja verdadeira, ou `"Acesso negado"` no cenário analítico oposto.

### 7. Verificação de Paridade (Operador de Resto `%`)

**Contexto:** O operador aritmético de módulo ou resto (`%`) retorna o resíduo numérico de uma divisão inteira, sendo o mecanismo padrão para determinar a paridade de um operando.

**Proposta:** Desenvolva um algoritmo que receba uma variável numérica e determine sua paridade. Se o resto da divisão por 2 for estritamente igual a zero, execute o bloco de código correspondente à condição de número par; caso contrário, execute o bloco designado para números ímpares.

### 8. Estruturas de Dados Indexadas (Manipulação de Arrays)

**Contexto:** Arrays em JavaScript representam listas ordenadas de elementos enumerados a partir do índice zero (`0`), cujas propriedades estruturais podem ser acessadas via atributos nativos do protótipo.

**Proposta:** Instancie uma estrutura de array contendo exatamente quatro elementos do tipo string representando itens de consumo. Em seguida, realize duas operações de saída em console:
1. Acesse e exiba o primeiro elemento utilizando a notação de colchetes e seu índice correspondente.
2. Exiba a extensão volumétrica (quantidade total de elementos) da coleção através da propriedade nativa `.length`.

### 9. Abstração de Escopo e Reutilização (Sintaxe de Funções)

**Contexto:** Funções encapsulam blocos de código logicamente independentes, aceitando argumentos como parâmetros de entrada e retornando valores específicos após o processamento.

**Proposta:** Declare uma função nomeada `saudar` que possua um parâmetro formal de entrada destinado a receber um nome. A assinatura da função deve retornar uma string contendo a mensagem parametrizada: `"Olá, [nome], seja bem-vindo!"`. Após a declaração, invoque a rotina passando uma string como argumento prático.

### 10. Mutação de Vetores (Métodos de Array)

**Contexto:** O protótipo global de arrays fornece métodos nativos para inserção e remoção de elementos nas extremidades da estrutura de dados, modificando o comprimento do vetor original.

**Proposta:** Considere a estrutura estática inicial `const estoque = ["Mouse", "Teclado"];`. Aplique as funções utilitárias da linguagem para executar sequencialmente:
1. A inserção do elemento `"Monitor"` na última posição do vetor.
2. A remoção subsequente do último elemento alocado na coleção.

### 11. Aplicação de Lógica Condicional Progressiva

**Contexto:** Cálculos percentuais e aplicação de descontos financeiros baseados em regras de negócio exigem validação prévia de gatilhos numéricos mínimos.

**Proposta:** Inicialize a variável `valorCompra` com o valor numérico `120`. Desenvolva uma estrutura de decisão que verifique se o montante excede o limite crítico de `100`. Sendo positivo, calcule e deduza uma taxa de desconto de 10% sobre o valor, imprimindo o saldo corrigido; caso contrário, exiba o valor nominal original.

### 12. Fluxo Iterativo Controlado (Laço `for`)

**Contexto:** Laços de repetição determinísticos utilizam variáveis de controle, condições de parada e expressões de decremento para iterar blocos de instruções sem causar travamentos por consumo infinito de memória.

**Proposta:** Construa uma estrutura de repetição `for` configurada para decrementar uma variável contadora a partir do valor inicial `5` até o limite inferior inclusivo `1`, registrando cada passo da contagem regressiva no console de saída.

### 13. Validação de Estado de String (Campos de Entrada)

**Contexto:** O tratamento de dados inseridos pelo usuário exige a verificação de cadeias de caracteres vazias para mitigar falhas de processamento ou submissões inválidas.

**Proposta:** Declare uma variável de controle para representar o `inputUsuario`. Desenvolva uma lógica condicional para validar se o valor atual é equivalente a uma string sem conteúdo (`""`). O sistema deve ramificar o fluxo emitindo mensagens técnicas distintas para o status de campo vazio e campo preenchido.

### 14. Estruturas de Objetos Literais

**Contexto:** Objetos em JavaScript são coleções dinâmicas de pares de chave-valor que permitem a modelagem de entidades complexas e o acesso a membros via notação de ponto (`.`).

**Proposta:** Instancie um objeto literal que mapeie a entidade de um cliente através das chaves `nome`, `email` e `pontos`. Em seguida, extraia e imprima exclusivamente o valor associado à propriedade `email` utilizando o operador de membro adequado.

### 15. Manipulação Algebria de Sinais

**Contexto:** A inversão ou normalização do sinal aritmético de um operando real pode ser executada por meio de operadores matemáticos básicos ou funções do objeto global de operações da linguagem.

**Proposta:** Atribua um valor numérico estritamente negativo (ex: `-15`) a uma variável. Desenvolva uma instrução de linha única que converta a representação do numeral para o seu valor absoluto equivalente (positivo) e renderize o resultado no terminal de execução.