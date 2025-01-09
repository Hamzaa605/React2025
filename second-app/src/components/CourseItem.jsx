import React from 'react'

function CourseItem({id,name,fees}) {
  return (
    <div>
        <p>Course id is={id}</p>
        <p>Course name ={name}</p>
        <p>Course fees={fees}</p>
    </div>
  )
}

export default CourseItem