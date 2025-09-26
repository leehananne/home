import React from 'react'

interface LabelProps {
    label: string;
}

const Heading = ({label}: LabelProps) => {
  return (
    <div className="self-stretch justify-start text-xl font-bold leading-normal">{label}</div>
  )
}

export default Heading