import { Component, OnInit } from '@angular/core';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';


@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.css']
})
export class CkEditorComponent  {

  //public Editor = ClassicEditor;

  public Editor = DecoupledEditor;

    public onReady( editor ) {
      
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

}
