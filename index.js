const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

let questions = [
    {
        type: "input",
        name: "logo_text",
        message: "Enter the text that you would like your logo to display. Can be up to 3 characters.",
        validate: function(answer) {
            if (answer.length < 1) {
                return "Please enter at least 1 character.";
            } else if (answer.length > 3) {
                return "Please enter at most 3 characters.";
            }
            return true;
        },
    },
    {
        type: "input",
        name: "text_color",
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
        name: "shape",
        message: "Select the shape of your logo. You can choose from a circle, square, or triangle.",
        choices: ["circle", "square", "triangle"],
    },
    {
        type: "input",
        name: "shape_color",
        message: "Enter the color of the shape. Can be any valid CSS color or hex code. If you enter a hex code, please include the #. If you enter an invalid color, it will be rendered as black by default.",
        validate: function(answer) {
            if (answer.length < 1) {
                return "Please enter a color.";
            }
            return true;
        },
    }
]

// this function is inspired by processTitleString() from Challenge 9: https://github.com/GimmeKitties711/challenge_9-user_informed_readme_generator
function processStringComponent(component) {
    /*
    the purpose of this function is to filter out characters that are not allowed in file names:

    A file name can't contain any of the following characters:
    \ / : * ? " < > |

    the component is included in the file name, so if the component contains any of the forbidden characters, they need to be filtered out. I have decided to change all of them to a dash (-).
    */

    processedComponent = component.replace(/[\u005e*\u0025*\u0023*\u0020*\u0009*]/g, "_");
    /*
    this RegExp does a global search (through the whole component) and for every character where there is at least one instance of a caret (\u005e), a percent sign (\u0025), a hashtag (\u0023), a space (\u0020), or a tab character (\u0009), it is replaced with an underscore.

    1. carets, percent signs and hashtags cause url problems when the svg file is opened with Live Server, so I have decided to replace them with underscores
    2. although spaces are allowed in filenames, I have decided to replace them because they could be problematic for file handling systems, source: https://superuser.com/questions/29111/what-technical-reasons-exist-for-not-using-space-characters-in-file-names
    */

    // source for how to use RegExp: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
    // source for special character unicode: https://owasp.org/www-community/password-special-characters
    // source for tab character unicode: https://stackoverflow.com/questions/9660987/how-to-get-a-tab-character

    processedComponent = processedComponent.replace(/[\\*\/*\:*\**\?*\"*\<*\>*\|*]/g, "-"); // replaces all forbidden characters with dashes
    // source for the replace method in strings: https://www.w3schools.com/jsref/jsref_replace.asp

    return processedComponent;
}

function processRenderComponent(component) {
    processedComponent = component.replace(/[\u003c*\u0026*]/g, "_");
    // this RegExp does a global search (through the whole component) and for every character where there is at least one instance of an ampersand (\u0026), it is replaced with an underscore.
    // the ampersand causes rendering problems when the svg file is opened with Live Server, so I have decided to replace it with an underscore
    return processedComponent;
}

function init() {
    inquirer.prompt(questions).then(responses => {
        console.log(responses);
        // responses.shape
        // we need to create a new instance of the shape class
        // we need to call the render method on the shape class
        // we need to write the result of the render method to a file
        if (responses.shape === "circle") {
            // get the render method from the circle class
            const circle = new Circle(processRenderComponent(responses.logo_text), responses.text_color, responses.shape_color);
            const svg = circle.render();
            fs.writeFile(`./examples/${processStringComponent(responses.logo_text)}_${processStringComponent(responses.shape_color)}_circle.svg`, svg, (err) => {
                if (err) {
                    console.log(err);
                } else {
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

init();
