'use client'
import { useState } from 'react';
import TagButton from './TagButton';  

interface FiltersProps {
  allTags: string[];
}

const Filters = ({ allTags }: FiltersProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="flex gap-2">
      {allTags.map((tag) => (
        <TagButton
          key={tag}
          name={tag}
          isActive={selectedTags.includes(tag)}
          onClick={() => handleTagClick(tag)}
        />
      ))}
    </div>
  );
};

export default Filters;