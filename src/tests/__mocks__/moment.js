// Used to mock the moment library to get a specific time stamp used in tests
// Just sets the default moment to take time 0.a1
// So if moment() is used anywhere in the project, this default will be set.
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
   return moment(timestamp);
}