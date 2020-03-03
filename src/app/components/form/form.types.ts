import {SimpleChanges } from '@angular/core';

export class Form {
}

export class FormDataChange extends Event {
  constructor(
    public changes: SimpleChanges,
    public data: any,
    public opened: boolean,
    public estado: string,

    ) {
    super('FormDataChange');
  }

}

export enum estados {
  CLOSED = 'closed',
  VIEWFORM = 'viewform',
  EDITFORM = 'editform',
  SAVEFORM = 'saveform',
}
