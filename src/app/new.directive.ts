import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNew]'
})
export class NewDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.backgroundColor = 'red';
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}

