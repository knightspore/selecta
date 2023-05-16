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

- [X] Add Padding at end of results
- [X] Add some more data to track results
    - Spotify Logo Link
    - Release Date
    - Popularity
- [X] Log in with Spotify
- [~] Create "Playlist" while browsing for tracks
- [~] Export tracks / playlist to profile
- [ ] Add popularity dials
- [ ] Make tracks smaller on mobile (scrollable list vs. tik-tok style)
- [ ] Add Seed Tracks Input
- [ ] Add music features dials
- [ ] Skip Fwd / Bck on Audio Player
- [ ] "Load more results" option
- [ ] Limit search by timeframe

## License

Selecta is distributed under MIT license, which means you can use and modify it however you want. If you have any ideas, improvements, etc. - please feel free to make a pull request.

