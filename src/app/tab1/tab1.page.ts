import { Component } from "@angular/core";

import { CallNumber } from "@ionic-native/call-number/ngx";
import { Dialogs } from "@ionic-native/dialogs/ngx";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";
import { Keepscreenon } from "./keepscreenon";

import { Plugins } from "@capacitor/core";
const { CapacitorKeepScreenOn } = Plugins;

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
  providers: [CallNumber, Dialogs, SQLite, Keepscreenon],
})
export class Tab1Page {
  constructor(
    private callNumber: CallNumber,
    private dialogs: Dialogs,
    private sqlite: SQLite,
    private keepscreenon: Keepscreenon
  ) {
    console.info("------------------------------------------------------");
    console.info(CapacitorKeepScreenOn);
    console.info(CallNumber);
    console.info("------------------------------------------------------");
  }

  callNumberFun() {
    // this.callNumber.callNumber("15779353562", false);
  }

  openAlter() {
    this.dialogs.alert("Hello world!");
  }

  keepscreenonValue = false;

  keepscreenonChange(event) {
    if (event) {
      this.keepscreenon.enable();
    } else {
      this.keepscreenon.disable();
    }
  }
}
