export class List {
}

export class ListRowClickEvent extends Event {
  constructor(
    public entity: any,
    public isRowClicked: boolean,

    ) {
    super('ListDataEvent');
  }

}
