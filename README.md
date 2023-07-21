# Expo Template 

A simple Expo template with the following features:

- Eslint & Prettier configured;
- React Navigation v6;
- Testing Configured;

It's easy to create a project, strip out the few components included, and still have the architecture in place to quickly start building an app.

For more information about the new and previous versions, [click here](./docs/CHANGELOG.md).

## Usage

> Be sure to have the [Expo CLI](https://docs.expo.io/workflow/expo-cli/) installed.

```bash
$ expo init --template expo-template
```
## Scripts 

In the project folder you can run:

### `yarn start`

Start a development server using EXPO.

### `yarn lint`

Check the code with the ESLint and Prettier.

### `yarn format:check`

Check if the code is formatted with Prettier.

### `yarn format:write`

Format the code with Prettier.

### `yarn test`

Run all tests.

### `yarn cover`

Generate the coverage of the code.

## Infra

Basic structure of the project:

```code
├── AppRoot.tsx
├── core
│   ├── components
│   ├── configs
│   ├── constants
│   ├── helpers
│   ├── hooks
│   ├── providers
│   │   └── CoreProvider.tsx
│   ├── screens
│   │   └── NotFoundScreen.tsx
│   └── types.tsx
├── navigation
│   ├── constants
│   │   ├── Linking.ts
│   │   └── Paths.ts
│   ├── navigators
│   │   ├── BottomTabNavigator.tsx
│   │   └── RootNavigator.tsx
│   ├── providers
│   │   └── NavigationProvider.tsx
│   └── types.tsx
├── screens
└── features
```

## License 

The content of this repository is covered by the [MIT license](./LICENSE).
