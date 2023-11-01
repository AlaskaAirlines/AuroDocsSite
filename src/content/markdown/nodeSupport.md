# Auro Node support

This document is designed to illustrate and communicate Auro's commitment to security and the safety of our users by supporting the latest development environments and dependencies whenever and wherever possible.

The Auro team is committed to an overlapping support model for Node.js. This means that each repo should be able to be used within the current Active LTS as well as the previous version that is in maintenance. Keeping in mind, these are recommended versions and not a strict specification.

## Lit element Node support

Additionally for general consumption of Auro tech, the version of Node your app should support is based on direct dependencies. For Lit Element, [documentation states](https://lit.dev/docs/v1/getting-started/#:~:text=Node.js%20and%20npm%20for%20managing%20dependencies.%20Requires%20Node.js%2010%20or%20greater.) "*Node 10 or greater*" (as of Q4 2023). That said, repositories state supporting latest -2 for development and testing. We feel that this will be a consistent trend. For our purposes we are choosing not to support a version of Node that has exceeded its End of Life date.

## How we maintain versions

The following illustrates how this would appear in the `./package.json` file as Auro is not directly supporting any odd-numbered releases.

```js
"engines": {
  "node": "^18 || ^20"
}
```

Auro's repository testing matrix will consider the following:

```js
node-version: [18.x, 20.x]
```

The release will directly support the current LTS:

```js
node-version: 20.x
```

Following the Node.js Release Working Group [release schedule](https://github.com/nodejs/release#release-schedule) Auro commits to maintaining a similar schedule of support whereas by the 1st quarter of the year we will begin migration to the next LTS which is expected to be completed by the 4th quarter of the same year.

| Release  | Auro Status         |Initial Release | Active LTS Start | Maintenance Start | End-of-life|
| :--:     | :---:               | :---:          | :---:            | :---:             | :---:      |
| 16.x     | **End-of-Life**     | 2021-04-20     | 2021-10-26       | 2022-10-18        | 2023-09-11 |
| 18.x     | **Supported**       | 2022-04-19     | 2022-10-25       | 2023-10-18        | 2025-04-30 |
| 20.x     | **Migrating**       | 2023-04-18     | 2023-10-24       | 2024-10-22        | 2026-04-30 |
| 22.x     | **Pending**         | 2024-04-23     | 2024-10-29       | 2025-10-21        | 2027-04-30 |
| 24.x     | **Pending**         | 2025-04-22     | 2025-10-28       | 2026-10-20        | 2028-04-30 |

