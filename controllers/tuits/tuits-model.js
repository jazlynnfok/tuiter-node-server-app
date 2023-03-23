import mongoose from 'mongoose'; //load mongoose library
import tuitsSchema from './tuits-schema.js' //load tuits schema
const tuitsModel = mongoose //create mongoose model from schema
              .model('TuitModel', tuitsSchema);
export default tuitsModel; //export so it can be used elsewhere