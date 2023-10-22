const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should render a circle', () => {
            const shapeColor = "red";
            const shape = new Circle('abc', 'black', shapeColor);
            expect(shape.render()).toContain(`<circle cx="150" cy="100" r="80" fill="${shapeColor}" stroke="black" stroke-width="1"/>`);
        });
    });
});

describe('Shapes', () => {
    describe('Square', () => {
        it('should render a square', () => {
            const shapeColor = "green";
            const shape = new Square('ABC', 'black', shapeColor);
            expect(shape.render()).toContain(`<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" stroke="black" stroke-width="1"/>`);
        });
    });
});

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should render a triangle', () => {
            const shapeColor = "blue";
            const shape = new Triangle('123', 'black', shapeColor);
            expect(shape.render()).toContain(`<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" stroke="black" stroke-width="1"/>`);
        });
    });
});
