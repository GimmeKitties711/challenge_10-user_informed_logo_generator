# Challenge 10

## Description
When you create a project, the code might be good but you might also want a simple logo to go along with it. That way, you can have a project that has a unique image that makes your project unique. This application prompts the user for input about the text, text color, shape, and shape color that they would like to use for their logo and uses that information to create a Scalable Vector Graphics image that matches the user's choices. This project taught me how to write tests for functions contained in classes, render an SVG file, and use inheritance to transfer properties from a parent class to its child classes.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
Once you download the repository, open the package.json file in the integrated terminal

![Open package.json in Integrated Terminal](Images/open_package_json_in_integrated_terminal.png)

and then once you do that you should type npm install

![Install packages](Images/package_json_and_npm_install.png)

and the packages inquirer and jest will be installed.

## Usage
once you have opened the root directory in the integrated terminal, you can do two things: 1. you can run tests to see if the render() function of the shape classes is working properly 2. you can create a new svg file thingy. to run the tests type the command `npm test` in the terminal, and the functions in `lib/shapes.test.js` will be executed:

![Shapes tests passing](Images/shapes_test_passing.png)

to create a new svg file, type `node index.js` into the terminal. You will be asked to enter the text (up to three characters), the text color, the shape, and the shape color that you would like your svg logo to be:

![Inquirer prompts and user responses](Images/new_svg_file_successfully_created.png)

once you have answered all 4 questions, the new file will appear in the examples folder with the title text_color_shape.svg. (include new file being created in last pic) once you click on the new file, you can right click on it and select open with live server

![Open svg with Live Server](Images/open_svg_with_live_server.png)

and then you can view it in the browser

![svg opened in browser](Images/svg_opened_in_browser.png)

The link to a walkthrough video demonstrating the application can be found [here](https://youtu.be/GhaqBli3blc)

## Credits
Received assistance from instructor Robbert Wijtman in the *#02-ask-the-class* Slack channel.

The following web resources helped me write the code for this project:

1. [My Challenge 9 submission](https://github.com/GimmeKitties711/challenge_9-user_informed_readme_generator)
2. [Why spaces could be problematic for file handling systems](https://superuser.com/questions/29111/what-technical-reasons-exist-for-not-using-space-characters-in-file-names)
3. [How to use regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
4. [Special characters and their associated unicode](https://owasp.org/www-community/password-special-characters)
5. [Stack Overflow: How to get a tab character's unicode](https://stackoverflow.com/questions/9660987/how-to-get-a-tab-character)
6. [The replace() method](https://www.w3schools.com/jsref/jsref_replace.asp)
7. [How to add a border to svg shapes](https://www.w3schools.com/graphics/svg_polygon.asp)

## Contributing
No contribution is necessary for this project.

## Tests
Run npm test from the root directory to activate the tests written in lib/shapes.test.js

![Shapes test code](Images/shapes_test_code.png)

see usage or something idk

## License
No license is attached to this repository.

## Questions
If you have any questions for me, you can [follow me on GitHub](https://github.com/GimmeKitties711) or email me at eric20wang.wang@gmail.com.
