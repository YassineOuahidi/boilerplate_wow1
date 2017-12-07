# Winning Offering Workbench 
### (boilerplate)
This is a pre-release of the WOW project. Its goal is to show why JAMstack architecture and HUGO are valuable tools for this project, and understand how we can work with theme.
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
* Install [Vagrant](https://www.vagrantup.com/docs/installation/)
* Clone the repository

### Installing
Open a terminal in the repository folder and run this command to create the vargant virtual machine
```shell
vagrant up
```
Once it finish run:
```shell
vagrant ssh
```

After that run this sctipt
```shell
#compile javascript and css
dev
```
```shell
#compile javasript and css and listen for changes
npm run watch
```

```shell
#deploy server on aerobatic
npm run deploy
```

```shell
#deploy on localhost
npm run server
```




