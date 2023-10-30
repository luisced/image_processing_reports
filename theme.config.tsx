import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>Procesamiento de Imágenes</span>,
	project: {
		link: "https://github.com/luisced/image_processing_reports",
	},
	docsRepositoryBase: "https://github.com/luisced/image_processing_reports",
	footer: {
		text: "MIT 2023 © Procesamiento de Imágenes",
	},
	sidebar: {
		toggleButton: true,
	},
	navigation: {
		prev: true,
		next: true,
	},
};

export default config;
