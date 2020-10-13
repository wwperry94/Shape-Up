let shapeContainer = document.getElementById('shape-container');

class Shape {
    constructor(color, name, length, width, height, radius, area, perimeter) {
        this.div = document.createElement('div');
        this.div.className = 'Shape';
        this.div.style.cursor = "grab";
        this.div.style.backgroundColor = color;
        this.div.style.opacity = ".5";
        this.div.addEventListener('mouseover', () => this.div.style.opacity = "1.0");
        this.div.addEventListener('mouseout', () => this.div.style.opacity = ".5");
    };

    describe() {
        if (this.name) {
            document.getElementById('side-name').innerHTML = this.name
        } else { document.getElementById('side-name').innerHTML = "" };
        if (this.length) {
            document.getElementById('side-length').innerHTML = `Length: ${this.length}`;
        } else { document.getElementById('side-length').innerHTML = "" };
        if (this.width) {
            document.getElementById('side-width').innerHTML = `Diameter: ${this.width}`;
        } else { document.getElementById('side-width').innerHTML = "" };
        if (this.height) {
            document.getElementById('side-height').innerHTML = `Height: ${this.height}`;
        } else { document.getElementById('side-height').innerHTML = "" };
        if (this.side) {
            document.getElementById('side-side').innerHTML = `Side Length: ${this.side}`;
        } else { document.getElementById('side-side').innerHTML = "" };
        if (this.radius) {
            document.getElementById('side-radius').innerHTML = `Radius: ${this.radius}`;
        } else { document.getElementById('side-radius').innerHTML = "" };
        if (this.area) {
            document.getElementById('side-area').innerHTML = `Area: ${this.area}`;
        } else { document.getElementById('side-area').innerHTML = "" };
        if (this.perimeter) {
            document.getElementById('side-perimeter').innerHTML = `Perimeter: ${this.perimeter}`;
        } else { document.getElementById('side-perimeter').innerHTML = "" };
        if (this.perimeter && this.radius) {
            document.getElementById('side-perimeter').innerHTML = `Circumference: ${this.perimeter}`;
        };
    };


};
class Rectangle extends Shape { // green
    constructor(color, name, length, width, area, perimeter) {
        super(color, name, area, perimeter)
        this.name = name;
        this.width = width;
        this.length = length;
        this.area = (length * width);
        this.perimeter = (length * 2 + width * 2);
        this.div.id = 'rectangle';
        // randomly places the shape within the container when it is created
        this.div.style.position = 'absolute';
        this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
        this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
        this.div.style.width = `${this.length}px`;
        this.div.style.height = `${this.width}px`;
        // randomly places the shape within the container when it is created
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            shapeContainer.removeChild(this.div)
        });
        shapeContainer.appendChild(this.div);
    };
};
class Square extends Shape { // red
    constructor(color, name, side, area, perimeter) {
        super(color, name, area, perimeter)
        this.name = name;
        this.side = side;
        this.area = (side * side);
        this.perimeter = (side * 4);
        this.div.id = 'square';
        this.div.style.height = `${this.side}px`;
        this.div.style.width = `${this.side}px`;
        // randomly places the shape within the container when it is created
        this.div.style.position = "absolute";
        this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
        this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
        // randomly places the shape within the container when it is created
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            shapeContainer.removeChild(this.div)
        });
        shapeContainer.appendChild(this.div);

    };
};
class Circle extends Shape { // purple
    constructor(color, name, radius, width, area, perimeter) {
        super(color, name, width, area, perimeter)
        this.name = name;
        this.radius = radius;
        this.width = (radius * 2);
        this.area = Math.round(radius ** 2 * 3.14159);
        this.perimeter = Math.round(2 * radius * 3.14159);
        this.div.id = 'circle';
        this.div.style.height = `${this.radius}px`;
        this.div.style.width = `${this.radius}px`;
        this.div.style.borderRadius = `${this.radius}px`;
        // randomly places the shape within the container when it is created
        this.div.style.position = "absolute";
        this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
        this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
        // calls the description ofa shape once clicked on & removes shape once it is double clicked

        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            shapeContainer.removeChild(this.div)
        });
        shapeContainer.appendChild(this.div);
    };
};
class Triangle extends Shape { // yellow
    constructor(color, name, height, area, perimeter) {
        super(color, name, area, perimeter)
        this.name = name;
        this.height = height;
        this.area = (height * height / 2);
        this.perimeter = Math.round(2 * height + Math.sqrt(2) * height);
        this.div.id = 'triangle';
        this.color = color;
        this.div.style.position = "absolute";
        // randomly places the shape within the container when it is created
        this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
        this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderTop = `${this.height * .6}px solid transparent`;
        this.div.style.borderBottom = `${this.height * .6}px solid transparent`;
        this.div.style.borderLeft = `${this.height}px solid ${this.color}`;
        this.div.style.backgroundColor = "transparent";
        this.div.style.opacity = ".5";
        // calls the description ofa shape once clicked on & removes shape once it is double clicked
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            shapeContainer.removeChild(this.div)
        });
        shapeContainer.appendChild(this.div);
    };

};

// Creates new shape on button click with a radnom generated color

let recBtn = document.getElementById('rectangle-btn');
recBtn.addEventListener('click', () => {
    let color = getRandomColor();
    new Rectangle(color, "Rectangle", `${document.getElementById('rectangle-length-text-field').value}`, `${document.getElementById('rectangle-width-text-field').value}`);
});

let sqBtn = document.getElementById('square-btn');
sqBtn.addEventListener('click', () => {
    let color = getRandomColor();
    let side = `${document.getElementById('square-length-text-field').value}`;
    new Square(color, "Square", side);
});

let circBtn = document.getElementById('circle-btn');
circBtn.addEventListener('click', () => {
    let color = getRandomColor();
    let radius = `${document.getElementById('circle-radius-text-field').value}`;
    new Circle(color, "Circle", radius);
});

let triBtn = document.getElementById('triangle-btn');
triBtn.addEventListener('click', () => {
    let color = getRandomColor();
    let height = `${document.getElementById('triangle-height-text-field').value}`;
    new Triangle(color, "Triangle", height);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};