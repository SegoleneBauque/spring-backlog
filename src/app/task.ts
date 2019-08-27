export class Task {
  id: number;
  title: string;
  item: string;
  personInCharge: string;
  state: string;
  acceptanceCriteria: Map<string, boolean>;
}
