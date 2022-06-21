#!/bin/sh
# https://github.com/facebook/create-react-app/issues/821#issuecomment-416298337

# copy files | https://tosbourn.com/copy-rename-multiple-files-linux/
for i in /Users/vasilecampeanu/www/blog/vasilecampeanu.github.io/static/react-projects/tictactoe/static/js/main.*;  do cp $i `echo $i | sed "s/main.*.js/main.js/g"`;   done
for i in /Users/vasilecampeanu/www/blog/vasilecampeanu.github.io/static/react-projects/tictactoe/static/css/main.*; do cp $i `echo $i | sed "s/main.*.css/main.css/g"`; done