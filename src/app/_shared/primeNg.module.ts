import { NgModule } from '@angular/core';
import {PickListModule} from 'primeng/picklist';
import {DropdownModule} from 'primeng/dropdown';
import {ChipsModule} from 'primeng/chips';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {OrderListModule} from 'primeng/orderlist';
import {ToastModule} from 'primeng/toast';
import { MessageService } from "primeng/api"
import {FieldsetModule} from 'primeng/fieldset';
import {ToolbarModule} from 'primeng/toolbar';
import {InputMaskModule} from 'primeng/inputmask';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {TreeModule} from 'primeng/tree';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TooltipModule} from 'primeng/tooltip';
import {BadgeModule} from 'primeng/badge';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    PickListModule,
    DropdownModule,
    ChipsModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    OrderListModule,
    ToastModule,
    FieldsetModule,
    ToolbarModule,
    InputMaskModule,
    ProgressSpinnerModule,
    TreeModule,
    DialogModule,
    CalendarModule,
    SelectButtonModule,
    TooltipModule,
    BadgeModule,
    AccordionModule,
    TabViewModule,
    CardModule

  ],
  exports: [
    PickListModule,
    DropdownModule,
    ChipsModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    OrderListModule,
    ToastModule,
    FieldsetModule,
    ToolbarModule,
    InputMaskModule,
    ProgressSpinnerModule,
    TreeModule,
    DialogModule,
    CalendarModule,
    SelectButtonModule,
    TooltipModule,
    BadgeModule,
    AccordionModule,
    TabViewModule,
    CardModule

  ],
  providers: [ MessageService ]
})
export class PrimeNgModule { }
