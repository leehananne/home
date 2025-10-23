// Import all images as modules for better deployment compatibility
import schrodersLogo from '../../public/assets/logos-organisations/schroders.svg';
import figmaLogo from '../../public/assets/logos-skill/figma.svg';
import pythonLogo from '../../public/assets/logos-skill/python-logo-only.svg';
import tailwindLogo from '../../public/assets/logos-skill/tailwind-logo.svg';
import nestAssuredHero from '../../public/assets/projects/nest_assured/hero.png';
import nestAssuredHeroWide from '../../public/assets/projects/nest_assured/hero_wide.png';
import helixHero from '../../public/assets/projects/helix/hero.png';
import goTouchGrassHero from '../../public/assets/projects/go-touch-grass/hero.png';

export const images = {
  logos: {
    schroders: schrodersLogo,
    figma: figmaLogo,
    python: pythonLogo,
    tailwind: tailwindLogo,
  },
  projects: {
    nestAssured: nestAssuredHero,
    nestAssuredWide: nestAssuredHeroWide,
    helix: helixHero,
    goTouchGrass: goTouchGrassHero,
  }
};
