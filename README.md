
# Electron Base App

This is a base electron app example.
But with a small twist, it has a "gambiarra" that it is built
inside a docker container, and then, the files are extracted for the local
directory.

# Build application

Run the script `build-and-extract` and after building the application inside
the container, it will extract the AppImage and other files the the `dist` directory.
