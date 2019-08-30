export class Task {
  id: number;
  title: string;
  itemId: number;
  item: string;
  personInCharge: string;
  state: string;
  acceptanceCriterias: [{ key: string, value: boolean }];
}
