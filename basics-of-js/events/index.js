// Directions
// Create an `eventing` library out of the Events class.
// The events class should have methods 'on', 'trigger', and 'off'.

class Events {

	// Constructor to store events
	constructor(){
		this.events = {};
	}

	// Register an event handler
	// We will need some kind of storage to store all the events and their callbacks
	on(eventName, callback){

		// If value is there in array for event then push callback other wise create callback array.
		if(this.events[eventName]){
			this.events[eventName].push(callback);
		}else{
			this.events[eventName] = [callback];
		}
	}

	// Trigger all callbacks associated
	// With a given eventName
	trigger(eventName){

		// As long as there is any value in eventName execute it
		if(this.events[eventName]){
			for(let cb of this.events[eventName]){
				cb();
			}
		}
	}

	// Remove all event handlers associated with given eventName
	off(eventName){
		// this.events[eventName] = []; // This can be used or
		delete this.events[eventName];
	}
}