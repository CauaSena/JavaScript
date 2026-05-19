## 1. Inversão de String (Sem Métodos Prontos)
**O Desafio:** Escreva uma função que inverta uma string sem usar `.split()`, `.reverse()` ou `.join()`.

### Critério de Avaliação Sênior
Iniciantes usam recursão desnecessária ou criam novas strings dentro de um loop convencional (`str = char + str`), o que gera alocação de memória ineficiente no motor V8 (imutabilidade de strings). A solução ideal usa um loop decrescente pré-alocando ou manipulando os índices corretamente.

## 2. O clássico "FizzBuzz" Otimizado
**O Desafio:** Percorra números de 1 a N. Se for múltiplo de 3: "Fizz". Se for múltiplo de 5: "Buzz". Se for de ambos: "FizzBuzz". Caso contrário, o próprio número.

### Critério de Avaliação Sênior
O erro júnior é encher o código de condicionais redundantes como `if (i % 3 === 0 && i % 5 === 0)`. Isso faz o processador executar checagens matemáticas repetidas. A melhor abordagem é a concatenação de strings ou uma estrutura limpa que evite redundância.

## 3. Maior e Menor Elemento (Single Pass)
**O Desafio:** Encontre o maior e o menor número de um array sem usar ``Math.max(...arr)`` ou ``Math.min(...arr)``.

### Critério de Avaliação Sênior
Por que não usar ``Math.max(...arr)``? Porque o operador spread ``(...)`` joga os elementos na pilha de chamadas (Call Stack). Se o array tiver 200.000 itens, seu sistema estoura a memória (Stack Overflow). O correto é varrer o array uma única vez ($O(n)$).

## 4. Verificação de Palíndromo (Two Pointers)
**O Desafio:** Verifique se uma string é um palíndromo (lê-se igual de trás para frente), desconsiderando espaços e maiúsculas.

### Critério de Avaliação Sênior
A abordagem ingênua inverte a string inteira e compara com a original. Isso gasta o dobro de memória. A abordagem sênior usa a técnica de Dois Ponteiros (Two Pointers), comparando o início e o fim simultaneamente até se cruzarem.

## 5. Remoção de Duplicatas em Array Linear
**O Desafio:** Remova todos os elementos duplicados de um array.

### Critério de Avaliação Sênior
Usar `arr.filter((item, index) => arr.indexOf(item) === index)` demonstra total desconhecimento de algoritmos. O `.indexOf()` varre o array internamente. Usá-lo dentro de um `.filter()` transforma seu código em uma tartaruga de complexidade quadrática $O(n^2)$.

## 6. Fatorial sem Estourar a Call Stack
**O Desafio:** Calcule o fatorial de um número N.

### Critério de Avaliação Sênior
Recursão pura (`return n * fatorial(n-1)`) é bonita nos livros de faculdade, mas perigosa na vida real. Cada chamada cria um novo frame de contexto na memória. Para N grandes, isso quebra. A iteração pura com um loop `for` é imbatível em JS.

## 7. Anagramas com Mapas de Frequência
**O Desafio:** Dadas duas strings, mude a ordem dos caracteres e verifique se uma é o anagrama da outra.

### Critério de Avaliação Sênior
Ordenar as duas strings com `.split('').sort().join('')` e compará-las funciona, mas a ordenação custa $O(n \log n)$. Nós podemos resolver isso em tempo estritamente linear $O(n)$ contando a frequência das letras com um objeto (Hash Map).

## 8. O Problema da Soma (Two Sum)
**O Desafio:** Dado um array de números e um valor alvo (target), retorne os índices dos dois números que somados dão o valor alvo.

### Critério de Avaliação Sênior
Dois loops aninhados (`for` dentro de `for`) buscando a combinação é a marca registrada do programador júnior ($O(n^2)$). Um engenheiro sênior usa um mapa de complementos para resolver o problema com uma única passada no array ($O(n)$).

## 9. Contagem de Vogais Segura
**O Desafio:** Conte quantas vogais existem em uma string.

### Critério de Avaliação Sênior
Expressões regulares como `str.match(/[aeiou/gi).length` quebram a aplicação se a string não contiver nenhuma vogal (pois `.match()` retorna `null`, e tentar ler `.length` de `null` gera um erro fatal). É preciso blindar o código ou usar estruturas lineares.

## 10. Sequência de Fibonacci Iterativa
**O Desafio:** Retorne o N-ésimo número da sequência de Fibonacci.

### Critério de Avaliação Sênior
Se você escrever `fib(n) { return fib(n-1) + fib(n-2) }` na minha frente, você está reprovado. Esse algoritmo tem complexidade exponencial $O(2^n)$. Para calcular o Fibonacci de 50, seu navegador vai travar e a aplicação vai cair. Use iteração simples.