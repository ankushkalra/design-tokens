# Attractive Design Tokens

A collection of reusable design tokens for building consistent, scalable, and maintainable user interfaces.

The tokens are maintained in a centralized repository and can be consumed across different projects and technologies.

## Installation

Install the package using your preferred package manager:

```bash
pnpm add attractive-design-tokens
```

```bash
npm install attractive-design-tokens
```

```bash
yarn add attractive-design-tokens
```

## Usage

Import the generated design tokens into your project and use them to maintain consistent visual styles across your application.

The package provides the tokens in CSS format, making them easy to integrate into web projects.

```css
@import "attractive-design-tokens/dist/css";
```

## What's Included

This repository contains a growing collection of design tokens covering common UI design properties, such as:

* Colors
* Typography
* Spacing
* Other reusable design values

The token collection will evolve over time as new design patterns and requirements are added.

## Repository Structure

```text
.
├── tokens/       # Source design token definitions
├── src/          # Token processing and source code
├── dist/         # Generated distribution files
└── package.json
```

## Design Tokens

Design tokens provide a single source of truth for the visual properties of an interface. Instead of hardcoding values throughout an application, tokens allow those values to be defined once and reused consistently.

For example:

```css
:root {
  --color-primary: ...;
  --spacing-md: ...;
  --radius-md: ...;
}
```

This makes it easier to maintain consistency and update the design system as it evolves.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/ankushkalra/design-tokens.git
cd design-tokens
pnpm install
```

Build the package:

```bash
pnpm build
```

## NPM Package

The package is published as [`attractive-design-tokens`](https://www.npmjs.com/package/attractive-design-tokens).

## Contributing

Contributions, suggestions, and improvements are welcome.

If you find an issue or have an idea for a new token, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

