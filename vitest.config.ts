import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";
export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			globals: true,
			environment: "jsdom", //emular tiempos
			coverage: {
				thresholds: {
					statements: 50,
					branches: 50,
					functions: 50,
					lines: 50,
				},
				exclude: [
					"**/node_modules/**",
					"**/dist/**",
					"**/config/**",
					"vite.config.ts",
					"vitest.config.ts",
					"commitlint.config.cjs",
					"src/types",
					"src/index.ts",
					"src/**/index.ts",
				],
			},
		},
	}),
);
