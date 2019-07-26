export default class Comp extends Component {
  state = {  
    intialValue: true
  }

  componentDidMount() {
    // set initital value based on fetch
  }
  
  componentWillMount() {
  // set initital value based on state
  }

  componentWillUnmount() {
   // set initital value back to true
  }

  componentDidUpdate = (prevProps, prevState) => {
    // set initital value based on prevProps, prevState
  };
  
  componentWillReceiveProps(nextProps) {
    // set initital value based on nextProps
  }

  render() {
    return (
      <View>
        {this.state.intialValue}
      </View>
    )
  }
}