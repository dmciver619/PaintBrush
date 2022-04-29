# paint-brush

## Project setup
Install project dependencies
```
npm install
```
Compile and run project on localhost
```
npm run serve
```

## Learning Points
This was my second project written in Vue.js.

**Pinia**
I initally had it set up so that many properties were being passed and emitted between components, so I installed Pinia. (Pinia is the new standard to Vuex)
Pinia is used to store variables that can be accessed by any component that imports the class.

**Vue**
- Using Pinia in Vue
- Using external stylesheets effectively to minimise inline styling
- Adding vue directives
  - For this project, I added `v-click-outside` to add a check for clicking outside the sidebar to close it

## Idea behind this project
This idea behind this project came from two areas:
1. I recently saw someone play [Passpartout](https://store.steampowered.com/app/582550/Passpartout_The_Starving_Artist/)
  - A game where the user plays as a French artist that paints to make money
2. I saw [a speaker on Amazon](https://www.amazon.co.uk/Divoom-Timebox-Portable-Bluetooth-Programmable-Black/dp/B07H7L1PLD/ref=asc_df_B07H7L1PLD?tag=bingshoppinga-21&linkCode=df0&hvadid=80126967116377&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=&hvtargid=pla-4583726542825010&psc=1) that uses an app in order to 'draw' pixel art on the LED screen
  - I thought this was a pretty cool idea so I decided it'd be good fun to make my own app that would have similar functionality to the app
