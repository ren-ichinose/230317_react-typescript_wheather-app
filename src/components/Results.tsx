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
      { country && <div>{ country }</div> }
      { cityName && <div>{ cityName }</div> }
      { temperature && <div>{ temperature }<span>℃</span></div> }
      { conditionText && <div><img src={icon} alt="icon"/> <span>{ conditionText }</span></div> }

    </div>
  );
};

export default Results;