# Admirável Bevy

Uma lista [incrível](https://github.com/sindresorhus/awesome) de projetos interessantes da Bevy. Se você gostaria de compartilhar o que está fazendo, envie um PR! Sinta-se à vontade para criar novas categorias onde fizer sentido.

## Aprendendo

* [Exemplos Oficiais de Bevy](https://github.com/bevyengine/bevy/tree/master/examples): Aprenda cada recurso do Bevy com o mínimo de exemplos ilustrativos.
* [Folha de dicas para Bevy Game Engine](https://github.com/jamadazi/bevy-cheatsheet): Referência de programação concisa para Bevy!
* [Livro de receitas para Bevy Game Engine](https://github.com/jamadazi/bevy-cookbook): Receitas concisas para tarefas comuns de desenvolvimento de jogos.
* [Fazendo um clone de Snake](https://mbuffett.com/posts/bevy-snake-tutorial/): Passo a passo sobre como fazer um clone de Snake
* [Fazendo um clone de Xadrez em 3D](https://caballerocoll.com/blog/bevy-chess-tutorial): Passo a passo sobre como fazer um clone de Xadrez com peças 3D

## Plugins e Caixas
### Entrada

* [Kurinji](https://crates.io/crates/kurinji): Mapa de entrada para bevy. Converte a entrada do usuário de hardware de entrada diferente em ações específicas do jogo, por exemplo. O teclado "Espaço" ou o joystick "A" podem ser mapeados para a Ação "Saltar". Isso permite o desacoplamento do código do jogo da API de entrada específica do dispositivo.

### 3D

* [bevy_fly_camera](https://crates.io/crates/bevy_fly_camera): Um plugin de câmera voadora
* [Bevy-WoW](https://github.com/Tezza48/Bevy-WoW): Uma câmera estilo WoW
* [bevy_obj](https://github.com/AmionSky/bevy_obj): Plugin carregador de ativos para malha Wavefront .obj
* [bevy_mod_picking](https://github.com/aevyrie/bevy_mod_picking): Seleção e destaque do cursor 3D

### 2D

* [bevy_tiled](https://github.com/stararawn/bevy_tiled): Um plugin para renderizar mapas Tiled
* [bevy_prototype_lyon](https://github.com/Nilirad/bevy_prototype_lyon): Desenhe formas 2D, como triângulos, círculos e beziers.
* [bevy_tilemap](https://github.com/joshuajbouw/bevy_tilemap): Um plugin com tipos genéricos para renderização multithread de mapas baseados em telhas.
* [bevy_prototype_parallax](https://github.com/btrepp/bevy-prototype-parallax): Um plugin de fundo de rolagem paralaxe.

### Animação

* [bevy_easings](https://crates.io/crates/bevy_easings): Um plugin para facilitar o valor de um componente para outro valor, usado principalmente para animar a transição entre duas transformações, mas pode ser usado para outros componentes.

### UI

* [bevy_ninepatch](https://crates.io/crates/bevy_ninepatch): Exibe elementos de interface de usuário de 9 patches, onde você pode especificar como as diferentes partes de um PNG devem crescer

### Backends

* [prototype_bevy_sdl2](https://github.com/aclysma/prototype_bevy_sdl2): Um protótipo para integração SDL2 em Bevy
* [bevy_miniquad](https://github.com/smokku/bevy_miniquad): Um plugin que substitui janelas winit e pipeline de renderização com biblioteca [miniquad](https://github.com/not-fl3/miniquad).
* [bevy_doryen](https://github.com/smokku/bevy_doryen): Um plugin que integra Bevy ECS com Biblioteca Ascii roguelike [doryen-rs](https://github.com/jice-nospam/doryen-rs).
* [bevy_webgl2](https://github.com/mrk-its/bevy_webgl2): Plugin de renderizador WebGL2 para alvo WASM

### Física

* [bevy_rapier](https://github.com/dimforge/bevy_rapier): Um plugin para Rapier, um motor de física 2D e 3D. Mantido pelos desenvolvedores do Rapier.
* [physme](https://github.com/walterpie/physme): Um mecanismo de física simplista para simulação 2D e 3D. Fisicamente impreciso, mas satisfatório e fácil de usar.

### Networking

* [bevy_prototype_laminar_networking](https://github.com/ncallaway/bevy-prototype-laminar-networking): Um protótipo de plugin de rede usando `laminar` como meio de transporte.
* [bevy_prototype_simple_net](https://github.com/0x22fe/bevy_prototype_simple_net): Um plugin protótipo de rede funcional que pode criar sistemas cliente/servidor sobre TCP ou UDP.
* [bevy_networking_turbulence](https://github.com/smokku/bevy_networking_turbulence): Plugin de rede em execução em [naia-socket](https://github.com/naia-rs/naia-socket) e na biblioteca [turbulence](https://github.com/kyren/turbulence).

### Ferramentas de Desenvolvimento

* [bevy-contrib-inspector](https://github.com/jakobhellermann/bevy-contrib-inspector): Edite visualmente os campos de seus recursos de Bevy em um navegador ou visualização nativa.

### Ajudantes

* [bevy_contrib_colors](https://crates.io/crates/bevy_contrib_colors): Uma biblioteca de cores simples.
* [bevy_prototype_inline_assets](https://crates.io/crates/bevy_prototype_inline_assets): Um plugin simples para agrupar ativos em seu binário.

### Games

* [bevy_nbody](https://github.com/thallada/bevy-nbody): Uma simulação de N-body em Rust
* [flock-rs](https://github.com/JohnPeel/flock-rs): Um exemplo de comportamento de direção e bando
* [bevy_pong](https://github.com/SuperiorJT/bevy_pong): É o Pong! Com base no exemplo de "breakout"
* [bevy-tetris](https://github.com/8bit-pudding/bevy-tetris): É Tetris!
* [snake_bevy](https://github.com/mtKeller/snake_bevy): É Snake!
* [i_sjon_kan_ingen_hora_dig_skrika](https://gitlab.com/TheZoq2/i_sjon_kan_ingen_hora_dig_skrika): Simulador de barco a remo pirata sueco 2020
* [labyrinth-game](https://github.com/insrcd/labrynth-game): Uma humilde tentativa de um jogo roguelike/market-sim
* [bevy_sokoban](https://github.com/ropewalker/bevy_sokoban): Implementação simples de Sokoban
* [per_spatium](https://gitlab.com/BottledByte/per-spatium): Jogo de tiro espacial com rolagem para baixo
* [bevy_rider](https://github.com/bonsairobo/bevy_rider): Line Rider, andando linearmente, em segmentos de linhas
* [bevy_squares](https://github.com/TheNeikos/bevy_squares): Um remake do jogo 'Threes', construído com Bevy
* [Kataster](https://github.com/Bobox214/Kataster): Um atirador espacial simples de tela única com rapier2d
* [Keep Inside](https://github.com/davidB/ld47_keep_inside): Um solo de pong em um círculo (feito para Ludum Dare 47)
* [Keep Moving and Nobody Burns](https://github.com/mockersf/kmanb): Um homem-bomba contra o tempo (feito para Ludum Dare 47)
* [SiO2](https://github.com/dmitriy-shmilo/sio2): Um clone simples de brinquedo em pó
* [Robbo](https://github.com/mrk-its/bevy-robbo): Bevy port do ótimo jogo Atari de 8 bits, trabalhando nativo e no navegador

### Apps

* [bevy-calc](https://github.com/PravinKumar95/simple-calc): Uma calculadora simples
