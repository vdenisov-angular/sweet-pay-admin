import { Component, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ManagerModalComponent } from '../modal/modal.component';
import { ActionState } from 'src/app/@shared/components/base-modal/base-modal.component';
import { NbDialogService } from '@nebular/theme';

@Component({
  templateUrl: './render-btn.component.html' ,
  styleUrls: []
})
export class ManagerRenderButtonComponent implements ViewCell {
  public status: string;

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(
    private dialog: NbDialogService
  ) {}

  public openModalAbout() {
    this.dialog.open(ManagerModalComponent, { context: { action: ActionState.Details, source: this.rowData } });
  }

}
