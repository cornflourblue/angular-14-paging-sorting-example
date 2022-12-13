import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent {
    items: any[] = [];
    pageOfItems?: Array<any>;
    sortProperty: string = 'id';
    sortOrder = 1;
    loading = false;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        // fetch items from the backend api
        this.loading = true;
        this.http.get<any[]>('/items')
            .subscribe(x => {
                this.items = x;
                this.loading = false;
            });
    }

    onChangePage(pageOfItems: Array<any>) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }

    sortBy(property: string) {
        this.sortOrder = property === this.sortProperty ? (this.sortOrder * -1) : 1;
        this.sortProperty = property;
        this.items = [...this.items.sort((a: any, b: any) => {
            // sort comparison function
            let result = 0;
            if (a[property] < b[property]) {
                result = -1;
            }
            if (a[property] > b[property]) {
                result = 1;
            }
            return result * this.sortOrder;
        })];
    }

    sortIcon(property: string) {
        if (property === this.sortProperty) {
            return this.sortOrder === 1 ? '☝️' : '👇';
        }
        return '';
    }
}