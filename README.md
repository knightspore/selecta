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

### WIP

- [ ] Add popularity dials
- [ ] Save App State (Form, Aura) / Save History
- [ ] ...use Spotify Audio on Player
- [ ] Write about page / re-use for login page
- [ ] Write privacy policy page
- [ ] Get spotify authorization

### Maybe

- [?] Add music features dials (optional)
- [?] Limit search by timeframe
- [?] "Load more results" option

### Done

- [x] Form: Create "Playlist" while browsing for tracks
- [x] Form: Export tracks / playlist to profile
- [x] Add "add artist" input to form
- [x] Revamp Main Layout / Page to Accomodate for Info Pages
- [x] Sign in on session expire instead of sign out
- [x] Copy Track Aura?
- [x] Add Padding at end of results
- [x] Add some more data to track results
  - [X] Spotify Logo Link
  - [ ] Release Date
  - [X] Popularity
- [x] Log in with Spotify
- [x] Make tracks smaller on mobile (scrollable list vs. tik-tok style)
- [x] Artist add to seeds button
- [x] Track add to seeds button
- [x] Add Seed Tracks Input to Form

## License

Selecta is distributed under MIT license, which means you can use and modify it however you want. If you have any ideas, improvements, etc. - please feel free to make a pull request.
