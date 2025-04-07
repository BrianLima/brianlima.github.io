---
layout: post
title: Como ser um programador na industria de jogos mas não programar jogos
tags: talks gamedev dev campusparty pt-br
cover: 'https://saopauloparacriancas.com.br/wp-content/uploads/2023/07/campus-party-cpbr-2023-data-do-evento-como-participar-onde-sera-e-mais-1200x900-1-800x600.jpg'
subtitle: 'Por que um jogo pode ser mais complexo do que parece'
---

Em 2023, mais precisamente no dia 30 de Junho, eu apresentei no palco Games da Campus Party Brasil 2023 #CPBR15, curado pelo querido Rodrigo Sellback, a seguinte palestra, que leva como titulo o mesmo deste post, mas como já faz um bom tempo, venho aqui expor algumas observações agora que possuo o dobro de tempo neste mercado e pude observá-lo ainda mais a fundo:

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQd1mxT7SLyk887Ubdy4pAq-ciCPOHcHgaAsSgj5-MPG0jwylqdmP3W6YzgLN2lPQ/embed?start=true&loop=false&delayms=30000" frameborder="0" width="1280" height="749" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Um jogo moderno possui diversas facetas que vão muito além do tradicionalíssimo chapéu do "GameDev". A pessoa que se interessa em contribuir de alguma forma com a indústria de games pode escolher trabalhar com gráficos, engine, rotinas e inteligência de NPCs, otimização e performance, ou até com algumas áreas que se assemelham ao desenvolvimento mais tradicional, como interface e localização.

Porém, muitas dessas frentes nas quais um desenvolvedor atua em um jogo são extremamente focadas nesse universo, seja pelo ferramental, que pouco se assemelha ao desenvolvimento Web, Mobile ou de diversas outras áreas da programação comum, ou pelos desafios enfrentados em cada especialização. As métricas utilizadas para otimização de jogos são completamente diferentes das utilizadas, por exemplo, para otimizar uma página web, um servidor, uma loja ou um método de pagamento. Por mais que, em ambos os contextos, o tempo de resposta seja extremamente importante, os meios pelos quais se chega a um tempo de resposta aceitável são completamente diferentes — assim como aquilo que define um tempo de resposta satisfatório.

Entretanto, evoluímos. Viemos do Atari e dos arcades com suas listas de pontuação que permitiam apenas três letras e pontuações não muito altas (para caberem na memória), e chegamos aos shooters competitivos com serviços de matchmaking, aos jogadores que postam seus melhores feitos em placares acessíveis no mundo inteiro, aos jogos que interagem com chats de transmissões ao vivo, aos jogos que são testados automaticamente por automações não muito diferentes das que são utilizadas por desenvolvedores Frontend...

Para que um jogador possa interagir com esses tipos de funcionalidades em jogos, faz-se necessário o uso de serviços muito similares aos de uma aplicação web tradicional. Uma leaderboard é composta tanto pelo jogo, que gera a pontuação com os dados do jogador, quanto por um servidor que recebe essas pontuações, as armazena de forma segura e as devolve quando requisitado. Esse servidor quase sempre é construído com tecnologias que, para o programador médio, são muito mais familiares do que Lua/Unity/Unreal — linguagens como C#, Python, Java, Ruby, entre outras, podem ser empregadas na construção dessas funcionalidades server-side.

Isso é muito democrático com o programador que, por qualquer motivo, sempre gostou muito do mercado de games, mas nunca pôde interagir com ele diretamente. Seu conhecimento e experiência podem ser tão bem aproveitados por um estúdio de jogos quanto em qualquer outra empresa na qual ele estaria apto a trabalhar.

Além das interações que giram em torno de um jogo, as regras de negócio adjacentes ao universo dos games possuem desafios que não são tão frequentes em outros tipos de produtos com os quais trabalhamos. Falando um pouco sobre meu trabalho na <a href="https://nuuvem.com/">Nuuvem</a> e o de outros desenvolvedores da equipe, diariamente precisamos pensar em como construir uma loja dentro do contexto de jogos: coisas como a localização regional de preços, a disponibilidade regional de produtos, a forma como eles são vendidos atendendo às exigências de publishers, plataformas e desenvolvedoras, fornecedores e métodos de pagamento, descobribilidade, acessibilidade, mecânicas de promoções, performance do site etc.

Todas essas coisas não são necessariamente exclusivas a uma plataforma de jogos, mas no contexto em que trabalhamos, é preciso um cuidado diferente em como atacamos certos desafios e no que é mais ou menos relevante.

Por exemplo, a Niantic lida diariamente com picos que ultrapassam 1 milhão de requisições por segundo. Na Nuuvem, além da loja (que possui seus próprios picos imprevisíveis), desenvolvemos uma plataforma de WebGaming chamada N-Arcade, que precisa lidar com a compatibilidade com os navegadores e o hardware dos jogadores. A Valve tem construído a experiência do Steam Deck com base em um fork do KDE Plasma, com uma customização pesada utilizando tecnologias como Qt e Node.js...

Mas além da Nuuvem, também é possível ser um programador não-GameDev em outras empresas de jogos. Veja alguns exemplos (pesquisa feita em 07/04/2025):

  - <a href ="https://web.archive.org/web/20250407044437/https://www.epicgames.com/site/pt-BR/careers/jobs/5471332004">Engenheiro de Segurança – Backend @ Epic Games Brazil</a>

  - <a href="https://web.archive.org/web/20250407044920/https://www.epicgames.com/site/pt-BR/careers/jobs/5462699004">Senior DevOps Programmer @ Epic Games Brazil</a>

  - <a href="https://web.archive.org/web/20250407203418/https://www.ubisoft.com/en-us/company/careers/search/744000046893535-back-end-golang-developer">Backend Golang Developer @ Ubisoft</a>

  - <a href="https://web.archive.org/web/20250407203803/https://jobs.ea.com/en_US/careers/JobDetail/FC-Online-Server-Software-Engineer/208816">Server Software Developer @ Electronic Arts</a>

  - <a href="https://web.archive.org/web/20250407205049/https://hitmarker.net/jobs/playstation-software-engineer-i-2958474">Software Developer @ PlayStation</a>

  - <a href="">Backend PHP Developer @ SciPlay</a>

Ah, e também frequentemente <a href="https://careers.nuuvem.com/">temos vagas no time da Nuuvem, pra Devs e outros!</a> 😁

Concluindo: o seu conhecimento como desenvolvedor, mesmo que não envolva diretamente engines e sistemas de jogos, ainda pode ser altamente relevante para uma empresa que desenvolve games. Além do clássico desenvolvimento web, há demanda por infraestrutura, serviços, escalabilidade, disponibilidade, DevOps e, claro, o boom da Inteligência Artificial — todas essas frentes são importantes para a indústria de jogos.

Fique de olho nos sites de carreira do setor ou em agregadores como a <a href="https://hitmarker.net/">Hitmarker</a> e a <a href="https://www.instagram.com/gamerinsidebrasil/">Gamer Insider Brasil</a>. Quem sabe o próximo passo da sua carreira como programador, DevOps ou especialista em IA não acontece dentro do mercado de games?!

  Fontes adicionais:
  - https://cloud.google.com/blog/topics/developers-practitioners/how-pok%C3%A9mon-go-scales-millions-requests
  