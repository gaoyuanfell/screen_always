import { Injectable } from "@angular/core";
import { IonicNativePlugin, cordova } from "@ionic-native/core";

@Injectable()
export class Keepscreenon extends IonicNativePlugin {
  constructor() {
    super();
  }

  static pluginName = "CapacitorKeepScreenOn";
  static plugin = "capacitor-keep-screen-on";
  static pluginRef = "plugins.CapacitorKeepScreenOn";
  static platforms = ["Android", "iOS"];

  enable() {
    return cordova(this, "enable", {}, arguments);
  }

  disable() {
    return cordova(this, "disable", {}, arguments);
  }

  getState() {
    return cordova(this, "getState", {}, arguments);
  }
}
