class ClassSideEffect extends Component {
  componentDidMount() {
    // subscripe to api
    // add listener for something
  }
  componentWillUnmount() {
    // unsubscribe to api
    // remove listener for something
  }
}
const FunctionalSideEffect = () => {
  useEffect(() => {
    // subscripe to api
    // unsubscribe from api
  });
  useEffect(() => {
    // add listener for something
    // remove listener for something
  });
}