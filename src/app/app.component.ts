import { Component } from '@angular/core';
// import * as CustomCKEditor from 'src/app/CustomCKEditor/build/ckeditor';
import * as CustomCKEditor_Full from 'src/app/CustomCKEditor_Full/build/ckeditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CKEditor5-Angular';
  // public Editor = CustomCKEditor;
  public Editor = CustomCKEditor_Full;
  public ready = false;

  public htmlData: string = "";
  public Config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'fontFamily',
        'fontSize',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'subscript',
        'superscript',
        'specialCharacters',
        'horizontalLine',
        '|',
        'fontColor',
        'fontBackgroundColor',
        'highlight',
        '|',
        'removeFormat',
        '|',
        'undo',
        'redo',
        'findAndReplace',
        '|',
        '-',
        'bulletedList',
        'numberedList',
        'todoList',
        'alignment',
        '|',
        'outdent',
        'indent',
        '|',
        'blockQuote',
        'insertTable',
        'imageUpload',
        'imageInsert',
        'mediaEmbed',
        'CKFinder',
        'link',
        '|',
        'sourceEditing',
        'restrictedEditingException',
        'code',
        'codeBlock',
        '|',
        'textPartLanguage',
        'pageBreak',
      ],
      shouldNotGroupWhenFull: true
    },
    language: 'en',
  };

  constructor() { }

  public onReady(editor: any) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }
}
