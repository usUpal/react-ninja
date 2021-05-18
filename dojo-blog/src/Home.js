import { useState } from 'react'
const Home = () => {
    
    const [name, setName] = useState('upal')
    const [age, setAge] = useState(24)
    const clickHandler = () => {
        setName('elon')
        setAge(50)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <p>{`${name} is ${age} years old`}</p>
            <button onClick = {
                () => clickHandler() 
            }>Change the Name</button> 
            

        </div>
     );
}
 
export default Home;