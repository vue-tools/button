#!/usr/bin/env node

var ghpages = require('gh-pages')
var path = require('path')
var pkgInfo = require('./package.json')
var homepage = pkgInfo.homepage
var version = pkgInfo.version
ghpages.publish(path.join(__dirname, 'docs'), {
    message: 'Update Docs: ' + version 
}, function (err) {
  if (err) throw err
  console.log('visit ' + homepage)
})
