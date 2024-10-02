// import store from "./redux/config/ConfigStore";
// import GlobalStyle from "./styles/GlobalStyle";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Provider } from "react-redux";
import Router from "./shared/Router";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });

function App() {
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <Provider> */}
      {/* <GlobalStyle /> */}
      <Router />
      {/* </Provider> */}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      {/* </QueryClientProvider> */}
    </>
  );
}

export default App;
