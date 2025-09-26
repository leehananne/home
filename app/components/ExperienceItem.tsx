import React from 'react'

interface ExperienceProps {
    role: string;
    type: string;
    company: string;
    dates: string;
    imageUrl: string;
}

const ExperienceItem = ({role, type, company, dates, imageUrl}: ExperienceProps) => {
  return (
    <div>ExperienceItem</div>
  )
}

export default ExperienceItem