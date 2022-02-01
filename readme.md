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

==== Antes de qualquer coisa!!!

Na pasta 03/48/Example-HelloWorld
$ solana-test-validator
$ solana logs
$ solana program deploy /home/lghiggino/Calindra/example-helloworld/dist/program/helloworld.so
$ npm run start


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

O Lehman Brothers era um dos 4 maiores bancos americanos na época. Eles tinham 639 BIlhões de dólares em assets, e falhou.

O FED então realiza o bailout, criando dinheiro e distribuindo aos bancos americanos. Esse dinheiro fica concentrado no topo da cadeia financeira, salva parte do sistema financeiro dos Estados Unidos, mas gera outros problemas. 

1. Essa grana não chega no pequeno consumidor, que além da recessão passa a ter que lidar com inflação
2. Moedas que tinham lastro no dolar se veem desvalorizadas porque o dolar perdeu valor.

Dado esse cenário de previlégio aos bancos em detrimento do consumidor temos um terreno fértil para a criação e adoção de uma alternativa ao sistema centralizado. CLICK

==== Os três pilares
Então feito esse contexto histórico a gente pode começar a falar um pouco mais dessa alternativa ao sistema centralizado. 

==== O que é BlockChain
Simplificadamente, a blockchain é uma lista crescente de logs e dados. Essa lista é composta de multiplos blocos de dados, que estão organizados em ordem cronológica e segurados por criptografia

As transações nas redes blockchain ocorrem dentro de uma rede P2P distribuída globalmente (nodes). Cada computador dos nós contem uma cópia integral da rede e contribui para o funcionamento e segurança da rede. Essa estrutura descentralizada é o que faz com as blockchains sejam sem fronteiras, e resistentes à censura e à fraudes.

==================== IR PARA O LINK
Aqui a gente vai ver de forma gráfica o funcionamento de uma rede.

== HASH
No primeiro lugar existem os hashes. Imagine uma caixa preta em que não importa quais dados entram nela, do outro lado sai uma string de 64 dígitos. É isso que está acontecendo aqui. Então, nessa estrutura o hash é como se fosse uma impressão digital digital dos dados no blocos.

A criptografia se dá na nossa incapacidade de descobrir o valor do hash sem colocar nada dentro do bloco.

== BLOCO
O bloco é essa ideia do hash extendida. A parte de dados do hash foi quebrada em 3 sessões diferentes: bloco, nonce e dados

O hash desse bloco começa com 4 zeros, o que é raro. E porque ele começa com esses 4 zeros, de forma arbitrária, a gente vai dizer que esse bloco está assinado.

Quando digitamos algo diferente dentro do bloco, o hash muda, e como não começa com 4 zeros, esse não é mais um bloco assinado. E é aqui que o Nonce entra. O Nonce é uma maneira de mudarmos os dados do bloco, para tentarmos fazer ele ter um hash iniciado com 4 zeros novamente.

DIGITAR OS NUMEROS NO NONCE: 1....2....3....4....

Quando apertamos o botão "Mineirar", o programa vai incrementando os numeros de 1 até sabe-se-lá-quando tentando achar o primeiro hash que comece com 4 zeros.

== BLOCKCHAIN
Na rede a gente tem esse novo campo no bloco que é o valor do Hash do Prévio. Cada bloco aponta para o bloco anterior até se chegar no bloco genesis (esse que tem o prévio zerado)

O que acontecerá se eu mudar algum campo no bloco 3?
A gente vê que o hash do bloco alterado mudou, e os blocos anteriores ficam íntegros.

Então se mudarmos algo no passado da rede, precisamos reminerar todos os blocos subsequentes. Mas quando alteramos um dado no bloco mais recente, precisaremos minerar apenas aquele bloco para que a rede tenha coerência de dados. É assim que a rede resiste a fraudes e a mutações indesejadas.


== DISTRIBUTED
Aqui temos Peer A, Peer B e Peer C, com cópias completas e identicas da rede

Então o que acontece se colocamos algum dado diferente numa das cópias? 

Vamos alterar o bloco 4 do Participante B, e minerar os hashes. Aqui a gente consegue ver que: o hash do blocos 4 e 5 das redes A e C são iguais. Aqui entra o poder da democracia da rede. Se 51% ou mais das cópias da rede indicarem que o hash correto é o e4b, a rede é capaz de identificar qual é a sua versão correta e ignorar o bloco adulterado.

