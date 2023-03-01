import { PokemonDataView } from 'components/PokemonDataView/PokemonDataView';
import Spiner from '../../loading.gif';
import pendingImage from '../../pending.png';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };
  return (
    <div>
      <div>
        <img src={Spiner} alt="spiner" />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
