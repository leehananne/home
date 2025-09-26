import React from 'react'

interface LabelProps {
    label: string;
}

const SectionLabel = ({label}: LabelProps) => {
  return (
    <div className="self-stretch justify-start text-white text-xl font-bold leading-normal">{label}</div>
  )
}

export default SectionLabel