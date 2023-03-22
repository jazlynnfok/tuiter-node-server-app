import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body; //retrieve data from HTTP body
    newTuit._id = (new Date()).getTime() + ''; //add _id field as a time stamp
    newTuit.likes = 0; //initialize likes counter
    newTuit.liked = false; //initialize liked flag 
    tuits.push(newTuit); //append new tuit to tuits array
    res.json(newTuit); //respond witih new tuit
} 
const findTuits  = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid; //get ID of tuit to update from path
    const updates = req.body;  //get updates from HTTP body
    const tuitIndex = tuits.findIndex((t) => //find index of tuit to update in the tuits array
      t._id === tuitdIdToUpdate);
    tuits[tuitIndex] = //update the element in tuits array
        {...tuits[tuitIndex], ...updates} //merging/updating old tuit with updates
    res.sendStatus(200); //respond with success
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid; //retrieve the ID of the tuit we want to remove
    tuits = tuits.filter(t => //filter out the tuit from the tuits array
      t._id !== tuitdIdToDelete);
    res.sendStatus(200); //respond with success
}

const TuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController