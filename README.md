# Vector Calculator

An interactive web application for performing vector calculations and visualizations in 2D and 3D space.

## Features

- **Vector Operations:**
  - Addition (Sum)
  - Subtraction
  - Dot Product
  - Cross Product (3D only)
  - Angle between vectors

- **Dynamic Visualization:**
  - Real-time vector rendering
  - Auto-scaling visualization
  - Support for both 2D and 3D vectors
  - Interactive canvas with axis labels

- **User Interface:**
  - Clean, intuitive input form
  - Toggle between 2D and 3D modes
  - Clear button to reset inputs
  - Visual feedback with cursor effects
  - Responsive design

## Installation

1. Clone the repository:
```sh
git clone [<repository-url>](https://github.com/joey486/vector-calculator-v2.git)
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## Usage

1. Enter the components for Vector 1 and Vector 2 using the input fields
2. Toggle between 2D and 3D modes using the "Switch to 2D/3D" button
3. Select an operation (Sum, Subtract, Dot Product, etc.)
4. View the result and the visual representation of the vectors
5. Use the "Draw" button to update the visualization
6. Clear all inputs using the "Clear" button

## Technologies Used

- React.js
- HTML Canvas for vector visualization
- CSS for styling and animations
- JavaScript for vector calculations

## Development

The project structure is organized as follows:

- `src/components/` - React components
- `src/utils/` - Vector math calculations
- `src/App.js` - Main application component
- `src/index.js` - Application entry point

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).