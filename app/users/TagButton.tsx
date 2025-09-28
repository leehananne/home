'use client'
import React from 'react'

interface TagButtonProps {
    name: string;
    isActive: boolean;
    onClick: () => void;
  }
  
const TagButton = ({ name, isActive, onClick }: TagButtonProps) => {
    return (
      <button
        className={`btn ${isActive ? 'btn-active' : 'btn-ghost'}`}
        onClick={onClick}
      >
        {name}
      </button>
    );
  };
  
export default TagButton;