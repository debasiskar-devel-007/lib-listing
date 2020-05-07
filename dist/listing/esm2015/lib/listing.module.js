/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent, Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent } from './listing.component';
import { DemoMaterialModule } from './materialmodules';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MomentModule } from 'ngx-moment';
import { RouterModule } from "@angular/router";
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ShowformComponent } from './showform/showform.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatFileUploadModule } from 'angular-material-fileupload';
export class ListingModule {
}
ListingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent],
                imports: [
                    CommonModule,
                    BrowserModule, BrowserAnimationsModule,
                    DemoMaterialModule,
                    FormsModule, ReactiveFormsModule,
                    RouterModule,
                    MomentModule, CKEditorModule, MatFileUploadModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ListingComponent, ShowformComponent
                ],
                providers: [ApiService],
                entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDeEgsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sc0NBQXNDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDMUMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFxQmxFLE1BQU0sT0FBTyxhQUFhOzs7WUFsQnpCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLHNCQUFzQixFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsaUJBQWlCLENBQUM7Z0JBQzNJLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLGFBQWEsRUFBRSx1QkFBdUI7b0JBQ3RDLGtCQUFrQjtvQkFDbEIsV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsWUFBWTtvQkFDWixZQUFZLEVBQUMsY0FBYyxFQUFDLG1CQUFtQjtpQkFHbEQ7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFDLGlCQUFpQjtpQkFDM0M7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN2QixlQUFlLEVBQUMsQ0FBQyxhQUFhLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsaUJBQWlCLENBQUM7YUFDdEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0LFZpZGVvUGxheWVyLEltYWdlVmlldyxTbmFja2JhckNvbXBvbmVudH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbG1vZHVsZXMnO1xuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnbmd4LW1vbWVudCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtZb3V0dWJlcGxheWVyQ29tcG9uZW50fSBmcm9tICcuL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hvd2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3Nob3dmb3JtL3Nob3dmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25nMi1ja2VkaXRvcic7XG5pbXBvcnQgeyBNYXRGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1tYXRlcmlhbC1maWxldXBsb2FkJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsQ29uZmlybWRpYWxvZyxCb3R0b21TaGVldCxZb3V0dWJlcGxheWVyQ29tcG9uZW50LFZpZGVvUGxheWVyLEltYWdlVmlldyxTbmFja2JhckNvbXBvbmVudCxTaG93Zm9ybUNvbXBvbmVudF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1vbWVudE1vZHVsZSxDS0VkaXRvck1vZHVsZSxNYXRGaWxlVXBsb2FkTW9kdWxlXG4gICAgICAgIFxuXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgICBleHBvcnRzOiBbTGlzdGluZ0NvbXBvbmVudCxTaG93Zm9ybUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXG4gICAgZW50cnlDb21wb25lbnRzOltDb25maXJtZGlhbG9nLEJvdHRvbVNoZWV0LFZpZGVvUGxheWVyLEltYWdlVmlldyxTbmFja2JhckNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdNb2R1bGUge1xufVxuIl19