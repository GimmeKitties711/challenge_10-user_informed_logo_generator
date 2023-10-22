const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should render a triangle', () => {
            const shapeColor = "blue";
            const shape = new Triangle('ABC', 'black', shapeColor);
            expect(shape.render()).toContain(`<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" stroke="black" stroke-width="1"/>`);
        });
    });
});
