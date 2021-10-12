import { TodoItem } from './todoitems';

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'Seyma';
    this.items = [
      { description: 'kahvaltı', action: true },
      { description: 'spor', action: false},
      { description: 'alışveriş', action: false},
    ];
  }
}