== TOKEN
Mas essa nossa rede com o campo aberto de dados é meio sem sentido. A razão de exister das blockchain é principalmente para gravar transações que ocorrem entre participantes da rede.

E é aqui que a imutabilidade da rede é importante. Se mudarmos algum valor no bloco 4, da cópia A, será necessário minerar novamente para achar os hashes, e será necessário convencer os outros participantes que aquele hash é o verdadeiro.

É importante notar que a rede só está gravando as transações, mas não o saldo na conta. Então não sabemos realmente se a pessoa X tem o dinheiro para pagar a transação para Y.

== COINBASE
Adicionamos mais um campo no nosso bloco, e nele estamos inventando 100 reais e dando para Anders. E no bloco 2 algumas transações ocorrem a partir da conta do Anders para outras pessoas na rede.

No bloco 5 chegamos à uma série de transações com pessoas diferentes e podemos ver retroativamente se essas pessoas tem aquele saldo, e criamos assim um histórico de TODAS as transações que ocorrem na rede.

E a gente vê que se mudarmos um bloco, a rede toda precisa concordar com a mudança. 

==================== VOLTAR PARA APRESENTAÇÃO

==== O que é Smart Contract
Os Contratos Inteligentes surgiram na rede Ethereum e são programas que rodam na rede. São uma coleção de funções e estados que residem em algum endereço específico nessa Block Chain. São capazes de receber pagadores e recebores como parâmetros das funções, e executar transações mediante assinaturas criptografadas.

Eles são contratos programados que permitem que duas partes estabeleçam condições de uma transação sem ter a necessidade de ter um terceiro grantidor envolvido. 

Imagine...

Eles funcionam no princípio "se A, então B". Então se uma condição específica é cumprida, o próprio programa realiza a operação.

==== O que é Smart Contract 2 = VsCode
Em primeiro lugar vamos falar do Solana e porque adotamos essa rede ao invés da Ethereum.

- Escalabilidade: A Solana já tem capacidade de realizar 51 mil transações por segundo, mais do que a Visa realiza atualmente. A projeção é que eles sejam capazes de realizar 710 mil por segundo. É, de longe, a rede mais capaz nesse quesito.

- Custo: O custo de transação na rede Ethereum tem variado entre 20 e 100 dólares, enquanto que na rede solana conseguimos realizar transações com custo menor que 5 centavos de real.

- Rust: Entendemos que a adoção do Rust traz mais flexibilidade do que o uso do Solidity. A linguagem tem sido adotada por grandes empresas do mercado.

==VsCode
Em primeiro lugar: vai ser necessário instalar o rust e a cli o Solana. 

Uma vez que o Solana esteja instalado, será necessário escolher uma rede (devnet, testnet, ou mainnet). Aqui vamos trabalhar localmente.

$ solana config set --url localhost  

$ solana config get
Então aqui podemos ver as configurações da rede local.
RPC URL é o servidor local. É equivalente à entrada da rede.
Keypair Path é o caminho até a sua carteira configurada quando feita a instalação do solana. Pode ser modificado e pode-se ter mais que uma carteira. Estou usando uma apenas para esses testes.

Então vamos começar a rodar nossa rede local.

NA PASTA 03_-_ProjetosPessoais/48_-_LearnCrypto/example-helloworld

$ solana-test-validator
Esse comando inicia a conexão com a rede local

$ solana logs
Ouve as transações que ocorrem vindas do smart contract

$ npm run build:program-rust
Vai gerar o smart contract compilado, e um comando para fazermos o deploy do programa na rede.

$ solana program deploy /home/lghiggino/Development/03-ProjetosPessoais/48_-_Learn_Crypto/example-helloworld/dist/program/helloworld.so
Quando realizamos o deploy ele gera um programId que é a conta na rede solana onde o programa reside.

Na rede solana, o elemento básico é uma conta. Diferentemente da rede Ethereum, aqui nada existe sem uma conta. Então quando fazemos o deploy do contrato a rede se encarrega de colocá-lo dentro de uma conta. Os dados que estão sendo gravados na blockchain 'vivem' dentro da conta. E quando queremos salvar alguma informação na blockchain, não a colocamos arbitrariamente na rede, mas sim numa conta. Essas contas gerem o dinheiro e esses contratos pagam taxas de execução.

