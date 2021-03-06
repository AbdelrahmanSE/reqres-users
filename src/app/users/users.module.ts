import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { UsersHeaderComponent } from './users-header/users-header.component';
import { UsersService } from './users.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        ListComponent,
        SingleComponent,
        AddComponent,
        EditComponent,
        DeleteComponent,
        UsersHeaderComponent
    ],
    exports: [
        ListComponent,
        SingleComponent,
        AddComponent,
        EditComponent,
        DeleteComponent
    ],
    providers: [UsersService]
})
export class UsersModule {}
