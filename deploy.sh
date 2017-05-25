#!/bin/sh

echo 'Getting latest changes from git...';
git pull

echo 'Updating packages...';
yarn

echo 'Compiling files...';
gulp build