![React Logo Png - React Js Logo Svg, Transparent Png - vhv](https://www.vhv.rs/dpng/d/612-6126558_react-logo-png-react-js-logo-svg-transparent.png)

# react-ninja

```react
$ npx create-react-app dojo-blog
$ npm run start //open localhost:3000 server
$
```

```reac
import './App.css';

function App() {
  const syfy = 'The Expanse'
  const person = {name: "upal", age: 30}
  const ggl = "https://www.google.com"
  return (
    <div className="App">
      <div className="content">
        <h1>{"Blog"}</h1>
        <p>{`hi internet, my name is ${person.name}`}</p>
        <p>{`I'm currently watching ${syfy}`}</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{`random numbers: ${Math.round(Math.random()*6)}`}</p>
        <a href={ggl}>Google</a>
      </div>
    </div>
  );
}

export default App;
```

```react
```



