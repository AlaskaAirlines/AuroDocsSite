# Engineering Startup Guide

## Overview

This guide is intended to help software engineers through the steps necessary to begin contributing to the Auro Design System. There are few hard requirements for your developer environment and some topics presented in this guide are recommendations based on our own preferences.

We will cover the following topics:

- Setting up your computer
- Accounts and permissions
- Clone your first repository
- Run the localhost environment
- Additional Reading

_Note: This guide assumes a base level of technical skill. If you need to contribute to our codebase, yet are not comfortable working with a code editor, terminal, or git commands please contact the Auro team for assistance._

## Setup your computer

**Integrated Developer Environment**

Install your IDE of choice. We recommend Visual Studio Code which can be downloaded at [code.visualstudio.com/download](https://code.visualstudio.com/download).

**Node Version Manager**

Install a node version manager. We recommend [NVM](https://nvm.sh).

Run either of the following commands in a terminal window to install NVM:

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`

or

`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash`

**Browsers**

- [Firefox](https://www.mozilla.org/en-US/firefox/new/): Open-source browser from Mozilla
- [Chrome](https://www.google.com/chrome/): Google's flagship browser
- [Edge](https://www.microsoft.com/en-us/edge): Microsoft's browser based on Chromium
- [Safari](https://www.apple.com/safari/): Apple's browser (comes pre-installed on macOS)

All browser clients should be installed for validating your code changes.

## Accounts and Permissions

A GitHub account is required for contribution. If you do not have an account, you can set up a new one at [github.com/signup](https://github.com/signup). You may use your own personal account, however, you are required to attach your `@alaskaair.com` work email address to the account. This can be done at [github.com/settings/emails](https://github.com/settings/emails) after you login.

**Join the AlaskaAirlines GitHub organization**

While joining the `AlaskaAirlines` GitHub organization is not strictly required for contributing to our open source project, the workflow for contributions is far more streamlined and easier for members.

To join the organization, you will need to provide your GitHub username to your manager or the engineering manager of the Auro team.

**Configure an SSH Key**

  1. Run `ssh-keygen` in a terminal to create a new SSH Key
  1. Copy the contents of `~/.ssh/id_rsa.pub` to your GitHub account at [github.com/settings/keys](https://github.com/settings/keys).

For more details see [docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).

**GitHub CLI**

We recommend using the GitHub CLI as it simplifies certain actions such as cloning a repo. You can get it at [cli.github.com](https://cli.github.com).

_Note: the instructions later in this document assume you have installed GiTHub CLI._

## Clone your first Auro repository

For the purposes of this example documentation we will use `auro-hyperlink`. The instructions are the same for all repositories, only the command parameters change based on the name of the project.

1. In your terminal navigate to the directory you wish to clone the repository to (e.g. `cd ~/Development`)
1. run `gh repo clone AlaskaAirlines/auro-hyperlink`
1. In your IDE, open the component directory (e.g. `~/Development/auro-hyperlink`)

You should now see all the repository code in your IDE.

## Run the component localhost

1. In the IDE open `./package.json`
1. Within package.json find the `engines` key. This will tell you which version of node the component requires.<br /><br />
_"engines": {<br />_
_&ensp;&ensp;"node": "^18 || ^20"<br />_
_}<br /><br />_
1. Install the supported Node version using NVM by running `nvm install 20`. (substituting whichever version your component defined). You may specify a major/minor/patch version (e.g 20.2.1) but this is unnecessary for your needs here. Using the major version only will install the latest minor/patch version for that major version.<br /><br />_Note: after you have installed multiple versions of node you may switch between them by running `nvm use <version>` rather than reinstalling the version you need to switch to._<br /><br />
1. Install the component dependencies by running `npm i`
1. Build the component by running `npm run build`
1. Launch the localhost by running `npm run dev`

You should now have a new browser window automatically open and the component documentation rendered in the localhost.

**Making code changes**

When the localhost is running via `npm run dev` the browser window will automatically refresh reflecting those changes. You will also want to run the following commands before making any Git commits.

- `npm run tests`
- `npm run linters`
- `npm run build`

Any errors discovered while running those commands must be resolved before submitting your code.

Before doing any Git commits and Pull Requests review our [Contributing Guidelines](https://auro.alaskaair.com/contributing) to learn about the requirements.

## Additional Reading

We recommend that you take some time to become familiar with our documentation site as well as certain other resources.

- [Auro Design System](https://auro.alaskaair.com/)<br />
We have quite a few components in the Auro ecosystem. It is recommended that you take some time to browse through them on the doc site and familiarize yourself with the API and UI/UX of the component library.
  - [Contributing Guidelines](https://auro.alaskaair.com/contributing)
  - [CSS Guidelines](https://auro.alaskaair.com/css/conventions)
  - [Support & FAQ](https://auro.alaskaair.com/auro-support)
- LIT Documentation: [lit.dev/docs/](https://lit.dev/docs/)
