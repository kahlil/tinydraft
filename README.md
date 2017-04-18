# tinydraft

[tinydraft](https://tinydraft.net) is a small progressive web app that allows you to save small drafts locally in your browser. It allows you to tweet those drafts via [Web Intents](https://dev.twitter.com/web/intents).

You can save it to your home screen on your phone and it will look like a native app.

It works offline as well as offline for modern desktop browsers and Android phones if you use Google Chrome. It does not work on iOS because they don't yet support ServiceWorkers. 

I am building this application in order to practice app development. 

Here is a list of features I plan to implement: 

- use a backend as a service for storage and sync of the drafts (Firebase? Hoodie?)
- user accounts
- various UX features (see the issues)

This app is being built with: 

- Angular CLI
- Angular 
- [upup](https://www.talater.com/upup/) for offline support
- [Netflify](https://netlify.com) for hosting and free HTTPS support 

# License
MIT
 