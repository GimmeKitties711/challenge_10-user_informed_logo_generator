const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes'); // import the classes from lib/shapes.js

let questions = [
    {
        type: "input",
        name: "logo_text", // will be referenced as responses.logo_text
        message: "Enter the text that you would like your logo to display. Can be up to 3 characters.",
        validate: function(answer) {
            if (answer.length < 1) { // if the user tries to proceed without entering any characters
                return "Please enter at least 1 character.";
            } else if (answer.length > 3) { // if the user enters at least 4 characters
                return "Please enter at most 3 characters.";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "text_color", // will be referenced as responses.text_color
        message: "Enter the color of the text. Can be any valid CSS color or hex code. If you enter a hex code, please include the #. If you enter an invalid color, it will be rendered as black by default.",
        validate: function(answer) {
            if (answer.length < 1) {
                return "Please enter a color.";
            }
            return true;
        },
    },
    {
        type: "list",
        name: "shape", // will be referenced as responses.shape
        message: "Select the shape of your logo. You can choose from a circle, square, or triangle.",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        name: "shape_color", // will be referenced as responses.shape_color
        message: "Enter the color of the shape. Can be any valid CSS color or hex code. If you enter a hex code, please include the #. If you enter an invalid color, it will be rendered as black by default.",
        validate: function(answer) {
            if (answer.length < 1) {
                return "Please enter a color.";
            }
            return true;
        },
    }
]

// this function is inspired by processTitleString(), which I wrote in Challenge 9: https://github.com/GimmeKitties711/challenge_9-user_informed_readme_generator
function processStringComponent(component) {
    /*
    this function filters out characters that are not allowed in file names.

    a file name cannot contain any of the following characters:
    \ / : * ? " < > |

    the string component, which is based on the user's responses, is included in the file name. if the component contains any of the forbidden characters, they need to be filtered out. I have decided to change all of them to a dash (-).

    this function also filters out characters that cause problems when the svg file is opened with Live Server. this will be explained in more detail in the comments below.
    */

    processedComponent = component.replace(/[\u0020*\u0009*]/g, "_");
    /*
    this regex does a global search (through the whole component) and for every character where there is at least one instance of a space (\u0020) or a tab character (\u0009), it is replaced with an underscore

    although spaces are allowed in filenames, I have decided to replace them because they could be problematic for file handling systems, source: https://superuser.com/questions/29111/what-technical-reasons-exist-for-not-using-space-characters-in-file-names
    */

    processedComponent = processedComponent.replace(/[\u005e*\u0025*\u0023*]/g, "-");
    /*
    this regex does a global search and for every character where there is at least one instance of a caret (\u005e), a percent sign (\u0025), or a hashtag (\u0023), it is replaced with a dash

    I have decided to replace carets, percent signs and hashtags because they cause url problems when the svg file is opened with Live Server
    */

    // source for how to use regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    // source for special character unicode: https://owasp.org/www-community/password-special-characters
    // source for tab character unicode: https://stackoverflow.com/questions/9660987/how-to-get-a-tab-character

    processedComponent = processedComponent.replace(/[\\*\/*\:*\**\?*\"*\<*\>*\|*]/g, "-"); // replaces all forbidden characters with dashes
    // source for the replace() method in strings: https://www.w3schools.com/jsref/jsref_replace.asp

    return processedComponent;
}

function processRenderComponent(component) {
    processedComponent = component.replace(/[\u003c*\u0026*]/g, "-");
    // this regex does a global search and for every character where there is at least one instance of a less than sign (\u003c) or an ampersand (\u0026), it is replaced with a dash
    // I have decided to replace less than signs and ampersands because they cause rendering problems when the svg file is opened with Live Server
    return processedComponent;
}

function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        /*
        for every shape, we need to do the following:

        1. create a new instance of the shape class
        2. call the class's render() method on the instance
        3. write the result of the render() method to a file
        */
        if (responses.shape === "circle") {
            // create a new instance of the Circle class
            const circle = new Circle(processRenderComponent(responses.logo_text), responses.text_color, responses.shape_color);
            // processRenderComponent() removes problematic characters (< &) from the logo text
            const svg = circle.render();
            // write the file name as './examples/[logo text]_[shape color]_[shape].svg'
            fs.writeFile(`./examples/${processStringComponent(responses.logo_text)}_${processStringComponent(responses.shape_color)}_circle.svg`, svg, (err) => {
            // processStringComponent() removes problematic characters from the file name. you can find a comprehensive list of them in the function definition.
                if (err) {
                    console.log(err);
                } else { // if there is no error
                    console.log('Your SVG file has been created successfully.')
                }
            });
        } else if (responses.shape === "square") {
            const square = new Square(processRenderComponent(responses.logo_text), responses.text_color, responses.shape_color);
            const svg = square.render();
            fs.writeFile(`./examples/${processStringComponent(responses.logo_text)}_${processStringComponent(responses.shape_color)}_square.svg`, svg, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Your SVG file has been created successfully.')
                }
            });
        } else if (responses.shape === "triangle") {
            const triangle = new Triangle(processRenderComponent(responses.logo_text), responses.text_color, responses.shape_color);
            const svg = triangle.render();
            fs.writeFile(`./examples/${processStringComponent(responses.logo_text)}_${processStringComponent(responses.shape_color)}_triangle.svg`, svg, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Your SVG file has been created successfully.')
                }
            });
        }
    });
}

init(); // the initialization function is called here so that it runs when this file is executed with 'node index.js'
