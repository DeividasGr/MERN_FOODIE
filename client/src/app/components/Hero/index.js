import { HeroContainer, HeroTitle, HeroSearch } from './styles';
import Button from '../Button';
import './index.css';

function Hero() {
  return (
    <section className="hero">
      <HeroContainer>
        <HeroTitle>Find a Recipe</HeroTitle>
        <HeroSearch type="text" placeholder="Find recipe" />
        <Button small color="hero" bigFont>
          Search
        </Button>
      </HeroContainer>
    </section>
  );
}

export default Hero;
