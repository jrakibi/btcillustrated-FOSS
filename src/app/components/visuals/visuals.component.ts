import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { OpenaiService } from 'src/app/core/service/open-ai.service';
import { MatDialog } from '@angular/material/dialog';
import { Illustration } from 'src/app/models/visual.model';
import { IllustrationService } from 'src/app/services/illustration-service';
import { DataService } from 'src/app/services/data.service';
import { LnurlPayDialogComponent } from '../shared/lnurl-pay-dialog/lnurl-pay-dialog.component';
// import { LnurlPayDialogComponent } from 'src/app/features/illustration/lnurl-pay-dialog/lnurl-pay-dialog.component';
// import { IllustrationGptComponent } from '../illustration-gpt/illustration-gpt.component';
declare var $: any; // Import jQuery



@Component({
  selector: 'app-visuals',
  templateUrl: './visuals.component.html',
  styleUrls: ['./visuals.component.scss']
})
export class VisualsComponent {
  currentImageIndex: number = 0;
  showGPTInput = false;

  imageCollection: any[] = []
  illustrationThumbnails: any[] = []

  scrollImages(direction: 'left' | 'right') {
    const imageList = document.querySelector('.image-list');

    if (direction === 'left') {
      imageList?.scrollBy({ left: -100, behavior: 'smooth' }); // Change the number to control the scroll amount
    } else {
      imageList?.scrollBy({ left: 100, behavior: 'smooth' }); // Change the number to control the scroll amount
    }
  }


  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  previousImage() {
    this.fadeOutImage(() => {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.imageCollection.length) % this.imageCollection.length;
    });
  }

  nextImage() {
    this.fadeOutImage(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageCollection.length;
    });
  }

  fadeOutImage(callback: Function) {
    const imageWrapper = document.querySelector('.image-wrapper');
    if (imageWrapper) {
      (imageWrapper as HTMLElement).style.opacity = '0';
      setTimeout(() => {
        callback();
        setTimeout(() => {
          (imageWrapper as HTMLElement).style.opacity = '1';
        });
      }, 250);  // delay should match the transition duration
    } else {
      callback();
    }
  }







  illustrations: any[] = []
  illustration: Illustration = {} as Illustration

  constructor(private route: ActivatedRoute,
    private illustrationService: IllustrationService,
    private dataService: DataService,
    // private openaiService: OpenaiService,
    public dialog: MatDialog) {
    const data = this.route.snapshot.data['data'];
    this.illustrations = data
  }

  ngOnInit(): void {
    this.loadIllustrations()


  }

  illustrationsIds: any[] = []
  loadIllustrations(): void {
    this.dataService.fetchData<any>('assets/data/week0/visuals/visuals.json').subscribe(
      data => {
        this.illustrationsIds = data.ids;
        this.illustrationService.getIllustrationsByIds(this.illustrationsIds).subscribe(
          (data: Illustration[]) => {
            this.illustrations = data.map(illustration => ({
              ...illustration,
              thumbnailLoaded: false
            }));
    
            const id = this.illustrationsIds[0]
            if (id) {
              this.illustration = this.illustrations.filter(illustration => illustration.id == id)[0]
              this.imageCollection = this.illustration.imagePaths.map((imgSrc: any) => ({
                src: imgSrc,
                alt: 'Chocheng Fall 2023 Collection Image',
                loaded: false
              }));
    
              this.illustrationThumbnails = this.illustrations.map((illustration: Illustration) => ({
                src: illustration.imagePaths[0],
                title: illustration.title,
                loaded: false
              }))
            }
          },
          error => {
            console.error('Error fetching illustrations', error);
          }
        );
      },
      error => {
        console.log("Failed to load illustrations data")
        // this.loading = false;
      }
    );

  }

  showModal: boolean = false;
  gptQuestion: string = '';
  gptResponse: string = '';
  toggleModal() {
    this.showModal = !this.showModal;
  }

  isLoading: boolean = false;

  askGPT() {
    // this.isLoading = true;
    // debugger
    // this.openaiService.askGPT(this.gptQuestion).subscribe(
    //   (responseText: string) => { // Explicitly type the response
    //     this.gptResponse = responseText;
    //     this.isLoading = false;
    //   },
    //   (error: any) => {
    //     console.error('Error asking GPT:', error.message);
    //     console.error('Full Error:', error);
    //     this.isLoading = false;
    //   }
    // );
  }

  toggleGPT() {
    this.showGPTInput = !this.showGPTInput;
  }

  onLoadImage(image: any) {

    image.loaded = true
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LnurlPayDialogComponent,

    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openGptDialog() {
    console.log('Coming soon');

  }

  chooseIlllustration(illustration: Illustration) {
    debugger
    this.illustration = illustration
    this.imageCollection = this.illustration.imagePaths.map((imgSrc: any) => ({
      src: imgSrc,
      alt: 'Chocheng Fall 2023 Collection Image',
      loaded: false
    }));
  }
}
