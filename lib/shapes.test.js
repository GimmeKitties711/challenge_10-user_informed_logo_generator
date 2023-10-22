const { Circle, Square, Triangle } = require('./shapes');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should render a triangle', () => {
            const shapeColor = "blue";
            const shape = new Triangle('woo', 'black', shapeColor);
            //shape.setColor("blue");
            
            expect(shape.render()).toContain(`<polygon points="200,10 200,190 160,210" fill="${shapeColor}"/>`);
        });
    });
});
