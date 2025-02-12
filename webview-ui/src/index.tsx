import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "../../node_modules/@vscode/codicons/dist/codicon.css"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"

posthog.init(process.env.POSTHOG_PROJECT_API_KEY || "", {
	api_host: process.env.POSTHOG_INSTANCE_ADDRESS || "",
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
	<React.StrictMode>
		<PostHogProvider client={posthog}>
			<App />
		</PostHogProvider>
	</React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
