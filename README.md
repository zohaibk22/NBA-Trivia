# Project Overview

## NBA Trivia

## Project Description

The "NBA Trivia" application will challenge your knowledge of player stats within the NBA. This will be a trivia game that will allow you to pick between multiple categories of stats within the NBA. After selecting a category, you will then b3 shown two cards of random players. It will then be up to you to select who you believe is the better player according to that specific category of stats. There will be ten round in total. At the end of the game, you will be given a percentage of the questions you answered correctly to portray your knowledge of NBA players with respect to the selected stat line.


## Wireframes

Home.js
URL:https://wireframe.cc/00ljIJ

Game-Selection.js
URL: https://wireframe.cc/OseLdy

Game.js
URL:https://wireframe.cc/DXL1j8


### MVP/

#### MVP Gaols

- Have atleast one functioning category for the game
- Be able to compare two objects of data from the sourced API
- Have a home page, game Page, and exit page (Utilizing React Router)
- Implement Flex Box for design


#### MVP API


|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| BallDontLie API |      Yes      | https://ball-dont-lie.herokuapp.com/#introduction | https://www.balldontlie.io/api/v1/games/<ID> |

Sample Query Results:

```
{
    "id": 140,
    "first_name": "Kevin",
    "height_feet": 6,
    "height_inches": 9,
    "last_name": "Durant",
    "position": "F",
    "team": {
        "id": 3,
        "abbreviation": "BKN",
        "city": "Brooklyn",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Brooklyn Nets",
        "name": "Nets"
    },
    "weight_pounds": 240
}

```

![API Snippet](https://github.com/zohaibk22/NBA-Trivia/blob/master/Screen%20Shot%202020-06-29%20at%2010.36.38%20AM.png)

<br>

#### MVP Libraries & Dependencies


|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | Utilzing React |
| React Router | Utilizing Route, Link, withRouter features |
| Axios | Utilizing API Calls  |

<br>

#### MVP Components

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
|__ components/
      |__ App.jsx
      |__ Header.jsx
      |__ Home.jsx
      |__ Game-Selection.jsx
      |__ Game.jsx
      |__ Exit.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | Implementation file. Will implement all respective components of applications |
|    Header.js    | functional |   n   |   n   |   n   |Header/Nav component that will render on all pages|
|    Home.js     | functional |   n   |   n   |   n   | Home page to enter into game |
|    Game-Selection.js     | functional |   n   |   n   |   n   | Game-Selection page to show all different options of trivia games |
|    Game.js    | class |   y   |   y   |   n  | the Game page|
|    Result-page.js    |   functional |   y   |   n   |   n  | The result page will display the player's score after the game has concluded |
|    Footer    | functional |   n   |   n   |   n   | A footer that will render on all pages |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Header.js |    L     |     1 hrs      |      hrs     |     hrs    |
| Home.js    |    H     |     2 hrs      |      hrs     |     TBD     |
| Game-Selection.js     |    M     |     2 hrs      |      hrs     |     TBD     |
| Game.js     |    H     |     4 hrs      |      hrs     |     TBD     |
| Results     |    H     |     3 hrs      |      hrs     |     TBD     |
| Footer     |    L     |     1 hrs      |      hrs     |     TBD     |
| TOTAL            |          |     13 hrs      |      hrs     |     TBD     |

<br>




#### PostMVP 

- Render multiple game modes 
- Multiplayer functionality
- Ability to play game multiple times



<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
