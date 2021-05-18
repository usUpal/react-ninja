const Home = () => {
    const clickHandler = (name) => {
        console.log(`hello ${name}`)
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button>Click me</button>
            <button onClick = {
                () => clickHandler('upal') //! inmoke as a annonymous function
                
            }>Invoke my name</button> 
        </div>
     );
}
 
export default Home;