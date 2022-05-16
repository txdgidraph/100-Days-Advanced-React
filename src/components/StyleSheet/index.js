import "../../myStyles.css";
const StyleSheet = (props) => {
  let colorStyle = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={colorStyle}>Using CSS StyleSheets</h1>
      <br />
      <p className={`${colorStyle} font-xl`}>I am a paragraph</p>
    </div>
  );
};
export default StyleSheet;
