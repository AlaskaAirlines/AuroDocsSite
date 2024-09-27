# Welcome to the Auro team!

We're glad you're here :) For your first day, we recommend going through the following steps to set you up for success:

## Setup your computer

Get your favorite Node.js version manager and install latest subversion of v20/LTS. Most of the team is using
[nvm](https://nvm.sh) to manage their Node.js versions. You don't strictly _need_ to use nvm, but the rest of the team
is already using it, so you'll have an easier time if you do too. Nvm _may_ be a requirement in the future, so it's
best to get it set up now.

We typically use the latest LTS version of Node.js, which is currently v20.X.X. You can check the latest LTS version
[here](https://nodejs.org/en/).

To install that with nvm:
```shell
$ nvm install 20 && nvm alias default node
$ nvm use 20 # optional, nvm will use a version after installing by default
```

Most of the team currently uses VS Code or WebStorm as their code editor, though you can use whatever you're comfortable with.

If you are using an Alaska-issued laptop (which you should be), you shouldn't need to install Teams, but installing
Firefox and a Chromium-based browser (like Chrome, Arc, and/or Edge) is strongly recommended for cross-browser testing.

## Set up your GitHub account
Since we are an open source project, you can use either an Alaska-specific GitHub account or your personal account.
Either solution you choose requires the same setup steps:

- Generate an SSH key and [add it to your GitHub account ](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)
  - TL;DR: run `ssh-keygen` and then copy the contents of `~/.ssh/id_rsa.pub` to your [GitHub account here](https://github.com/settings/keys)
- Send your GitHub username to your manager to get access to the `AlaskaAirlines` GitHub organization
  - Since we are open source, you can totally just fork repositories and make pull requests to contribute to the design system,
  but our workflows are far more streamlined when making changes directly to the main repository via branches and pull requests.

## Check out the other Auro components
We have quite a few components in the Auro ecosystem, so play around with them and get familiar! Don't worry too much
about understanding everything right away - we're not going to quiz you ;) 

- https://auro.alaskaair.com/components/

### Suggestions
Want to go a little deeper? Here are some suggestions:
- Take a look at the components listed there and pick one to try and install locally
- Run through the README and install that component :)
    - Usually this means - `git clone` the repo onto your computer then `npm install`

## Run the Auro docs site locally
Our doc site is a Create React App that pulls in Markdown files and other data from our GitHub repositories to
automatically generate documentation.

- Clone the [Auro docs site repo](https://github.com/AlaskaAirlines/AuroDocsSite)
- Get Node.js v14.17.0
```shell
$ nvm install 14.17.0
$ nvm use 14.17.0 # in the root of the project
```
- Run `npm install && npm run build && npm run dev` for quick setup
- Open your browser to `http://localhost:3000` to see the site!

## Suggested Tools and Resources
Tools our team uses and recommends:

### Browsers
- [Firefox](https://www.mozilla.org/en-US/firefox/new/): Open-source browser from Mozilla
- [Chrome](https://www.google.com/chrome/): Google's flagship browser
- [Edge](https://www.microsoft.com/en-us/edge): Microsoft's browser based on Chromium
- [Safari](https://www.apple.com/safari/): Apple's browser (comes pre-installed on macOS)

### CLI Tools
- [Node Version Manager (nvm)](https://nvm.sh): Node.js version manager
- [Homebrew](https://brew.sh): macOS package manager

### Code Editors/Terminal Emulators
- [Visual Studio Code](https://code.visualstudio.com/): Microsoft's open-source code editor
- [WebStorm](https://www.jetbrains.com/webstorm/): JetBrains IDE for web development
- [iTerm2](https://iterm2.com/): Tried and true terminal emulator for macOS
- [Warp](https://warp.dev/): Rust-based terminal replacement 

## Recommended Reading
- FEEDBACK NEEDED HERE!
- I'm not sure what's best to put here :)