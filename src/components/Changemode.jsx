import React,{useState} from 'react'
import AnimatedCursor from "react-animated-cursor";

export default function Changemode() {
  const [modes, setModes] = useState('dark')
  let mode = (e) => {
    e.preventDefault()
    if (document.body.classList.contains('light')) {
      document.body.classList.remove("yellowgreen");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      document.getElementsByClassName('inner_mode')[0].classList.remove('yellowgreen')
      document.getElementsByClassName('inner_mode')[0].classList.add('yellow')
      
setModes('dark')

    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("yellowgreen");
      document.body.classList.add("light");
      document.getElementsByClassName('inner_mode')[0].classList.add('yellowgreen')
      document.getElementsByClassName('inner_mode')[0].classList.remove('yellow')
      setModes('light')

    }

  }
console.log(modes)
  if (modes ==='dark') {
    return (
      <>
       <AnimatedCursor
        innerSize={5}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1}
      />
      <div className="demo-sticker">
        
        <p onClick={mode} href="#">
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        </p>
      </div>
      </>

    )
  } else {
    return (
      <>
      <AnimatedCursor
       innerSize={5}
       outerSize={44}
       color="154, 205, 50"
       
       outerAlpha={0.3}
       innerScale={0.7}
       outerScale={1}
     />
      <div className="demo-sticker text-light" style={{ backgroundColor:'yellowgreen' }}>
      <p onClick={mode} href="#">

          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </p>
      </div>
</>
    )
  }



}
