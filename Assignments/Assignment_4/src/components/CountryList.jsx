import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country, index) => (
        <CountryCard key={index} country={country} />
      ))}
    </div>
  );
};

export default CountryList;