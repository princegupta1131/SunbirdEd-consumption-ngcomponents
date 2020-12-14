import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'sb-pill-item',
    templateUrl: './pill-item.component.html',
    styleUrls: ['./pill-item.component.scss']
})

export class PillItemComponent {

    @ViewChild(TemplateRef) template: TemplateRef<any>;

    @Input() name: string;
    @Input() icon: string;
    @Input() value?: any;
    @Output() click = new EventEmitter<MouseEvent>();

    onSelect?: (pill: PillItemComponent, event: MouseEvent) => void;
    selected: boolean;

    onClick(event) {
        this.click.emit(event);
        this.selected = !this.selected;
        if (this.onSelect) {
            this.onSelect(this, event);
        }
    }
}
