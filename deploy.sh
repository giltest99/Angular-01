#!/bin/bash

# Build for production
ng build --base-href "https://giltest99.github.io/angular-01/"

# Deploy on GH Pages
ngh --dir=dist/angular-01

