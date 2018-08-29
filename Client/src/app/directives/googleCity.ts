
import { Component, OnInit, Input, Output, Directive, ElementRef, EventEmitter, NgZone, } from '@angular/core';
import { NgModel } from '@angular/forms';

declare var google: any;
@Directive({

    selector: '[GoogleCity]',
    exportAs: '[GoogleCity]',
    providers: [NgModel],
    host: {
        '(input)': 'onInputChange()'
    }
})
export class GoogleCity {

    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    modelValue: any;
    autocomplete: any;
    private _el: HTMLElement;


    constructor(el: ElementRef, private model: NgModel, private zone: NgZone) {
        this._el = el.nativeElement;
        this.modelValue = this.model;
        var input = this._el;

        

        this.autocomplete = new google.maps.places.Autocomplete(input, {});
        // google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
        //     var place = this.autocomplete.getPlace();
        //     this.zone.run(() => this.invokeEvent(place));
        // });

    }

    invokeEvent(place: Object) {
        this.setAddress.emit(place);
    }
    onInputChange() {
        console.log(this.model);
    }

}








