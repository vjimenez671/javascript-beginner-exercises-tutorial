/* Test status - working partially */

const fs = require('fs');
const path = require('path');

jest.dontMock('fs');
//here we are going to store and accumulate (concatenate) all the console log's from the exercise
let _buffer = "";
let _log = console.log;

// lets override the console.log function to mock it,
// but we are also going to save what supposed to be the ouput of the console inside _buffer
global.console.log = console.log = jest.fn((text) => _buffer += text + "\n");

describe('All the javascript should match', function () {
    beforeEach(() => {
        //here I import the HTML into the document
    });
    afterEach(() => { jest.resetModules(); });

    it('at least 1 console.log() call with proper message', function () {

        //then I import the index.js (which should have the alert() call inside)
        const file = require("./app.js");
     
        if (parseInt(__stdin) > 100) {
            expect(console.log.mock.calls[0][0]).toBe("Give me your money!");
        } else if (parseInt(__stdin) > 50) {
            expect(console.log.mock.calls).toBe("Buy me some coffee, you cheapster!");
        } else { 
            expect(console.log.mock.calls).toBe("You are a poor guy, go away!");
        }    

        expect(console.log.mock.calls.length).toBe(1);

        //You can also compare the entire console buffer (if there have been several console.log calls on the exercise)
        //expect(_buffer).toBe("Compare with the entire function buffer out");
    });
});