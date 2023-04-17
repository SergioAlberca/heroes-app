export interface Heroe {
  id: number;
  name: string;
  gender: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}
