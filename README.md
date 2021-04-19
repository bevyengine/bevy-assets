# Awesome Bevy

An [awesome](https://github.com/sindresorhus/awesome)-style list of cool Bevy projects. If you would like to share what you're working on, submit a PR! Feel free to create new categories where it makes sense.

## Learning

* [Official Bevy Examples](https://github.com/bevyengine/bevy/tree/latest/examples): Learn each Bevy feature from minimal illustrative examples
* [Bevy Cheatbook](https://bevy-cheatbook.github.io): Practical reference to programming in bevy! Covers basic concepts, syntax, and solutions to common game dev tasks!
  * [Bevy Cheatsheet](https://bevy-cheatbook.github.io/cheatsheet.html): Condensed one-page summary of Bevy programming syntax.
* [Making a Snake Clone](https://mbuffett.com/posts/bevy-snake-tutorial/): Walkthrough on how to make a snake clone
* [Making Chess Clone in 3D](https://caballerocoll.com/blog/bevy-chess-tutorial): Walkthrough on how to make a Chess Clone with 3D pieces
* [Using Rapier for Physics](https://sburris.xyz/posts/bevy-gravity/)
* [Making a Rhythm game](https://caballerocoll.com/blog/bevy-rhythm-game): Walkthrough on how to make a Rhythm game, with menu, audio and shaders.

### Migration Guides

* [0.3 to 0.4](https://sburris.xyz/posts/bevy-update-0-4/)

### Languages

These translations are unofficial, unverified, and potentially out of date.

* [Bevy Chinese Website(Bevy中文网)](https://bevyengine-cn.github.io/): Translate official website and The Bevy Book in Chinese

## Plugins and Crates
### Input
* [Kurinji](https://crates.io/crates/kurinji): Input Map for bevy. Converts user input from different input hardware into game specific actions, eg. keyboard "Space" or joystick "A" can be mapped to "Jump" Action.  This allows decoupling of the game code from device specific input api.

### 3D
* [bevy_fly_camera](https://crates.io/crates/bevy_fly_camera): A flying camera plugin
* [bevy_flycam](https://github.com/sburris0/bevy_flycam): A basic FPS-style camera controller
* [Bevy-WoW](https://github.com/Tezza48/Bevy-WoW): A WoW-style camera
* [bevy_obj](https://github.com/AmionSky/bevy_obj): Wavefront .obj mesh asset loader plugin
* [bevy_mod_picking](https://github.com/aevyrie/bevy_mod_picking): 3D mouse picking and ray casting plugin
* [bevy_stl](https://github.com/nilclass/bevy_stl): STL mesh asset loader plugin
* [bevy_vox](https://github.com/erasin/bevy_vox): MagicaVoxel Vox file loader plugin
* [bevy_4x_camera](https://crates.io/crates/bevy_4x_camera): A 4X style camera for bevy. [Demo](https://imgur.com/XIIDcIW)

### 2D

* [bevy_tiled](https://github.com/stararawn/bevy_tiled): A plugin for rendering Tiled maps
* [bevy_tilemap](https://github.com/joshuajbouw/bevy_tilemap): Chunk rendered tilemap for Bevy game engine.
* [bevy_ldtk](https://github.com/katharostech/bevy_ldtk): Efficient tilemap rendering for [LDtk](https://ldtk.io) maps.
* [bevy_prototype_lyon](https://github.com/Nilirad/bevy_prototype_lyon): Draw 2D shapes, like triangles, circles, and beziers.
* [bevy-earcutr](https://github.com/frewsxcv/bevy-earcutr): Draw polygons
* [bevy_prototype_parallax](https://github.com/btrepp/bevy-prototype-parallax): A parallax scrolling background plugin.
* [bevy_svg](https://github.com/Weasy666/bevy_svg): Load and draw SVG-files.

### Animation

* [bevy_easings](https://crates.io/crates/bevy_easings): A plugin for easing a component value to another value, mainly used to animate transition between two transforms, but usable for other components.

### UI

* [bevy_ninepatch](https://crates.io/crates/bevy_ninepatch): Display 9-Patch UI elements, where you can specify how different parts of a PNG should grow
* [bevy_megaui](https://github.com/mvlabat/bevy_megaui): A plugin for [megaui](https://crates.io/crates/megaui) integration into Bevy
* [bevy_egui](https://github.com/mvlabat/bevy_egui): A plugin for [egui](https://crates.io/crates/egui) integration into Bevy

### Backends

* [prototype_bevy_sdl2](https://github.com/aclysma/prototype_bevy_sdl2): A prototype for SDL2 integration into Bevy
* [bevy_miniquad](https://github.com/smokku/bevy_miniquad): A plugin replacing winit windowing and render pipeline with [miniquad](https://github.com/not-fl3/miniquad) library.
* [bevy_doryen](https://github.com/smokku/bevy_doryen): A plugin integrating Bevy ECS with [doryen-rs](https://github.com/jice-nospam/doryen-rs) Ascii roguelike library.
* [bevy_webgl2](https://github.com/mrk-its/bevy_webgl2): WebGL2 renderer plugin for WASM target

### Physics

* [bevy_rapier](https://github.com/dimforge/bevy_rapier): A plugin for Rapier, a 2D and 3D physics engine. Maintained by the Rapier developers.
* [heron](https://github.com/jcornaz/heron): An ergonomic physics API for 2d and 3d bevy games. (powered by rapier)
* [physme](https://github.com/walterpie/physme): A simplistic physics engine for both 2D and 3D simulation. Physically inaccurate, but feels satisfying and is easy to use.

### Networking

* [bevy_prototype_laminar_networking](https://github.com/ncallaway/bevy-prototype-laminar-networking): A prototype networking plugin using `laminar` as the transport.
* [bevy_prototype_simple_net](https://github.com/0x22fe/bevy_prototype_simple_net): A working prototype networking plugin that can create client/server systems over TCP or UDP.
* [bevy_networking_turbulence](https://github.com/smokku/bevy_networking_turbulence): Networking plugin running on [naia-socket](https://github.com/naia-rs/naia-socket) and [turbulence](https://github.com/kyren/turbulence) libraries.
* [bevy_spicy_networking](https://github.com/CabbitStudios/bevy_spicy_networking): Unifying server/client networking crate using [tokio](https://github.com/tokio-rs/tokio) as asynchronous backend.

### Audio

* [bevy_kira_audio](https://github.com/NiklasEi/bevy_kira_audio): An alternative Bevy audio plugin using [Kira](https://github.com/tesselode/kira)

### AI

* [big-brain](https://github.com/zkat/big-brain): A highly-parallel [Utility AI](https://en.wikipedia.org/wiki/Utility_system) engine.

### Development tools
* [bevy-inspector-egui](https://github.com/jakobhellermann/bevy-inspector-egui): Visually edit fields of structs inside the game using [egui](https://github.com/emilk/egui).
* [bevycheck](https://github.com/jakobhellermann/bevycheck): annotate invalid systems with `#[bevycheck::system]` to get nice error messages for what's wrong
* [bevy_mod_debugdump](https://github.com/jakobhellermann/bevy_mod_debugdump): Render graph and schedule graph visualizers using [egui](https://github.com/emilk/egui).
* [autodefault](https://github.com/Lucretiel/autodefault): annotate functions to have them automatically insert `..Default::default()` into struct expressions. Useful when instantiating large, deeply nested components or component bundles.

### Helpers
* [bevy_asset_ron](https://crates.io/crates/bevy_asset_ron): Custom RON Asset loading.
* [bevy_contrib_colors](https://crates.io/crates/bevy_contrib_colors): A simple color library.
* [bevy_prototype_inline_assets](https://crates.io/crates/bevy_prototype_inline_assets): A simple plugin for bundling assets into your binary.
* [bevy_discovery](https://crates.io/crates/bevy_discovery): Automatically detects and registers systems for you.
* [bevy_assetio_zip](https://github.com/katharostech/bevy_assetio_zip): A plugin for loading assets from an optionally obfuscated zip file.
* [bevy_event_set](https://github.com/woubuc/bevy-event-set): A macro to create event bundles for Bevy

## Templates
* [bevy_game_template](https://github.com/NiklasEi/bevy_game_template): An opinionated template repository for a Bevy game including a workflow for Windows, Linux, macOS and Web (WASM) releases

## Games

* [bevy_nbody](https://github.com/thallada/bevy-nbody): An N-body simulation in Rust
* [flock-rs](https://github.com/JohnPeel/flock-rs): An example of steering and flocking behaviors
* [bevy_pong](https://github.com/SuperiorJT/bevy_pong): It's Pong! Based on the "breakout" bevy example
* [bevy-tetris](https://github.com/8bit-pudding/bevy-tetris): It's Tetris!
* [snake_bevy](https://github.com/mtKeller/snake_bevy): It's Snake!
* [bevy-space-invaders](https://github.com/nicolashahn/bevy-space-invaders): It's Space Invaders!
* [i_sjon_kan_ingen_hora_dig_skrika](https://gitlab.com/TheZoq2/i_sjon_kan_ingen_hora_dig_skrika): Swedish rowing boat pirate simulator 2020
* [labyrinth-game](https://github.com/insrcd/labrynth-game): A humble attempt at a roguelike / market-sim game
* [bevy_sokoban](https://github.com/ropewalker/bevy_sokoban): Simple implementation of Sokoban
* [per_spatium](https://gitlab.com/BottledByte/per-spatium): Scroll-down space shooter game
* [bevy_rider](https://github.com/bonsairobo/bevy_rider): Line Rider, riding linearly, on segments of lines
* [bevy_squares](https://github.com/TheNeikos/bevy_squares): A remake of the 'Threes' game, built with Bevy
* [Kataster](https://github.com/Bobox214/Kataster): A simple single-screen spaceshooter with rapier2d
* [Keep Inside](https://github.com/davidB/ld47_keep_inside): A solo pong on a circle (made for Ludum Dare 47)
* [Keep Moving and Nobody Burns](https://github.com/mockersf/kmanb): A bomberman against time (made for Ludum Dare 47)
* [SiO2](https://github.com/dmitriy-shmilo/sio2): A simple powder toy clone
* [Robbo](https://github.com/mrk-its/bevy-robbo): Bevy port of great 8-bit Atari game, working native and in the browser
* [DJMcNab/life-rs](https://github.com/DJMcNab/life-rs): Bevy reproduction of the rules of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) on a randomised board.  
  Alternative implementation: [Byteron/life-rs](https://github.com/Byteron/life-rs).
* [arugio](https://github.com/ostwilkens/arugio): Prototype multiplayer server-authoritative networked "game" with Browser (WebGL) client and native server
* [colonize](https://github.com/indiv0/colonize): A Dwarf Fortress/Rimworld-like game written in Rust.
* [oicana](https://github.com/NiklasEi/oicana): A tower defense game with puzzle aspects
* [taipo](https://github.com/rparrett/taipo): A 2d typing/tower defense game for the browser.

## Apps
* [bevy-calc](https://github.com/PravinKumar95/simple-calc): A simple calculator
