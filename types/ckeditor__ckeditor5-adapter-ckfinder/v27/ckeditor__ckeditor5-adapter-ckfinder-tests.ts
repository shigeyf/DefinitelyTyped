import CKFinderUploadAdapter, { UploadAdapter } from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import * as utils from "@ckeditor/ckeditor5-adapter-ckfinder/src/utils";
import { Editor, Plugin } from "@ckeditor/ckeditor5-core";

class MyEditor extends Editor {}

if (!(CKFinderUploadAdapter instanceof Plugin)) {
    throw new Error("UploadAdapter must extend Plugin");
}
CKFinderUploadAdapter.requires.forEach(Plugin => new Plugin(new MyEditor()));
new CKFinderUploadAdapter(new MyEditor()).init();

// $ExpectType string | null
utils.getCookie("");
// $ExpectType string
utils.getCsrfToken();

utils.setCookie("foo", "bar");

// $ExpectError
utils.setCookie("foo", 5);
// $ExpectType string
utils.getCsrfToken();
// $ExpectError
utils.getCookie(null);

class Foo extends UploadAdapter {
    method() {
        // $ExpectType XMLHttpRequest | undefined
        this.xhr;
    }
}
