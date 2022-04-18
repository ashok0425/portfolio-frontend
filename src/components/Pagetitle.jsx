import React from 'react'
import parse from 'html-react-parser'

export default function Pagetitle(props) {
  return (
    <div>
         <div className="title-section text-center text-md-left">
                <h1>
                    {parse(props.data.heading)}
                </h1>
                <span className="title-bg">{props.data.subheading}</span>
              </div>
    </div>
  )
}
