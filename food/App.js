import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  { Search: SearchScreen, ResultsShow: ResultsShowScreen },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

const CLIENT_ID = "bAuTDnGXLPc4bGQjcRiy8Q";
const API_KEY =
  "TS1PFrM2EkDwnaqglq_MNQX-VncuplnpfQKM0My2A6Djo5VbzsMgKzbbZC4Ai-y985OxuLZeNE5s5Vs8MgdLR5zjgkcXmcIZlxQ4S6526bSkQZPZ0JFGQoDkugZNZnYx";

export default createAppContainer(navigator);
