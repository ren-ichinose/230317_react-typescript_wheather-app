interface FormProps {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  getWeather: (e: any) => void,
}

const Form = ({ setCity, getWeather }: FormProps) => {
  return (
    <form>
      <input 
      type="text" 
      name="city" 
      placeholder="都市名" 
      onChange={ e => setCity(e.target.value) }/>
      <button type="submit" onClick={ getWeather }>Get Whether</button>
    </form>
  );
};

export default Form;
