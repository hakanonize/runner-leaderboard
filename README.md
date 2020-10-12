## Runner LeaderBoard

Runner List application using ReactJS.

This application lists runners that provided from csv file. Application has 3 sorting functionality that given below.

 - Average Pace (Minutes per KM)
 - Distance
 - Total Time

Also application can filter runners by Age. 
 
 ## :cd: How to run local
 

    - npm install
    - npm run start




If data in csv file changes, you should run paceinfo.js and userinfo.js files with node, inside data folder then convert to json file.
 
## :scroll: How Program Works

First, program takes csv files and converts them into seperate json files. Then with function that takes 2 json file and converts them into one Array. 
Then, every filter action uses that Array and stores in react state.