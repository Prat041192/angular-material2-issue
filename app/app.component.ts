import {
  Component, ElementRef
} from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;
  listRecords:any = [
    {name:'foo'},
    {name:'boo'},
    {name:'hoo'}
  ];
  columnList: any = [
    'name', 'action'
  ]

// for test remove the last one
  onDel = (row) => {
    this.listRecords.pop();
  }

// for test add one with name new
  onAdd = () => {
    this.listRecords.push({name:'new'});
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */