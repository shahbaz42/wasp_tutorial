const HelpPage = (props) => {
  const { name } = props.match.params;
  return (
    <div>
      <h1>Hello {name}! How can I help ?</h1>
    </div>
  );
};

export default HelpPage;