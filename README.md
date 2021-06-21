# TwigEducationTechTest

A short Tech test for a job application

Steps on How to run the code:
Once you have downloaded this repository, it is important you do the following steps:

1.  In the terminal: ensure you have Node.js installed by entering node -v. (You should see version displayed in the Terminal).
2.  If you do not have it already installed, please install from their website: <https://nodejs.org>.
3.  Once that is installed, enter the following into yor commandline: `npm install --production`.
4.  To see the function running in your terminal, inside the open folder (TwigEducationTechTest), enter `node arraySplit.js` and you will see the results of the the function being called, logged to the console. (You can change these values to get different results for each differing calling of the function - (This must be done from the `arraySplit.js` file).
5.  To run the tests (using Mocha), with the Project folder (TwigEducationTechTest) open in your text editor, you can run the tests by entering `npm test` in your command line.

Solution explained:

I declared a function which takes in two parameters, an array(arr) and size which will be used to take in the array being sorted into smaller, equal length arrays.
I also declared an empty array ( called result) which will take in the nested arrays.
Inside the function, I used a for loop to loop through the original array, and using the slice() method, I push the new, nested arrays into the empty result array.
The slice() method can accommodate a start and end positions, but the end position does not include the the final value, so arrays, being 0 indexed, 'i + size' returns items indexed from 0, ending at size minus 1! For example, if an array is size 5, its elements are indexed 0, 1, 2, 3 and 4.

Finally, there are unit tests, to show the function works correctly in various situatios. (In the terminal, run `npm test` to see the results).