$ npm run start
Roda o 'front' JS dessa aplicação na CLI


A gente vai dar uma olhada rápida no contrato do Rust.

== LIB.RS 
Então o Smart Contract
linha 1 a 10: são os imports que o smart contract vai usar
Borsh: é similar a um JSON.parser/stringifier, ele é o responsável por transformar os dados binários em algo mais facilmente modificável.

linha12: o Derive é uma anotação que extende os métodos do Borsh para o tipo GreetingAccount

linha 19: entrypoint: Money Lego

falar do process_instruction

linha 36: a única maneira que o dinheiro de uma conta pode ser debitada é se o progama dono dessa conta for o executor dessas ações. Então aqui estamos checando se o dono da conta que quero debitar é o mesmo dono do programa
 
linha42: a gente quer pegar o valor de data de uma conta, decodar de bytes para algo mais fácil de trabalhar, incrementar o valor de counter, e serializar em forma de bytes novamente. 

Data nesse caso se refere ao counter que está declarado dentro do GreetingAccount

== Main.ts
No front a gente vai estabelecer a conexão
Vai definir a conta que pagará pela transação
Vai checar se o programa tem a permissão para executar um débito nessa carteira
Vai enviar o Hello, aumentando o counter
e vai logar a transação

== hello_world.ts
linha4: a maior parte desse código está rodando na sua maior parte dessa lib @solna/web3.js

linha 14 e 15: a gente vai usar o fs aqui, vamos rodar o código só na CLI, e não usaremos, por enquanto, uma interface gráfica.

linha16: o borsh aqui novamente

linha89: estabilishConnection
Vamos pegar os dados do RPC, da conexão

linha99: estabilishPayer
Vai pegar uma conta para pagar pela transação.
Nesse exemplo ele vai preferir usar uma conta nesse disposito, senão ele gera um novo par de chaves. (utils linha 57)

Depois ele vai calcular o valor da taxa e confirmar o débito.

Se a conta não tiver o crédito necessário para realizar a transação ele pede um airdrop da taxa para fazer o pagamento. Isso só funciona nessa rede de teste. Em prod teria que dar um throw aqui.


linha136: checkProgram
depois de compilarmos o programa e fazermos o deploy, essa função vai checar se está tudo correto.
linha149: const programInfo 
Essa chamada vai achar a conta na blockchain onde o programa reside.
linha 164: gera uma seed para criar uma nova conta
linha 172: checa se há a conta existente com essa seed, e se não, gera uma conta e realiza a criação da conta.

linha 201: sayHello
Aqui a gente vai enviar a instrução da transação para a conta que receberá o incremento que é a única instrução que o programa executa lá no Rust.
linha 206: aqui em data a gente não está enviando nada de fato, mas se quiséssemos seria aqui que trabalhariamos com os dados.

linha 218: reportGreetings
Aqui a gente vai pegar os dados da conta para a qual enviamos a transação, deserializar usando o Schema dos dados, e logar o valor do counter.

O tipo Struct no Rust é análogo à classe GreetingAccount no front (linha 59). fields é uma necessidade do borsh, e se tivéssemos mais campos aqui, eles estariam dentro do objeto do fields no constructor.

O GreetingSchema é uma maneira de mapear esses campos de acordo com o tipo que está no rust.







==== DAPS
Então quando temos multiplos smart contract combinados para operar em conjunto, temos a possibilidade de realizar operações mais complexas. A isso dá se o nome de DApps (Dcentralized Apps)

As vantagens dos Dapps São:
1. imutabilidade: uma vez publicado na blockchain, ninguém mais consegue alterar o que está dentro dele
2. resistencia a fraudes: já que eles residem na rede, para fraudá-los teria que se modificar os dados de todos os blocos posteriores em 51% da rede.
3. transparencia: são auditáveis
4. disponibilidade: como eles residem na rede, enquanto a rede estiver de pé, eles estarão lá.

As desvantagens são:
1. imutabilidade: como eles são escritos por seres humanos, nós inevitavelmente erramos. Como eles são imutáveis os erros podem ser exponenciais
2. escalabilidade: na maioria dos casos, o tamanho dos Dapps depende da rede onde ele reside. Quantidade de processamento.
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





CONTINUAR EM 01:27:22






