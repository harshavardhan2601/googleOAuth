# googleOAuth

[Passport](http://passportjs.org/) strategies for authenticating with [Google](http://www.google.com/)
using OAuth 1.0a and OAuth 2.0.

This is a meta-module that combines [passport-google-oauth1](https://github.com/jaredhanson/passport-google-oauth1)
and [passport-google-oauth20](https://github.com/jaredhanson/passport-google-oauth2).
It exists for backwards-compatibility with applications making use of the
combined package.  As of version 1.0.0, it is encouraged to declare dependencies
on the module that implements the specific version of OAuth needed.


## Install

    $ npm install passport-google-oauth20
