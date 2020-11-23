# Awesome Bevy

An [awesome](https://github.com/sindresorhus/awesome)-style list of cool Bevy projects. If you would like to share what you're working on, submit a PR! Feel free to create new categories where it makes sense.

## Learning

* [Official Bevy Examples](https://github.com/bevyengine/bevy/tree/master/examples): Learn each Bevy feature from minimal illustrative examples
* [Bevy Cheatsheet](https://github.com/jamadazi/bevy-cheatsheet): Concise programming reference for Bevy!
* [Bevy Cookbook](https://github.com/jamadazi/bevy-cookbook): Concise recipes for common game dev tasks
* [Making a Snake Clone](https://mbuffett.com/posts/bevy-snake-tutorial/): Walkthrough on how to make a snake clone
* [Making Chess Clone in 3D](https://caballerocoll.com/blog/bevy-chess-tutorial): Walkthrough on how to make a Chess Clone with 3D pieces

## Plugins and Crates
### Input
* [Kurinji](https://crates.io/crates/kurinji): Input Map for bevy. Converts user input from different input hardware into game specific actions, eg. keyboard "Space" or joystick "A" can be mapped to "Jump" Action.  This allows decoupling of the game code from device specific input api.

### 3D
* [bevy_fly_camera](https://crates.io/crates/bevy_fly_camera): A flying camera plugin
* [Bevy-WoW](https://github.com/Tezza48/Bevy-WoW): A WoW-style camera
* [bevy_obj](https://github.com/AmionSky/bevy_obj): Wavefront .obj mesh asset loader plugin
* [bevy_mod_picking](https://github.com/aevyrie/bevy_mod_picking): 3d cursor picking and highlighting

### 2D

* [bevy_tiled](https://github.com/stararawn/bevy_tiled): A plugin for rendering Tiled maps
* [bevy_prototype_lyon](https://github.com/Nilirad/bevy_prototype_lyon): Draw 2D shapes, like triangles, circles, and beziers.
* [bevy_tilemap](https://github.com/joshuajbouw/bevy_tilemap): A plugin with generic types for rendering multi-threaded chunk-based tile maps.
* [bevy_prototype_parallax](https://github.com/btrepp/bevy-prototype-parallax): A parallax scrolling background plugin.

### Animation

* [bevy_easings](https://crates.io/crates/bevy_easings): A plugin for easing a component value to another value, mainly used to animate transition between two transforms, but usable for other components.

### UI

* [bevy_ninepatch](https://crates.io/crates/bevy_ninepatch): Display 9-Patch UI elements, where you can specify how different parts of a PNG should grow

### Backends

* [prototype_bevy_sdl2](https://github.com/aclysma/prototype_bevy_sdl2): A prototype for SDL2 integration into Bevy
* [bevy_miniquad](https://github.com/smokku/bevy_miniquad): A plugin replacing winit windowing and render pipeline with [miniquad](https://github.com/not-fl3/miniquad) library.
* [bevy_doryen](https://github.com/smokku/bevy_doryen): A plugin integrating Bevy ECS with [doryen-rs](https://github.com/jice-nospam/doryen-rs) Ascii roguelike library.
* [bevy_webgl2](https://github.com/mrk-its/bevy_webgl2): WebGL2 renderer plugin for WASM target

### Physics

* [bevy_rapier](https://github.com/dimforge/bevy_rapier): A plugin for Rapier, a 2D and 3D physics engine. Maintained by the Rapier developers.
* [physme](https://github.com/walterpie/physme): A simplistic physics engine for both 2D and 3D simulation. Physically inaccurate, but feels satisfying and is easy to use.

### Networking

* [bevy_prototype_laminar_networking](https://github.com/ncallaway/bevy-prototype-laminar-networking): A prototype networking plugin using `laminar` as the transport.
* [bevy_prototype_simple_net](https://github.com/0x22fe/bevy_prototype_simple_net): A working prototype networking plugin that can create client/server systems over TCP or UDP.
* [bevy_networking_turbulence](https://github.com/smokku/bevy_networking_turbulence): Networking plugin running on [naia-socket](https://github.com/naia-rs/naia-socket) and [turbulence](https://github.com/kyren/turbulence) libraries.

### Development tools
* [bevy-contrib-inspector](https://github.com/jakobhellermann/bevy-contrib-inspector): Visually edit fields of your bevy resources in a browser or native view.

### Helpers
* [bevy_contrib_colors](https://crates.io/crates/bevy_contrib_colors): A simple color library.
* [bevy_prototype_inline_assets](https://crates.io/crates/bevy_prototype_inline_assets): A simple plugin for bundling assets into your binary.

## Games

* [bevy_nbody](https://github.com/thallada/bevy-nbody): An N-body simulation in Rust
* [flock-rs](https://github.com/JohnPeel/flock-rs): An example of steering and flocking behaviors
* [bevy_pong](https://github.com/SuperiorJT/bevy_pong): It's Pong! Based on the "breakout" bevy example
* [bevy-tetris](https://github.com/8bit-pudding/bevy-tetris): It's Tetris!
* [snake_bevy](https://github.com/mtKeller/snake_bevy): It's Snake!
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

## Apps
* [bevy-calc](https://github.com/PravinKumar95/simple-calc): A simple calculator
