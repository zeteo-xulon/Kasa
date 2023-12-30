# React + TypeScript + Vite

This project use React 18.20 with functionnal component, Typescript 5.0.2 with new bundler resolution option, and Vite as bundler at version 4.4.5 .


To install this project, you cn download it, clone it or fork it.
Then when it is on the computer, use :
```bash
npm install
```

Then to run the project in developpement phase, use :
```bash
npm run dev
```

The default address to watch the live preview is <http://localhost:5173> .

The different interface for TypeScript typing can be found in the Models/entities.tsx file.

In the final version, there will be a Node back-end server, so for now the call are simulated on the "server" component, using fetch on the Cards component.



-----------------------------------------------------------


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
