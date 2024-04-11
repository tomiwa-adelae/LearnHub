import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<Provider store={store}>
					<SocketContextProvider>
						<App />
					</SocketContextProvider>
				</Provider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
