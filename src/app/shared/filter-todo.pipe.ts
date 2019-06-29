import {Pipe, PipeTransform} from '@angular/core';
import {FILTERS_VALID} from '../todo-app/redux/filter/filter.actions';
import {Todo} from '../todo-app/redux/models/Todo';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], filter: FILTERS_VALID): Todo[] {
    switch (filter) {
      case FILTERS_VALID.COMPLETADOS:
        return todos.filter(t => t.completado);

      case FILTERS_VALID.PENDIENTES:
        return todos.filter(t => !t.completado);

      default:
        return todos;
    }
  }

}
