export class Task {
  id: number;
  title: string;
  itemId: number;
  item: string;
  personInCharge: string;
  state: string;
  acceptanceCriteria: Map<string, boolean>;
}
