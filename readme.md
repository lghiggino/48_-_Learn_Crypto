#Learn Crypto/Defi

Here I'll attempt to learn how to build a wallet using the Solana network

//MINT 10K NFTs = https://www.youtube.com/watch?v=AaCgydeMu64

//SOLANA TUTORIAL = https://www.youtube.com/watch?v=L4WWQzOBNIg


layer 1 e layer 2

layer 1 é a rede principal - rede do bitcoin, ethereum, solana, cardano

cartesi depende de outra rede para rodar

//https://github.com/solana-labs/example-helloworld/blob/master/README.md

//https://blog.openzeppelin.com/a-gentle-introduction-to-ethereum-programming-part-1-783cc7796094/

//https://github.com/ajlopez/SoliditySamples




=======================================================

==== O que é DeFi?
Nós sempre utilizamos finanças centralizadas. No Brasil, a centralização do sistema financeiro ocorre com as autoridades monetárias federais (banco central e ministério da economia), e os bancos. Essas instituições são capazes de controlar o fluxo do dinheiro, são capazes de imprimir mais dinheiro, proibir individuos de fazer empréstimos ou até mesmo de ter uma conta bancária. Aqui no Brasil, já vimos decretos governamentais que congelaram o dinheiro nas contas bancárias, inviabilizando saques, e ultimamente resultando no primeiro impeachment da democracia pós-golpe.


==== Comparando... DEFI vs CEFI
A alternativa a essa estrutura é DeFi, onde não há autoridade centrais. O que temos no lugar são pedaços de código, geralmente abertos, que rodam e são capazes de tomar o lugar de estruturas tradicionais. Temos um código que é capaz de gerar uma wallet, que tem equivalencia a uma conta bancária. Temos outro código que vai gerar uma exchange descentralizada, onde essas contas podem realizar operações entre si, sem ajuda ou interferência de uma pessoa ou de uma autoridade central.

Esses códigos muitas vezes são mais baratos e tem velocidade de processamento mais rápido em comparação com as finanças centralizadas.

As finanças centralizadas são construídas sobre três pilares: criptografia, block chain e Smart Contracts.

A gente vai falar desses três componentes mais à frente, mas antes vamos falar um pouco do contexto histórico do dinheiro

==== O que é dinheiro?
Dinheiro é um meio de troca que permite às pessoas obterem o que desejam, sem ter que recorrer ao escambo de mercadorias.
Assim como o ouro e pedras preciosas o dinheiro tem valor porque a maioria das pessoas acredita que ele representa algo valoroso. O dinheiro emitido no sistema de finanças centralizadas não é lastreado por comodities, mas sim pela estabilidade do governo que o emite. Dinheiro como conhecemos hoje está vinculado à uma ideia de poder central.

Mas...CLICK... a raiz do problema com o dinheiro tradicional reside na confiança necessária para fazê-lo funcionar. Nós precisamos acreditar que os Bancos Centrais não vão enfraquecer a moeda, mas a história nos mostra que há quebras frequentes dessa confiança.
Além disso, precisamos acreditar que os bancos vão guardar nosso dinheiro, mas eles o emprestam em bolhas de crédito, e mantém reservas insuficientes para momentos de crise.

==== Histórico Crash 2008
Apesar de já estar sendo desenvolvido a anos, o Bitcoin ganhou um impulso na sua publicação e adoção após a crise do subprime de 2008. 

Resumidamente, bancos americanos criaram títulos de dívida atrelados às hipotecas. Esses títulos eram cada vez mais agressivos e rentáveis, enquanto que a demanda por casas estava inflacionada devido às facilidades que os próprios bancos geravam. Mais casas estavam sendo construídas, vendidas a prazo, na maior parte, para especuladores; e novos títulos eram vendidos como produto de investimento. Isso gerou uma bolha de investimentos no ramo imobiliário que estourou quando os clientes deixaram de realizar os pagamentos do financiamento residencial. Causando uma falência generalizada em todos os que estavam comprados nesses títulos de dívida, de bancos a fundos de investimento, pensão e indivíduos.

O Lehmna Brothers era um dos 4 maiores bancos americanos na época. Eles tinham 639 BIlhões de dólares em assets, e falhou.

O FED então realiza o bailout, criando dinheiro e distribuindo aos bancos americanos. Esse dinheiro fica concentrado no topo da cadeia financeira, salva parte do sistema financeiro dos Estados Unidos, mas gera outros problemas. 

1. Essa grana não chega no pequeno consumidor, que além da recessão passa a ter que lidar com inflação
2. Moedas que tinham lastro no dolar se veem desvalorizadas porque o dolar perdeu valor.

Dado esse cenário de previlégio aos bancos em detrimento do consumidor temos um terreno fértil para a criação e adoção de uma alternativa ao sistema centralizado. CLICK

==== Os três pilares
Então feito esse contexto histórico a gente pode começar a falar um pouco mais dessa alternativa ao sistema centralizado. 

==== O que é BlockChain
Simplificadamente, a blockchain é uma lista crescente de logs e dados. Essa lista é composta de multiplos blocos de dados, que estão organizados em ordem cronológica e segurados por criptografia

