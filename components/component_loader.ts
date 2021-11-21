// Lume components test by https://github.com/oscarotero

import { Page, Site } from "lume/core.ts";
import { SitePage } from "lume/core/filesystem.ts";
import { Component, ComponentLoader } from "./types.ts";

export default class LumeComponents implements ComponentLoader {
  site: Site;
  directory: string;
  components: Map<string, Component> = new Map();
  css: Map<string, string> = new Map();
  js: Map<string, string> = new Map();

  constructor(site: Site, directory: string) {
    this.site = site;
    this.directory = directory;
  }

  async loadComponents() {
    this.css.clear();
    this.js.clear();

    for await (const entry of Deno.readDir(this.site.src(this.directory))) {
      if (entry.isFile) {
        const component = await this.#loadComponent(this.directory, entry.name);

        if (component) {
          this.components.set(component.name, component);
        }
      }
    }
  }

  getAssets(): Page[] {
    const assets: Page[] = [];

    if (this.css.size) {
      const page = new SitePage();
      page.dest.path = "/components";
      page.dest.ext = ".css";
      page.content = Array.from(this.css.values()).join("\n");
      assets.push(page);
    }

    if (this.js.size) {
      const page = new SitePage();
      page.dest.path = "/components";
      page.dest.ext = ".js";
      page.content = Array.from(this.js.values()).join("\n");
      assets.push(page);
    }

    return assets;
  }

  getComponent(name: string) {
    name = name.toLowerCase(); // case insensitive
    const component = this.components.get(name);

    if (!component) {
      return;
    }

    if (component.css && !this.css.has(name)) {
      this.css.set(name, component.css);
    }

    if (component.js && !this.js.has(name)) {
      this.js.set(name, component.js);
    }

    return component;
  }

  async #loadComponent(
    directory: string,
    filename: string,
  ): Promise<Component | undefined> {
    const file = this.site.src(directory, filename);
    const info = this.site.source.getPageLoader(file);

    if (info) {
      const [ext, loader] = info;
      const data = await this.site.source.readFile(file, loader);

      return {
        name: data.name ?? filename.slice(0, -ext.length).toLowerCase(),
        render: data.content,
        css: data.css,
        js: data.js,
      } as Component;
    }
  }
}
