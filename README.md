# QuizApp with Next.js, TypeScript, Tailwind, Ant Design, Zustand, Framer Motion and OpenAI Api

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technologies Used](#technologies-used)

## Introduction

Briefly describe your quiz app, its purpose, and any notable features. Include a screenshot or GIF if possible.

## Features

- Instructions Page
- Quiz Page
- Results Page
- Animations using Framer Motion
- Zustand for Global State Management
- TypeScript
- Integration with Tailwind CSS and Ant Design
- OpenAI Api for question generation

## Installation

Provide instructions on how to install and set up the project locally. Include any dependencies or system requirements. For example:

```bash
# Clone the repository
git clone https://github.com/your-username/quiz-app.git

# Navigate to the project directory
cd quiz-app

# Install dependencies
npm install
```

## Usage

### Add .env.local file to the root of the repository for OpenAI Api Key, example:

```bash
OPENAI_API_KEY=YOUR_API_KEY
```

### Run the development server using:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Folder Structure

```bash
quiz-app/
# Atomic Components used in the Project
|-- components/
# Page Containers for component logic
|-- containers/
# For Zustand hook, can be used for other custom hooks
|-- hooks/
# Page Layouts
|-- layouts/
# NextJS pages structure
|-- pages/
# Global styles
|-- styles/
# Themes for Ant Design Config
|-- themes/
```
