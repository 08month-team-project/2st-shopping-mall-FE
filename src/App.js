import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/ConfigStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Signup from "./pages/Signup";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <Provider store={store}>
    //     <GlobalStyle />
    <Router />
    //   {/* </Provider>
    //   <ReactQueryDevtools initialIsOpen={true} />
    // </QueryClientProvider> */}
  );
}

export default App;
