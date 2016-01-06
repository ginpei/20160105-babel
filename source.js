let year = [3,4,5,6,7,8,9].map((n)=>Math.pow(n,3)).reduce((l,r)=>l+r);
console.log('3^3 + 4^3 + 5^3 + 6^3 + 7^3 + 8^3 + 9^3 =', year);

let [d1, d2] = [1001, 1002];
console.log(d1, d2);

var bob = {
	_name: 'Bob',
	say() {
		console.log('I am ' + this._name);
	}
};
bob.say();

class Person {
	constructor(name) {
		this.name = name;
	}

	say() {
		let line = this._getLine();
		console.log(line);
	}

	_getLine() {
		let line = `I am ${this.name}.`;
		return line;
	}
}

class Gentleman extends Person {
	constructor(options) {
		if (typeof options === 'string') {
			options = { name:options };
		}

		super(options.name);

		this.age = options.age;
	}

	_getLine() {
		let line = `Hello. My name is ${this.name}.`;
		if (this.age) {
			line += ` I am ${this.age} years old.`;
		}
		return line;
	}
}

bob = new Gentleman('Bob');
bob.say();

let charlie = new Gentleman({ name:'Charlie', age:22 });
charlie.say();

console.log(`In ES5 "\n" is a line-feed.`);
console.log(String.raw`In ES5 "\n" is a line-feed.`);

// GET`http://foo.org/bar?a=${a}&b=${b}
//     Content-Type: application/json
//     X-Credentials: ${credentials}
//     { "foo": ${foo},
//       "bar": ${bar}}`(myOnReadyStateChangeHandler);

(function() {
	let map = new Map();
	let key1 = {};
	let key2 = {};
	map.set(key1, 1);
	map.set(key2, 2);
	console.log(map.get(key1));
	console.log(map.get(key2));
})();

(function() {
	let set = new Set();
	let key1 = {};
	let key2 = {};
	set.add(key1);
	set.add(key2);
	console.log(set.has(key1));
	console.log(set.has(key2));
})();
