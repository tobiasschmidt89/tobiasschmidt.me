// Lume components test by https://github.com/oscarotero

import { Page } from "lume/core.ts";

/** This is the Component interface */
export interface Component {
  /** Name of the component (used to get it from templates) */
  name: string;

  /** The function that will be called to render the component */
  render: (props: Record<string, unknown>) => string;

  /** Optional CSS code needed to style the component (global, only inserted once) */
  css?: string;

  /** Optional JS code needed for the component interactivity (global, only inserted once) */
  js?: string;
}

/** This is the class to load all components */
export interface ComponentLoader {
  /** Autodiscover and load all components */
  loadComponents(): Promise<void>;

  /** Returns the assets needed for the loaded components (css & js code) */
  getAssets(): Page[];

  /** Get a component */
  getComponent(name: string): Component | undefined;
}
