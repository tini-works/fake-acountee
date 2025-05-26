# Fake Acountee

A frontend-only UI implementation of an accounting/invoice management system.

## Features

- View list of invoices
- View detailed invoice information
- Display invoice line items
- Show supplier and buyer information
- Mark invoices as imported/obsolete
- Set payment details and requests

## Tech Stack

- Bun - JavaScript runtime and package manager
- React - UI library
- React Router - For navigation
- Tailwind CSS - For styling (using bun-plugin-tailwind)
- DaisyUI - UI component library for Tailwind CSS

## Getting Started

### Prerequisites

- Bun installed on your machine

### Installation

1. Clone the repository
```bash
git clone https://github.com/tini-works/fake-acountee.git
cd fake-acountee
```

2. Install dependencies
```bash
bun install
```

3. Start the development server
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

```bash
bun run build
```

## Project Structure

```
fake-acountee/
├── public/             # Static assets and HTML templates
│   └── index.html      # Main HTML template
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── styles/         # CSS styles
│   ├── App.tsx         # Main App component
│   └── frontend.tsx    # Frontend entry point
├── index.ts            # Server file
├── bunfig.toml         # Bun configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies and scripts
```

