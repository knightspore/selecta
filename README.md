# 💽 Selecta

A Crate Digging Tool for DJs to get recommendations from Spotify.

![App Preview](./public/selecta.png)

## Project Structure

This is a Next 13 project, using the app router and hosted on Vercel. Currently I'm using Context Providers to handle the recommendation state in the app, and talking to the API to make Spotify calls from the server.

- `/src/app` - NextJS App
- `/src/app/api` - API Routes
- `/src/components` - Basic Components
- `/src/provider` - Recommendations / AudioPlayer Context
- `/src/lib` - Various re-usable code and Spotify library

## To-Do

### V2 Launch

- [X] Don't Squash Seed Images
- [X] Fix loading SeedItemCard square vs circle
- [X] Make SeedItemCard Loading Smoother

- [X] Add Tempo Max/Min

- [ ] Add features to example track
- [ ] Write about page / re-use for login page 
- [X] Write privacy policy page
- [X] Upload to Site & Link from:
    - [X] Main Form
    - [ ] Welcome Page
    - [ ] About Page
- [ ] Review Content

- [ ] Consider Adding:
- [ ] Key
- [ ] Mode
- [ ] Time Signature

- [ ] Display player errors correctly
- [ ] Try moving player to card?

- [ ] Get spotify authorization

### Next

- [X] Remove Auras
- [X] Modularize Feature Controls
- [X] Acousticness
- [X] Liveness
- [X] Loudness
- [?] Redo Player?
- [?] RSC redo?
- [?] ...use Spotify Audio on Player
- [?] Add music features dials (optional)
- [?] Limit search by timeframe
- [?] "Load more results" option

### Done

- [X] Check Track + Tags + SeedItemCard for Spotify
- [x] Save session when logged in
- [x] Add popularity dials
- [x] Form: Create "Playlist" while browsing for tracks
- [x] Form: Export tracks / playlist to profile
- [x] Add "add artist" input to form
- [x] Revamp Main Layout / Page to Accomodate for Info Pages
- [x] Sign in on session expire instead of sign out
- [x] Copy Track Aura?
- [x] Add Padding at end of results
- [x] Add some more data to track results
  - [x] Spotify Logo Link
  - [ ] Release Date
  - [x] Popularity
- [x] Log in with Spotify
- [x] Make tracks smaller on mobile (scrollable list vs. tik-tok style)
- [x] Artist add to seeds button
- [x] Track add to seeds button
- [x] Add Seed Tracks Input to Form

## License

Selecta is distributed under MIT license, which means you can use and modify it however you want. If you have any ideas, improvements, etc. - please feel free to make a pull request.
