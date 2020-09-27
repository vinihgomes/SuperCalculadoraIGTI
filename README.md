# SuperCalculadoraIGTI


Objetivos
Exercitar os seguintes conceitos trabalhados no Módulo:
✓ Utilização de elementos HTML.
✓ Utilização de CSS.
✓ Utilização de identificadores em elementos HTML.
✓ Captura de referência de elementos com JavaScript.
✓ Manipulação de eventos com JavaScript.
✓ Implementação de funções com JavaScript.
Enunciado
Construa, utilizando HTML, CSS e JavaScript puro, uma aplicação denominada
Super Calculadora.
Atividades
Os alunos deverão desempenhar as seguintes atividades:
1. Implementar, utilizando HTML, CSS e JavaScript puro, uma aplicação que efetue
diversos cálculos através de dois números definidos pelo usuário, através de dois
inputs do tipo number. Considere que os valores serão apelidados de A e B para
melhor explicar os tópicos abaixo.
2. Esses cálculos devem ser exibidos em 12 inputs de texto somente-leitura, que
devem calcular, respectivamente:
a. O valor de A + B.
b. O valor de A – B.
c. O valor de B – A.
d. O valor de A x B.
e. O valor de A / B, indicando o valor "Divisão por 0" caso não seja possível
dividir (B === 0).
f. O valor de B / A, indicando o valor "Divisão por 0" caso não seja possível
dividir (A === 0).
g. O valor de A².
h. O valor de B².
i. Os divisores inteiros de A em forma de lista, separada por vírgulas e indicação
da quantidade total entre parênteses.
j. Os divisores inteiros de B em forma de lista, separada por vírgulas e indicação
da quantidade total entre parênteses.
k. O valor do fatorial de A, que deve ser calculado com A <= 21, somente. Indicar
"Número muito grande" caso A > 21.
l. O valor do fatorial de B, que deve ser calculado com B <= 21, somente. Indicar
"Número muito grande" caso B > 21.
3. A imagem abaixo ilustra uma possível interface para a aplicação. O layout foi feito
com o apoio da biblioteca Materialize.
Dicas
▪ Existem várias maneiras de se resolver um problema. Dê mais prioridade ao código
funcionando corretamente e menos prioridade à interface gráfica.
▪ Exemplo de função para formatação de valores numéricos, utilizando a biblioteca
nativa Intl do JavaScript. Para mais informações, verifique este link:
o
▪ Para formatar um número para utilizar somente 2 casas decimais, utilize a função
toFixed(2). Envolva esse cálculo na função formatNumber, definida no tópico
acima. Para mais informações, verifique este link.
▪ Para converter um array em string, pesquise e utilize a função join, nativa do
JavaScript.
▪ Para converter um valor do formato string para number, recomenda-se a utilização
da função parseInt(value, 10). Para mais informações, verifique este link.
▪ Procure apoio no respectivo fórum do módulo e auxilie os seus colegas. Isso
contribui muito para o seu aprendizado!
▪ Caso ainda esteja com dificuldades para implementar o Trabalho Prático, acesse
este projeto online, que é bastante semelhante e pode ser útil. O código-fonte está
bastante comentado e pode conter dicas extras. Nesse projeto, que na minha opinião
é mais complexo que o Trabalho Prático, há alguns exemplos de funções que ainda
não foram oficialmente vistas no módulo, tais como split, reverse, filter e includes.
De qualquer forma, vale a pena pesquisar por elas para entendê-las melhor. Uma
dica extra: tente implementar sozinho (com o apoio do fórum) e só recorra ao projeto
online em último caso. Lembre-se de que você vai aprender muito mais se fizer
sozinho.
