# Dene web template

A very simple web app written in [Deno](https://deno.land/) providing a
poll-able endpoint on TCP port 8080 for network testing and troubleshooting.

# Getting started

## Prerequisites

Install Deno by visiting their website (above) or through a package manager.

```
pacman -S deno
```

## Install

Installation of the web app can be done manually or if using systemd by
executing the script provided.

```
cd deno-web-template/
```

```
chmod +x install.sh
```

```
./install.sh
```

Test the installation by running `curl localhost:8080`.

> Note: the install script provided will enable the service to start on boot.
