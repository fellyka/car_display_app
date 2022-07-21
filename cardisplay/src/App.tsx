import React, { FunctionComponent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: FunctionComponent = () =>{
    const [name,setName] = useState<string>('React JS')
    return(
        <h1>Hello, {name} !</h1>
    )
}
export default App;
