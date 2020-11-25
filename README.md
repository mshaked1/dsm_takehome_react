# DSM Frontend Interview Project

Please spend no more than 4 hours on this. We want to be mindful of your time.

- TLDR: _Build a social messaging inbox with real APIs_
- Time: _Less than 4 hours_
- Allowed tools & frameworks: _anything_

## Welcome! 👋

This is the DSM frontend take home. Use any tools you'd like and go for it!

The goal here is not to demonstrate your pure coding ability — problem that's not totally spec'd out for you, and we want to see far you can go. How good can you make it without much guidance? What are the sort of improvements and choices you'll make as you build this thing, and where do your priorities lie?

We know this isn't completely specced out and there are many product questions. Feel free to ask us via email or make decisions on your own!

- How you approach building products?
- How you communicate through the code?

## Getting started

There's a few things you need to get started on to get this to work.

### 1. Installing minimum deps

Make sure you have `node` installed, with a version greater than `7.0.0`. We recommend [`nvm`](https://github.com/creationix/nvm), or just installing the latest version of `node` with `brew install node` on macOS.

Once you have a viable `node` installed, run `npm install` in this repo to get your dependencies.

### 2. Serving your app

By default, you can run `npm start` to run your app, serving the files from `/public`. You can, however, change this to whatever you want! Just make sure you document the changes somewhere so we can run this.

### 3. Running the api server

There is an simple api server for you. You can run `npm run api-server` to start it. Read the [spec](./spec/api-endpoints.md) for more details on the api.

### 4. Read the spec

There's documentation in the `./spec` directory. Checkout the [design specs here](./spec/designs/detailed-design-specs.md) to understand what you're building!

## What you can use to build

You can use literally _anything_ that can be served on the web. You should use what you're most comfortable with, no matter what (even if you heard that we use React). **We want you to use the tools you know, and we want to see you at your best and most productive.**

Secondly, don't worry much about setting up build tools—use something simple and fast to spin up:

- If you're using Ember, it's fast to spin up something with [`ember-cli`](https://ember-cli.com/)
- If you're using Angular 1.x, you can use [this yeoman generator](https://github.com/yeoman/generator-angular) to spin up a scaffold
- If you're using Angular 2+, you can use [Angular CLI](https://cli.angular.io/) to create a new app scaffolding
- If you're using React, it's easy to use [`create-react-app`](https://github.com/facebookincubator/create-react-app) to start the project
- If you're using Vue, [`vue-cli`](https://github.com/vuejs/vue-cli) will be a fast way to get started.
- For anything else, use your favorite generators or templates!

## How we'll test this

We're going to review your code to see how you work and how you make tradeoffs — no automated tests for this one.

## We'll be evaluating for:

- Solid UX without strict guidance
- Chat Features
- Code quality
- Readability
- Testability
- Maintainability
- Communication

## Submission Instructions

1. Write up instructions on how to run your project and ensure there's ample documentation on your intent
2. Create a zip file containing your solution and all the starter files provided by us. Make sure we can run the application using just the files in the zip. Delete `node_modules` before zipping the project files.
3. Name your zip file as `dsm_takehome_<framework>.zip` (for example, if you used react for the project, your zip file would be named `dsm_takehome_react.zip`
4. Share the zip file with the recruiter using any file sharing service (Google Drive, Dropbox, etc.) - GMail unfortunately blocks .js files even if they're zipped. Make sure the recruiter has permissions to access the zip file.
5. We'll review and get back to you soon!

## Extra notes

A couple of things to say:

1. Feel free to change the language you're writing this in. We want to see what good code looks like for you - feel free to add a `gulpfile`, setup `webpack`, or just use the plain JS, CSS, and HTML you're given. It's all up to you!

2. Feel free to use any libraries or frameworks you want, with the idea that they're increasing your productivity, not writing the app for you.

3. **Please don't** modify the server.js file. We're looking to see your front-end skills!
