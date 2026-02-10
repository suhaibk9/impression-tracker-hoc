// const ImpressionTracker = (ChildComponent) => {
//   return (props) => {
// const handleUserClick = () => {
//   console.log(console.log("User Click - " + ChildComponent.name));
// };
// const handleMouseEnter = () => {
//   console.log(console.log("Mouse Enter - " + ChildComponent.name));
// };
// const handleMouseLeave = () => {
//   console.log("Mouse Left - " + ChildComponent.name);
// };
//     return (
//       <div
//         onMouseLeave={handleMouseLeave}
//         onClick={handleUserClick}
//         onMouseEnter={handleMouseEnter}
//       >
//         <ChildComponent {...props} />
//       </div>
//     );
//   };
// };
const MouseLeaveTracker = ({ children }) => {
  const handleMouseLeave = () => {
    console.log("Mouse Left - " + ChildComponent.name);
  };
  return <div onMouseLeave={handleMouseLeave}>{children}</div>;
};
const MouseEnterTracker = ({ children }) => {
  const handleMouseEnter = () => {
    console.log(console.log("Mouse Enter - " + children.name));
  };
  return <div onMouseEnter={handleMouseEnter}>{children}</div>;
};
const ClickTracker = ({ children }) => {
  const handleUserClick = () => {
    console.log("User Click - " + children.name);
  };
  return <div onClick={handleUserClick}>{children}</div>;
};
const SimpleComponent = ({ text }) => {
  return <button>{text}</button>;
};
const App = () => {
  return (
    <MouseLeaveTracker>
      <MouseEnterTracker>
        <ClickTracker>
          <SimpleComponent text="Buy Now" />
        </ClickTracker>
      </MouseEnterTracker>
    </MouseLeaveTracker>
  );
};
export default App;
