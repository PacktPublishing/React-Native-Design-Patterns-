const withNewData = Component => props => <Component {...props} data={'Hi'}/>;
const withData = Component => props => <Component {...props} data={'Hello'}/>;

withNewData(withData(BaseComponent))