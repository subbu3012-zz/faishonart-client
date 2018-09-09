import { Component, OnInit, ViewChild } from '@angular/core';
import { TASKLIST } from './design.model'


export class FileExtensionInfo {
    text: string;
    status: string;
}


@Component({
    selector: 'design',
    templateUrl: './design.component.html',
    styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
    @ViewChild('stepper') stepper: any;
    public taskList: any[] = TASKLIST;
    public isLoggedIn: boolean = true;
    public allowedExtensions = /\.(gif|jpg|jpeg|tiff|png)$/i;
    public uploadedProfilePicFile: File;
    public localDesignImageUrls: string[] = [];
    public localMoodImageUrls: string[] = [];
    constructor(
    ) { }

    ngOnInit() {
    }

    public fileChangeEvent(fileInput: any, imageUrlsArray: string[]) { // fileInput: Manually Upload File, pastedInput: Paste File
        let uploadedFiles = fileInput ? fileInput.target.files : null;
        uploadedFiles && this.convertImagesIntoLocalImageUrls(uploadedFiles, imageUrlsArray);
    }

    public convertImagesIntoLocalImageUrls(uploadedFiles: File[], imageUrlsArray: string[]) {
        Array.from(uploadedFiles).forEach(file => {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                imageUrlsArray.push(event.target.result);
            }
            if (this.allowedExtensions.exec(file.name)) {
                reader.readAsDataURL(file);
            }
        })
    }

    public fileValidation() {
        /**Maintain allowed Extensions separately */

    }

    public changeStepperLevelBy(levelChange: number) {
        if (levelChange == 0) {
            this.stepper.reset();
            this.resetVariables();
            return;
        }
        let nextLevel = levelChange > 0;
        for (let i = 0; i < Math.abs(levelChange); i++) {
            nextLevel ? this.stepper.next() : this.stepper.previous();
        }
    }

    public resetVariables(){
        this.localDesignImageUrls = [];
        this.localMoodImageUrls = [];
    }
}
