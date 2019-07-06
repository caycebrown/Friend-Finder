# Friend-Finder
This is a web app demonstrating the use of node and express.

## About
This application mimics a match-making site in it's simplest form. It allows a user to input their name and an image URL and answer some simple personailty questions. The user's data is stored as seen below:  

```javascript
exports.userData = {
    users: [
        {name: 'Sassy Sasquatch', img: 'https://is3-ssl.mzstatic.com/image/thumb/Purple71/v4/de/49/e3/de49e314-0f52-fa2c-7e6e-11b7dcbd76b2/source/512x512bb.jpg', scores: [1,1,1,1,1,1,1,1,1,1]}, 
        {name: 'Herbert', img: 'https://i1.sndcdn.com/artworks-000089420936-77d6ti-t500x500.jpg', scores: [5,5,5,5,5,5,5,5,5,5]}
    ]
};
```

The application then compares the user's answers with user data saved in the `userData` object and finds the user with the most similar survey scores. It then returns the matched user's 'profile picture' and name. The function for the 'match-making' magic is below:

```javascript
    var lowDiff = 41; //One higher than maximum survey response difference to ensure it is updated in all cases
    var x = 0;
    
    function compareScores(arr1, arr2, index){
        
        var counter = 0;
        x++;
        
        for (i = 0; i <= 9; i++){
            
            diff = arr1[i] - arr2[i];
            console.log('diff: ' + diff);
 
            counter = counter + Math.abs(diff);
            console.log('counter: ' + counter);
        }
        if (lowDiff > counter){
            
            lowDiff = counter;
            console.log('lowdiff change:' + lowDiff);
            
            matchIndex = index;
            console.log('match index:' + matchIndex);
        };
    };
```



## Technologies Used
This application is built with:
* Javascript 
* jQuery 
* Node 
* Express

## Usage
If you would like to run this application you will need to utilize the following:

Node --> [Install Node](https://nodejs.org/en/)

Once node is installed, utilizing your terminal of choice run `npm install`.

This will install the only dependency for this particular application - 'Express'.
Documentation found here --> [Express NPM](https://www.npmjs.com/package/express)

After npm has finished installing express run `node server.js` and then open your browser and navigate to **localhost:3000.


