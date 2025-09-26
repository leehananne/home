import React from 'react'

interface LabelProps {
    label: string;
}

const Subheading = ({label}: LabelProps) => {
  return (
    <div className="self-stretch justify-start text-sm font-bold leading-none">{label}</div>
  )
}

export default Subheading