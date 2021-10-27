# Frontend Technical Challenge / Registration Form

This is a registration form component which consists of two inputs
(E-Mail & Password) with labels, a password strength indicator, a submit button, and a NavBar.

## Password validations

The submit works only for passwords that satisfy all of the criteria below:
- 8 or more characters
- 1 or more lowercase letters
- 1 or more uppercase letters
- 1 or more decimal characters
- 1 or more special characters

Below the password input field there are indicators (cross or check) that will tell the user if his input passes the validations. Once the user password passes all validations and he clicks on Submit he will see to a success message. The user will remain on the registration as long as his password does not passes validations.

## How to use this feature?

### react-boilerplate

Simple react starter with the following config:

- React, ReactDOM
- Webpack 4
- Babel with es2015 and react presets
- Bootstrap (css only, loaded from a cdn in `index.html`)
- work with `.js` or `.jsx` files
- main `application.scss` stylesheet is imported in `index.js` as a module to enjoy hot reloading

### Scripts

To start the local Webpack Dev Server (usually on port `8080`):

```bash
yarn start
```

To lint all JavaScript files in the `src` folder:

```bash
yarn lint
```

To build and deploy your app to `gh-pages` branch on the GitHub repo:

```bash
yarn deploy
```
### Technology used

```bash
React
```

React is one of the most popular framework/library. By using React to build this feature we can easily re-use this feature/component in other larger components or Apps. Thanks to React we can separate our concerns, we can easily include the logic (password validation), form and styles in this one component.

### UX / UI

- Component adapts to: mobile(320px), tablet(768px) desktop(1024px)
- Design requirements: https://github.com/project-a/frontend-coding-challenge
- Lighthouse accessibility: 100/100


### Demo
![Alt Text](http://g.recordit.co/kgDVO3miQ3.gif)
