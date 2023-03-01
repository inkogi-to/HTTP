import ErrorImg from '../../error.jpeg';
export const PokemonErrorView = ({ message }) => {
  return (
    <div>
      <img src={ErrorImg} alt="Error" width={200} />
      <p>{message}</p>
    </div>
  );
};