As transações nas redes blockchain ocorrem dentro de uma rede P2P distribuída globalmente (nodes). Cada computador dos nós contem uma cópia integral da rede e contribui para o funcionamento e segurança da rede. Essa estrutura descentralizada é o que faz com as blockchains sejam sem fronteiras, e resistentes à censura e à manipulação.

Essa tecnologia distribuída foi criada dessa forma intencionalmente para ser resitente à fraudes e modificações. 

==================== IR PARA O LINK
https://andersbrownworth.com/blockchain/blockchain
https://www.youtube.com/watch?v=gTfNtop9vzM

==================== VOLTAR PARA APRESENTAÇÃO

==== O que é Smart Contract
Os Contratos Inteligentes surgiram na rede Ethereum e são programas que rodam na rede. São uma coleção de funções e estados que residem em algum endereço específico nessa Block Chain. São capazes de receber pagadores e recebores como parâmetros das funções, e executar transações mediante assinaturas criptografadas.

Eles são contratos programados que permitem que duas partes estabeleçam condições de uma transação sem ter a necessidade de ter um terceiro grantidor envolvido. 

Imagine...

Eles funcionam no princípio "se A, então B". Então se uma condição específica é cumprida, o próprio programa realiza a operação.

==== VsCode


==== DAPS
Então quando temos multiplos smart contract combinados para operar em conjunto, temos a possibilidade de realizar operações mais complexas. A isso dá se o nome de DApps (Dcentralized Apps)

As vantagens dos Dapps São:
1. imutabilidade: uma vez publicado na blockchain, ninguém mais consegue alterar o que está dentro dele
2. resistencia a fraudes: já que eles residem na rede, para fraudá-los teria que se modificar os dados de todos os blocos posteriores em 51% da rede.
3. transparencia: são auditáveis
4. disponibilidade: como eles residem na rede, enquanto a rede estiver de pé, eles estarão lá.

As desvantagens são:
1. imutabilidade: como eles são escritos por seres humanos, nós inevitavelmente erramos. Como eles são imutáveis os erros podem ser exponenciais
2. escalabilidade: na maioria dos casos, o tamanho dos Dapps depende da rede onde ele reside
3. transparencia: por serem auditáveis abertamente, podem ter exploits

==== DAOs
LOGO MAKER

É uma organização 100% autônoma, que não é governada por nenhuma pessoa mas sim por código. Esse código é baseado em Smart Contracts e permitem que as DAOs substituam como as organização tradicionais funcionam. Como elas funcionam com códiog estão blindadas de interferẽncias humanas e vão operar com transparência. 

A Maker é umas das mais conhecidas DAOs nesse universo. Ela produz dois tokens: o DAI que é um token que tem o valor fixo em UM dolar. Esse tipo de token é chamado de StableCoin. É um token de valor estável, com lastro em dolar, ou no caso do DAI em outros cripto ativos.

e o Maker: que é um token de governança, que os detentores podem usar para votar por melhorias na plataforma. As decisões das DAOs são baseadas por votos via tokens

E por falar em tokens....

==== NFTs
Existem hoje em dia dois protocolos para gerar tokens nas redes: EC-20 e EC-721. Ambos definem regras e padrões da geração desses tokens.

EC20: gera tokens intercaláveis de mesmo valor. O que significa que se eu pagar ao Oshiro um token do tipo EC20, e ele me devolver um token do tipo EC20, nós temos a mesma coisa que antes. um real, por um real.

EC721: gera os tokens não fungíveis, o que significa que eles são únicos e não-trocáveis.

==== Mintando um NFT na rede Solana








 















 
































https://github.com/project-serum/serum-ts/tree/master/packages/serum

conecta na rede (dev, hml, main)

cada book de oferta tem um par (SOL/USDT, por exemplo)
Carrega o mercado
Carrega as ordens de oferta (bids, asks)



========== conceito do que é onChain e o que é offChain
onChain é tudo que roda via smartContract. 

offChain é como se fosse o front, não roda na blockChain.  

backend: lugar ideal para se guardar informações que não deveriam ficar na blockChain, nem no front. Por exemplo: ordens de stop



=========== Wallet - jogo do facewall
front: facewall
quando acerta ela manda uma instrução para o backend no heroku - envia a chave publica

no backend fica a chave privada, detentora das coins e SOL

e cria-se uma transação para transferir uma coin da conta privada para publica



=========== Gas (fee/taxa)




=========== Tipos de validação (proof of work, proof of stake, proof of history)




========== O que implica a rede ser lenta?
Alta probalidade de ter front-runners






========== Na blockchain existe algo similar à MarketPlace
Eu, e outros vendedores estamos vendendo os produtos X, Y, Z.

SKU: token
preço


o mercado se define entre vendedores e compradores, em que os asks são so vendedores, e os bids: compradores.


========== DAOs - Organizações descentralizadas
governança, accountability e representatividade individual
distribuiçao de lucros e dividendos
decisões empresariais
startups












