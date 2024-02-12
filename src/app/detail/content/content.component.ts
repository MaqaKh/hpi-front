import { AfterViewInit, Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-detail-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class DetailContentComponent implements AfterViewInit {

  ngAfterViewInit() {
    $('.slider').slick();
  }

  defaultOptions: any = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev">Previous</button>',
    nextArrow: '<button class="slick-next">Next</button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
};
}
