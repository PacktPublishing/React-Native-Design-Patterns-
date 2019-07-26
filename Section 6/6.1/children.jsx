const arrayOfChildren =  React.Children.map(this.props.children, child => InvokeFunction(child));

componentDidMount() {
  React.Children.forEach(this.props.children, child => {
    // if child meets criteria modify
  })
}