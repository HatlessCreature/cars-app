export default function SingleCar({
    id,
    brand,
    model,
    year,
    maxSpeed,
    isAutomatic,
    engine,
    numberOfDoors,
}) {
    return (
        <li style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 2,
        }}
        >
            <div>Brand: {brand}</div>
            <div>Model: {model}</div>
            <div>Year: {year}</div>
            <div>Max Speed: {maxSpeed}</div>
            <div>Automatic: {isAutomatic ? 'Yes' : 'No'}  </div>
            <div>Engine: {engine}</div>
            <div>Number of doors: {numberOfDoors}</div>
        </li>
    );
}

