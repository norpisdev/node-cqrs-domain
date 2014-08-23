// if exports is an array, it will be the same like loading multiple files...
//module.exports = require('cqrs-domain').defineBusinessRule({
module.exports = require('../../../../').defineBusinessRule({
  name: 'atLeast1EMail', // optional, default is file name without extenstion
  description: 'at least one email adress should be set', // optional
  priority: 1 // optional, default Infinity, all business rules will be sorted by this value
}, function (changed, previous, events) {
	if (changed.get('emails').length === 0) {
		// throw new Error('an email address is needed');
		// or
		throw new Error(); // if no error message is defined then the description will be taken
	}
});
