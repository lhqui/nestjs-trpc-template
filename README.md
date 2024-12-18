# Next.js + NestJS + tRPC Integration

This repository is dedicated to exploring the integration of **Next.js**, **NestJS**, and **tRPC**. The goal is to demonstrate how to seamlessly combine these technologies to build scalable, full-stack applications with a focus on type safety and developer productivity.

## Getting Started

### Installation
We use `pnpm` as the package manager for this project. To install the dependencies for the entire monorepo, simply run:

```bash
pnpm install
```


### Running the Application
To start both the front-end (Next.js) and back-end (NestJS) servers in development mode, use the following command:
```bash
pnpm run dev
```
This will run both **front-end** and **back-end** concurrently.

### Installing Packages
To add dependencies to either the client or server separately, use the `--filter` flag with `pnpm`. For example:

**Adding a package to the client:**
```bash
pnpm add <package-name> --filter=client
```
**Adding a package to the server:**
```bash
pnpm add <package-name> --filter=server
```

### Directory Structure
Here’s an overview of the project structure:
```bash
├── apps/
│   ├── client/   # Next.js front-end application
│   ├── server/   # NestJS back-end application
├── package.json   # Root package configuration
└── pnpm-workspace.yaml # pnpm workspace configuration
```
