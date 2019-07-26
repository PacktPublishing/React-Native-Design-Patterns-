
export const FancyButton = props => (
  <WithNavigationPath
    {...props}
    render={() => (
      <WithStyle
        {...props}
        render={text => <Text style={styles.label}>{text}</Text>}
      />
    )}
  />
);










// HOC compositon 
const button = props => (
    <View style={props.setStyle}>
      <Text style={styles.label}>{props.text}</Text>
    </View>
  );

export const FancyButton = withNavigationPath(withStyle(button));
