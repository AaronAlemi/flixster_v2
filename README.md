## Week 1 Assignment: Flixster

Submitted by: Aaron Alemi

Estimated time spent: **16** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [X] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [X] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [X] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [X] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [X] Website accounts for basic HTML/CSS accessibility features
- [X] Website should be responsive

#### STRETCH FEATURES

- [ ] Deploy website using GitHub Pages. 
- [X] Allow user to view more details about a movie within a popup.
- [X] Improve the user experience through CSS & animation.
- [X] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [X] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

https://user-images.githubusercontent.com/91973579/173163356-077c1771-1684-42c6-828f-0bf39e56146b.mp4

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The topics in my labs definitely helped prepare me for the assignment. Lab 3 was especially helpful as I used my work for that as a base for this one, following the same steps I used for API calls in that one. One thing I felt a bit unprepared for was the CSS side of things. Trying to arrange everything in a grid format took an extremely long time to do as I had no prior experience when it came down to that, so it was something I had to try and learn on the fly. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
With additional time, I would have liked to make my movie popup overlays a bit more polished, as the text used is the same regardless of the information, and the color scheme can be made a bit more presentable. I also wanted to add placeholder images for movies that did not have posters, and I also wanted to add a "no more results" text at the bottom of the screen when the user reaches the end of available results. In addition, I think my site would have benefitted as well from a better looking search bar and logo at the top, possibly with a popcorn icon to make it more movie themed.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think my animation for the popup overlay sliding in was a nice feature that showed off well in my demo. There wasn't really anything that went wrong during the demo as I prepared everything out in advance. One thing I noticed people do that looked really nice was to have borders for their movie cards, have a better looking search bar/button, use different colors for different ratings, and include an option to search by genre. For the future, I would like to keep some of these ideas in mind and potentially try and implement some of them in future projects.

### Open-source libraries used

- N/A

### Shout out

I'd like to shout out my 2 partners I had for this lab, Jenny and Aligary, for being such a huge help in various issues I faced. I would also like to give a shout out to the TA's Rebecca and Snigdha for being extremely helpful when it came to debugging things in minutes that would have taken me several hours to do on my own. My project wouldn't be anywhere near where it is now if it wasn't for the amazing guidance I recieved along the way from everyone.
