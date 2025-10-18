import React from 'react'
import SkillTile from './SkillTile'


const SkillList = () => {
  return (
    // 1. `flex`: Turns this div into a flex container.
    // 2. `justify-center`: Centers the tiles horizontally.
    // 3. `gap-8`: Adds space between each tile.
    // 4. `flex-wrap`: Allows tiles to wrap onto the next line on small screens.
    <div className="flex justify-center gap-8 flex-wrap">
      <SkillTile imageUrl="/assets/logos-skill/figma.svg" name="Figma" description="UI/UX Design" />
      <SkillTile imageUrl="/assets/logos-skill/python-logo-only.svg" name="Python" description="Data Science" />
      <SkillTile imageUrl="/assets/logos-skill/tailwind-logo.svg" name="Tailwind CSS" description="Web Development" />
    </div>
  );
};

export default SkillList;