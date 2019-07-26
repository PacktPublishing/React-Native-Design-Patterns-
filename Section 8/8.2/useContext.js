const ColorContext = React.createContext("blue");

const ColorProvider = props => {
  
  const [color, toggleColor] = useState("blue");
  return (
    <ColorContext.Provider value={color}>
      <TouchableOpacity
        onPress={() => 
          toggleColor(prevColor => (prevColor === "blue" ? "green" : "blue"))}
      >
        <Text>Change Color</Text>
      </TouchableOpacity>
      {props.children}
    </ColorContext.Provider>
  );
};

const BackGroundComponent = props => {
  let value = useContext(ColorContext);
  return (
    <View  style={{ backgroundColor: value }}>
      {props.children}
    </View>
    );
}
const ImplementContextComponent = () => {
  const [count, setCount] = useState(0);
  let backgroundColor = useContext(ColorContext);
  return (
    <ColorProvider color={backgroundColor}>
      <BackGroundComponent>
        <Text style={{ color: 'white' }}>You pressed {count} times</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={{ color: 'white' }}>press me</Text>
        </TouchableOpacity>
      </BackGroundComponent>
    </ColorProvider>
  );
};