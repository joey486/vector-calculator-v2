export function calculateVectorOperation(operation, vector1, vector2, is3D) {
    let vector1x = parseFloat(vector1.x);
    let vector1y = parseFloat(vector1.y);
    let vector2x = parseFloat(vector2.x);
    let vector2y = parseFloat(vector2.y);

    let vector1z = is3D ? parseFloat(vector1.z) : 0;
    let vector2z = is3D ? parseFloat(vector2.z) : 0;

    let res = '';
    switch (operation) {
        case 'sum':
            res = `Sum: (${vector1x + vector2x}, ${vector1y + vector2y}, ${vector1z + vector2z})`;
            break;
        case 'subtract':
            res = `Subtraction: (${vector1x - vector2x}, ${vector1y - vector2y}, ${vector1z - vector2z})`;
            break;
        case 'dot':
            res = `Dot Product: ${vector1x * vector2x + vector1y * vector2y + vector1z * vector2z}`;
            break;
        case 'cross':
            if (!is3D) {
                res = 'Cross product is only defined in 3D!';
            } else {
                let crossX = vector1y * vector2z - vector1z * vector2y;
                let crossY = vector1z * vector2x - vector1x * vector2z;
                let crossZ = vector1x * vector2y - vector1y * vector2x;
                res = `Cross Product: (${crossX}, ${crossY}, ${crossZ})`;
            }
            break;
        case 'angle': {
            let dotProduct = (vector1x * vector2x) + (vector1y * vector2y) + (vector1z * vector2z);
            let magnitude1 = Math.sqrt((vector1x ** 2) + (vector1y ** 2) + (vector1z ** 2));
            let magnitude2 = Math.sqrt((vector2x ** 2) + (vector2y ** 2) + (vector2z ** 2));
            let angleInRadians = Math.acos(dotProduct / (magnitude1 * magnitude2));
            let angleInDegrees = (angleInRadians * 180) / Math.PI;
            if(isNaN(angleInDegrees)) {
                res = 'Cannot compute angle (possibly a zero-length vector).';
            } else {
                res = `Angle between vectors: ${angleInDegrees.toFixed(2)} degrees`;
            }
            break;
        }
        default:
            res = 'Invalid operation';
    }
    return res;
}