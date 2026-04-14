import { useState, createElement as e, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return e(
		Fragment,
		null,
		e(
			"section",
			{ id: "center" },
			e(
				"div",
				{ className: "hero" },
				e("img", {
					src: heroImg,
					className: "base",
					width: "170",
					height: "179",
					alt: "",
				}),
				e("img", { src: reactLogo, className: "framework", alt: "React logo" }),
				e("img", { src: viteLogo, className: "vite", alt: "Vite logo" }),
			),
			e(
				"div",
				null,
				e("h1", null, "Get started"),
				e(
					"p",
					null,
					"Edit ",
					e("code", null, "src/App.jsx"),
					" and save to test ",
					e("code", null, "HMR"),
				),
			),
			e(
				"button",
				{
					className: "counter",
					onClick: () => setCount((c) => c + 1),
				},
				`Count is ${count}`,
			),
		),

		e("div", { className: "ticks" }),

		e(
			"section",
			{ id: "next-steps" },
			e(
				"div",
				{ id: "docs" },
				e(
					"svg",
					{ className: "icon", role: "presentation", "aria-hidden": "true" },
					e("use", { href: "/icons.svg#documentation-icon" }),
				),
				e("h2", null, "Documentation"),
				e("p", null, "Your questions, answered"),
				e(
					"ul",
					null,
					e(
						"li",
						null,
						e(
							"a",
							{ href: "https://vite.dev/", target: "_blank" },
							e("img", { className: "logo", src: viteLogo, alt: "" }),
							" Explore Vite",
						),
					),
					e(
						"li",
						null,
						e(
							"a",
							{ href: "https://react.dev/", target: "_blank" },
							e("img", { className: "button-icon", src: reactLogo, alt: "" }),
							" Learn more",
						),
					),
				),
			),
			e(
				"div",
				{ id: "social" },
				e(
					"svg",
					{ className: "icon", role: "presentation", "aria-hidden": "true" },
					e("use", { href: "/icons.svg#social-icon" }),
				),
				e("h2", null, "Connect with us"),
				e("p", null, "Join the Vite community"),
				e(
					"ul",
					null,
					e(
						"li",
						null,
						e(
							"a",
							{ href: "https://github.com/vitejs/vite", target: "_blank" },
							e(
								"svg",
								{
									className: "button-icon",
									role: "presentation",
									"aria-hidden": "true",
								},
								e("use", { href: "/icons.svg#github-icon" }),
							),
							" GitHub",
						),
					),
					e(
						"li",
						null,
						e(
							"a",
							{ href: "https://chat.vite.dev/", target: "_blank" },
							e(
								"svg",
								{
									className: "button-icon",
									role: "presentation",
									"aria-hidden": "true",
								},
								e("use", { href: "/icons.svg#discord-icon" }),
							),
							" Discord",
						),
					),
					e(
						"li",
						null,
						e(
							"a",
							{ href: "https://x.com/vite_js", target: "_blank" },
							e(
								"svg",
								{
									className: "button-icon",
									role: "presentation",
									"aria-hidden": "true",
								},
								e("use", { href: "/icons.svg#x-icon" }),
							),
							" X.com",
						),
					),
					e(
						"li",
						null,
						e(
							"a",
							{ href: "https://bsky.app/profile/vite.dev", target: "_blank" },
							e(
								"svg",
								{
									className: "button-icon",
									role: "presentation",
									"aria-hidden": "true",
								},
								e("use", { href: "/icons.svg#bluesky-icon" }),
							),
							" Bluesky",
						),
					),
				),
			),
		),

		e("div", { className: "ticks" }),
		e("section", { id: "spacer" }),
	);
}

export default App;
