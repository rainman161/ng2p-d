import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../shared/models/categiry.model';
import { Event } from '../../shared/models/event.model';

@Component({
  selector: 'wfm-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {
  @Input() events: Event[] = [];
  @Input() categories: Category[] = [];
  searchField = 'amount';
  searchValue = '';
  searchPlaceholder = 'Сумма';

  ngOnInit() {
    this.events.forEach((e) => {
      e.categoryName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getTypeClass(event: Event) {
    return {
      'label': true,
      'label-success': event.type === 'income',
      'label-danger': event.type === 'outcome'
    };
  }

  setSearchParam(field: string) {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      type: 'Тип',
      category: 'Категория'
    };
    this.searchField = field;
    this.searchPlaceholder = namesMap[field];
  }

}
