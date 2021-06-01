# Bevy Assets

A collection of Bevy assets, plugins, learning resources, and apps made by the community. If you would like to share what you're working on, submit a PR! Feel free to create new categories where it makes sense.

This repository can be explored in the [Bevy Asset website](https://bevyengine.org/assets/).

## Asset Format

Assets are described in a toml file:

```toml
# Name of your asset.
name = "My Cool Plugin"

# Description of your asset. It should be less than 100 characters and not contain formatting.
description = "A short and sweet description of My Cool Plugin"

# Where can your asset be found. It can be a link to crates.io, github, gitlab or similar.
link = "https://github.com/me/my_plugin"

# Optional image to showcase your asset. Should be a png/jpg/gif located next to your toml file.
image = "my_plugin_icon.png"
```

## Categories

Assets are organised in the following categories:
* [Learning](./Learning) - Anything that can help learn Bevy.
* [Assets](./Assets) - Crates that can be used in a Bevy project. These plugins offers additional functionality, see [Bevy plugin guildelines](https://github.com/bevyengine/bevy/blob/main/docs/plugins_guidelines.md) on how to create your plugin crate.
* [Apps](./Apps) - Games and Tools made with Bevy.
