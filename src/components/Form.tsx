interface FormProps {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void,
}

const Form = ({ setCity, getWeather }: FormProps) => {
  return (
    <form onSubmit={ (getWeather) }>
      <input 
      type="text" 
      name="city" 
      placeholder="都市名" 
      onChange={ e => setCity(e.target.value) }/>
      <button type="submit">Get Whether</button>
    </form>
  );
};

export default Form;
