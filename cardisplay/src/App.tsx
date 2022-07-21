import React, { FunctionComponent, useState } from 'react';
import  Car from './models/car';
import mockCar from "./models/mock-car";
import './App.css';

const App: FunctionComponent = () =>{
    const [cars] = useState<Car[]>(mockCar);
    return(
        <React.Fragment>
            <h1>Car display</h1>
            <p>We've {cars.length} cars to display</p>
        </React.Fragment>
    )
}
export default App;
