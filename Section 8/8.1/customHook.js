 const useCustomHook = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const subscription = props.source.subscribe(state);
    return () => {
      subscription.unsubscribe(state);
    };
  });

  return state;
}
