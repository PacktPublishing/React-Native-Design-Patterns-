// render props as function 
const dataToDisplay = "the data"; 

const ComponentDataProvider = ({ render }) => (
  <View>
    { render(dataToDisplay) }
  </View>
)

const ComponentToProvideRender = () => (
  <ComponentDataProvider render={ (data) => <Text>the data is {data}</Text> } />
);

// render props as child  
const dataToDisplay = "the data"; 

const ComponentDataProvider = () => (
  <View>
    <Text>
      { dataToDisplay ?  dataToDisplay : 'No Data' }
    </Text>
  </View>
)

const ComponentToProvideRender = () => (
  <ComponentDataProvider />
);

// would then just be called as 
<ComponentToProvideRender />
