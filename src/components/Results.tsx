interface  ResultProps {
  result: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = ({ result }: ResultProps) => {
  const { country, cityName, temperature, conditionText, icon } = result;
  return (
    <div>
      <h2>気象データ</h2>
    </div>
  );
};

export default Results;