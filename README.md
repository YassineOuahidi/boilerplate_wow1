# Winning Offering Workbench
### (boilerplate)
This is a pre-release of the WOW project. Its goal is to show why JAMstack architecture and HUGO are valuable tools for this project, and understand how we can work with theme.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Install [Vagrant](https://www.vagrantup.com/docs/installation/)
* Clone the repository

### Installation
Open a terminal in the repository folder and run this command to create the vargant virtual machine
```shell
$ vagrant up
```
Once it finish run:
```shell
$ vagrant ssh
```

## Contributing
### Scripts guide

* Compile ES6 and stylesheets then listen for changes:
```shell
$ npm run dev
```
* Run development server on **[localhost:1313](localhost:1313)** after compiling static files:
```shell
$ npm run server
```
* Deploy production server:
```shell
$ npm run deploy
```
You can edit the source files under `./static-src`, never edit compiled files under  `./public`.
