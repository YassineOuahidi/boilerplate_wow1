# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<-SCRIPT
	apt-get update

    ###########################     Node and npm        ###########################
    curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
    bash nodesource_setup.sh
    apt-get install -y nodejs
    apt-get install -y build-essential
    npm install --no-bin-links

    ###########################      Hugo      ###########################
    wget -q https://github.com/gohugoio/hugo/releases/download/v0.31.1/hugo_0.31.1_Linux-64bit.deb
    dpkg -i hugo*.deb
SCRIPT


VAGRANTFILE_API_VERSION = '2'
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
	config.vm.box = "bento/ubuntu-16.04"
    config.vm.box_version = "~>2.3.0"
	config.vm.network "forwarded_port", guest: 1313, host: 1313
    config.vm.provision "shell", inline: $script
	config.vm.provider "virtualbox" do |v|
	  v.memory = 2048
	end
end