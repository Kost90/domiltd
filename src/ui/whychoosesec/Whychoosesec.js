import React from 'react'
import {why_choose_sec} from './Whychoose.module.css'
import Sideblock from './sideblock/Sideblock'
import Contentblock from './contentblock/Contentblock'

function Whychoosesec() {
  return (
    <div className={why_choose_sec}>
        <Sideblock/>
        <Contentblock/>
    </div>
  )
}

export default Whychoosesec