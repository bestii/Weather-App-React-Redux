import { FETCH_WEATHER } from '../actions/index';
export default function (state = [], action) {
    //console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            //never manipulate existing state (that is why push is not used)
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state]; //ES6 syntax for the above statement
    }
    
    return state;
}
/*  The Biggest advantage of Redux promise is that even though we are passing a promise to our reducers,
    when redux-promise identifies that a promise has been passed to a reducer it stops the action till the promise has been
    completed and only passes the return data to the reducer instead of the promise.
*/