import logo from "./logo.svg";
import React, {useState, useEffect} from 'react';
import "./App.css";





function App() {


  const count = 36
  const step = (2*Math.PI) / count;
  var radius = 200;
  const width = 500;
  const height = 500;
  var angle =10.8;


  const [nodes, setNodes] = useState([])
  const [index, setIndex] = useState(0)
  const [speed, setSpeed] = useState(5)



useEffect(() => {
  for (let i = 0; i <= count; i++) {
    var x = Math.round(width/2 + radius * Math.cos(angle));
    var y = Math.round(height/2 + radius * Math.sin(angle));
    nodes.push({"key":i, "x":x+"px", "y":y+"px", "color":"white", angle:angle})
    angle += step;
  
  }
}, [])

  useEffect(() => {
    // const timer = setTimeout(() => {
    //   setIndex(index+1)
    // }, 1000);

    console.log(nodes)
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.


      let newArr = [...nodes]
      newArr[index].color = "white"

      if (index == count) {
        
        newArr[0].color = "red"
        setIndex(0)
      } else {

        newArr[index+1].color = "red"
        setIndex(index+1)
      }

      

      setNodes(newArr)




    },speed)
  
    return () => clearInterval(intervalId); //This is important

  });



  //Find index of specific object using findIndex method.    



  return (
    <div>
{/* <p style={{color:"red"}}> {index}</p> */}

      <ul className={"center"}>
       
      {nodes.map((item) => {
        return (<li key={item.key} style={{left:item.x, top:item.y, backgroundColor:item.color}} > {item.key}</li>)
      })}
      </ul>
    </div>
  );
}

export default App;