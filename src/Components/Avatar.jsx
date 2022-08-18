function Avatar(props) {
  const { src } = props;

  const style = {
    borderRadius: "25px"
  };

  return (
    <div style={{ borderRadius: "50px" }}>
      <img style={style} src={src} border="10px" />
    </div>
  );
}
export default Avatar;
