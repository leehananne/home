'use client'
import { useState } from 'react';
import TagButton from './TagButton';  

interface FiltersProps {
  allTags: string[];
  onTagsChange: (selectedTags: string[]) => void;
}

const Filters = ({ allTags, onTagsChange }: FiltersProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    let newSelectedTags;
    if (selectedTags.includes(tag)) {
      newSelectedTags = selectedTags.filter((t) => t !== tag);
    } else {
      newSelectedTags = [...selectedTags, tag];
    }
    setSelectedTags(newSelectedTags);
    onTagsChange(newSelectedTags);
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