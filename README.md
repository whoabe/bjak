### Coding Challenge

Please create 2 webpages with the following two endpoints:

First page: list of movie/tvshow titles
https://cdn-discover.hooq.tv/v1.2/discover/feed?region=ID&page=1&perPage=20

Extract rows with type "Multi-Title-Manual-Curation". Each row shows “row_name” on top followed by a list of horizontally scrollable images (use POSTER type). Put title below each image.
The end result page is a list of rows with scrollable images with individual titles below.

Please handle pagination by changing the page=x in query when scrolling down.
On click of any image, call the following endpoint using the corresponding id: https://cdn-discover.hooq.tv/v1.2/discover/titles/:id for second page

Second page: the details of the movie
e.g. https://cdn-discover.hooq.tv/v1.2/discover/titles/e6464ce6-42c9-43ae-be23-0dd57f50add1
Show the details from the response, the layout is up to your creativity

### Demo:

https://whoabe-bjak.netlify.com

### Directory:

    .
    ├── json examples           # json examples from hooq.tv
    ├── src                     # Source files (alternatively `lib` or `app`)
    |   ├── apis
    |   │   ├── hooqtv.js               # axios for hooq.tv
    |   ├── components                  # components used in app
    |   ├── helpers                     # helper functions
    |   │        ├── convertHMS.js      # convert var in ms to HH:MM:SS
    |   ├── pages                       # pages of the app
    |   ├── App.css                     # styleSheet for App
    └── README.md

### React App Structure:

    .
    ├── App.js
    │    │──── DiscoverMovies.js                     # homepage
    │       │────── RowList.js                       # all multi-title-manual-curation movies
    │           │────── RowItem.js                   # 1 type movies + title
    │               │────── MoviesContainer.js       # 1 type of movies
    │                  └────── MovieItem.js          # movie poster image and title
    │    │──── MovieDetailsPage.js                   # 2nd link detailed movie info
              └─────── MovieDetailsInfo.js           # detailed info about select movie

### Tech:

React.js

### How to run:

\$ npm install

\$ npm start

### Future plans:

implement sliders to show multiple movies with arrow icons
