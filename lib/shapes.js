class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke="black" stroke-width="1"/>

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `;
    }
    // source for how to add a border to svg shapes: https://www.w3schools.com/graphics/svg_polygon.asp
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" stroke="black" stroke-width="1"/>

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" stroke="black" stroke-width="1"/>

        <text x="150" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `;
    }
}

module.exports = {Circle, Square, Triangle};
