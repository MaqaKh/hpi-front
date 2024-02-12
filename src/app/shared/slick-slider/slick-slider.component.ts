import {Component, Input, ElementRef, AfterContentInit} from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'app-slick-slider',
    template: `
        <ng-content></ng-content>
    `,
    styles: []
})

export class SlickSliderComponent implements AfterContentInit {
    @Input() options: any;
    $element: any;
    @Input() isLoad = false;
    defaultOptions: any = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 6,
        slidesToScroll: 6,
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

    constructor(private el: ElementRef) {
    }

    ngAfterContentInit(): void {
        const mergedOptions = { ...this.defaultOptions, ...this.options };
        this.$element = jQuery(this.el.nativeElement).slick(mergedOptions);
    }
}