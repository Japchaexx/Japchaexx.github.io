import { useState } from 'react';

const Home = () => {

    //useState rerenders the component when the state changes
    const [name, setName] = useState('Konrad');
    const [age, setAge] = useState('74');

    const handleClick = () =>{
        setName('Mona');
        setAge('20 (almost 21)');
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;