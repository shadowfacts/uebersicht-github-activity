# github-activity.widget
[Übersicht](http://tracesof.net/uebersicht/) widget that displays your GitHub contributions in a style based on the GitHub activity graph.

![Red circles, varying size & color](http://i.imgur.com/7yWHjYP.png)

![Red squares, varying color](http://i.imgur.com/OdPgOO8.png)

![Green circles, varying size & color](http://i.imgur.com/jXiU5s8.png)

![Green squares, varying color](http://i.imgur.com/WAoEm9R.png)

## Installation

**Requirements**:

- [Übersicht](http://tracesof.net/uebersicht/)
- [Node.js](https://nodejs.org/)



Installation:

1. Download [the zip](https://github.com/shadowfacts/uebersicht-github-activity/blob/master/github-activity.widget.zip)

2. Unzip it

3. Move the `github-activity.widget` folder into your Übersicht widgets folder (defaults to `~/Library/Application Support/Übersicht/widgets/`).

4. Modify the options to fit your preferences by editing the `options` object in `src/generate.js`. Information about how to configure it is provided in the file's comments.

   ​

## Options

- `user`: Your GitHub username.
- `size`: The maximum size (_not_ radius), in pixels, of the shapes.
- `incrAmount`: The amount, in pixels, to increase the raw number of contributions when computing the size.
- `margin`: The margin, in pixels, between two max-sized shapes.
- `vary`: Which settings to vary based on contribution count. Valid options are `size`, which varies the size of the shape, and `color` which varies the color of the shape.
- `shape`: Which shape type to use. Valid options are `circle` and `square`.
- `theme`: Which color theme to use. Defaults included are `red` and `green`, but any value will be accepted as long as colors are provided in the appropriate sub-object of `colors`.
- `colors`: Each sub-object is a color theme. There are four sets of colors: `none` for no contributions, `one` for 1-5 contributions, `two` for 6-10 contributions, `three` for 11-15 contributions, and `max` for anything beyond that.
  - `overrides`: Used to override individual values from the selected color-scheme without modifying it.
  - `red`: The default red color theme.
  - `green`: The default green color theme, based on GitHub's activity graph 



## Other Notes

- The shell script (`run.sh`) is used to find the location of Node and run the script. Currently, the script only special cases for Node installed via Homebrew and falls back on running node through the shell's normal behavior. The environment the shells script is executed in does not have `.bash_profile`/`.bashrc`/`.zshrc`/anything else loaded. If you have node installed in an unusual location, open an issue and, if it's common enough, I'll add another special case.
- You'll need to change the `size`, `incrAmount`, and possibly `margin` values in the options to fit your screen size. The defaults are sized for the largest that can fit on a 1440p screen. A rule of thumb for size/margin is `screenWidth / 53 >= size + margin`
- You may need to modify the values used by the `else if` conditions in the `getColorsForPalette` function, depending on your GitHub contributions. GitHub determines which color "level" to use dynamically, based on your average contributions but this widget does not.