const ImpressionTracker = (ChildComponent) => {
  return (props) => {
    const handleUserClick = () => {
      console.log(console.log("User Click - " + ChildComponent.name));
    };
    const handleMouseEnter = () => {
      console.log(console.log("Mouse Enter - " + ChildComponent.name));
    };
    const handleMouseLeave = () => {
      console.log("Mouse Left - " + ChildComponent.name);
    };
    return (
      <div
        onMouseLeave={handleMouseLeave}
        onClick={handleUserClick}
        onMouseEnter={handleMouseEnter}
      >
        <ChildComponent {...props} />
      </div>
    );
  };
};

const SimpleComponent = ({ text }) => {
  return <button>{text}</button>;
};
const App = () => {
  const WrappedComponent = ImpressionTracker(SimpleComponent);
  return <WrappedComponent text="Buy Now!"/>;
};
export default App;
