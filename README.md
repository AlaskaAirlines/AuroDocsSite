# Auro Design System Doc Site

[![Build Status](https://itsals.visualstudio.com/Auro%20Design%20System/_apis/build/status/auro-docsite/auro-docsite%20CI?branchName=master)](https://itsals.visualstudio.com/Auro%20Design%20System/_build/latest?definitionId=5591&branchName=master) 

This repo is the home for [auro.alaskaair.com](https://auro.alaskaair.com).

This project adheres to all open-source best practices. Please review the Auro [Contributing Guidelines](https://auro.alaskaair.com/getting-started/developers/contributing) for any information regarding the editing of the site. 

## Run site locally

After cloning the repo locally, please address these simple steps; 

1. `$ npm i`
1. `$ npm run dev`

### Environmental variable

To run the Github data service pages, you will need to add a `/.env` file, at the repo root, with a PAT from Github. This file is intentionally ignored. 

In your local `/.env` file add the following: 

```
REACT_APP_GITHUB_API_KEY=[add your PAT]
```

### To generate a PAT

Go to [Personal access tokens](https://github.com/settings/tokens), generate a new token with the following settings:

1. repo:status
1. repo_deployment
1. public_repo
1. read:discussion

## Publish to site

The CI/CD pipeline will publish a new build of the site with each merge to `master`. 
