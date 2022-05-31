import "./App.css";
import React,{ useState ,useEffect} from "react";
import { CirclePicker } from "react-color";

//Cell Component
function Cell({
  id,background_color,presentcolor,changecellcolor
}){
const [hovercolor,setHovercolor]=useState('#FFFFFF');
const onClick=()=>{
  changecellcolor({id,newcolor:presentcolor});
}; 
const hoverIn=()=>{
    setHovercolor(presentcolor);
};
const hoverOut=()=>{
    setHovercolor("#FFFFFF");
    // setHovercolor(background_color);
};
return (
  <div className="cell"
  onClick={onClick}
  onMouseEnter={hoverIn}
  onMouseLeave={hoverOut}
  style={{
    // backgroundColor: `${hovercolor}`
    backgroundColor:`${ hovercolor === "#FFFFFF"? background_color : hovercolor}`,
  }}
  />);
}



//////Table Component
function Table({
  presentcolor,
  matrixstate,
  changecellcolor,
style}){
    
  return (
    <div className="grid-container" style={style}>
      {matrixstate.map((value,id) => (
        <Cell 
        key={id}
        id={id}
        background_color={value}
        presentcolor={presentcolor}
        changecellcolor={changecellcolor}
         />
        ))}
    </div>
  )
}


///Reset Component
function Reset({
  matrixstate,changecellcolor
}){
function resetmatrix(){
  matrixstate.map((ele,id)=>{
    changecellcolor({id,newcolor:"#FFFFFF"});
  });
};
  return (
    <div className="center">
    <button type="button" onClick={resetmatrix}>Reset</button>
    </div>
  )
}

///Main App Component
function App() {
  const num_rows=32,num_cols=32;
  const [matrixstate, setMatrixstate] = useState(() => {
    return Array.from({ length: num_rows * num_cols }, () => "#FFFFFF");
  });

  const [presentcolor,setPresentcolor]=useState("#FFFFFF");

  
  

  function changecellcolor({id,newcolor}){
    setMatrixstate((pr_state)=>{
      const new_state=[...pr_state];
      new_state[id]=newcolor;
      return new_state;
    })
  };

  function handleChangeComplete(pr_color){
    setPresentcolor(pr_color.hex);
    console.log(pr_color.hex);
  };
  
  
  return (
    <div className="App center">
        <div style={{margin:20}}>Pixel Editorr</div>
        <div className="center">
        <CirclePicker onChangeComplete={handleChangeComplete} /></div>
        <Table 
        presentcolor={presentcolor}
        matrixstate={matrixstate}
        changecellcolor={changecellcolor}
        style={{margin:20}}
        />
        <Reset 
        matrixstate={matrixstate}
        changecellcolor={changecellcolor}
        />
      
      

       
    </div>
  );
  
}
export default App;